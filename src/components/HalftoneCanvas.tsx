import React, { useRef, useEffect, useState, useCallback } from 'react';

interface HalftoneCanvasProps {
  imageSrc: string;
  theme: 'dark' | 'light';
}

export const HalftoneCanvas: React.FC<HalftoneCanvasProps> = ({ imageSrc, theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const isHoveredRef = useRef(false);
  const dotsRef = useRef<{ cx: number; cy: number; baseRadius: number }[]>([]);
  const rippleFrameRef = useRef<number>(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const gridSize = 3;
  const canvasW = 500;
  const canvasH = 600;

  const processImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      canvas.width = canvasW;
      canvas.height = canvasH;

      const offCanvas = document.createElement('canvas');
      offCanvas.width = canvasW;
      offCanvas.height = canvasH;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      const scale = Math.max(canvasW / img.width, canvasH / img.height);
      const cw = Math.round(img.width * scale);
      const ch = Math.round(img.height * scale);
      const dx = Math.round((canvasW - cw) / 2);
      const dy = -20;
      offCtx.drawImage(img, 0, 0, img.width, img.height, dx, dy, cw, ch);

      const imgData = offCtx.getImageData(0, 0, canvasW, canvasH);
      const pixels = imgData.data;

      const dots: { cx: number; cy: number; baseRadius: number }[] = [];
      for (let y = 0; y < canvasH; y += gridSize) {
        for (let x = 0; x < canvasW; x += gridSize) {
          const pixelIdx = (Math.floor(y) * canvasW + Math.floor(x)) * 4;
          const alpha = pixels[pixelIdx + 3];
          if (alpha < 128) continue;
          const r = pixels[pixelIdx];
          const g = pixels[pixelIdx + 1];
          const b = pixels[pixelIdx + 2];
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          const exposed = Math.pow(luminance, 0.75);
          const darkness = 1 - exposed;
          const radius = Math.max(0, darkness) * (gridSize / 2) * 1.4;
          if (radius >= 0.3) {
            dots.push({ cx: x + gridSize / 2, cy: y + gridSize / 2, baseRadius: radius });
          }
        }
      }
      dotsRef.current = dots;

      ctx.clearRect(0, 0, canvasW, canvasH);
      for (const d of dots) {
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(d.cx, d.cy, d.baseRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };
  }, [imageSrc]);

  useEffect(() => {
    processImage();
  }, [processImage]);

  useEffect(() => {
    return () => cancelAnimationFrame(rippleFrameRef.current);
  }, []);

  const renderRipple = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dots = dotsRef.current;
    const mp = mousePosRef.current;

    ctx.clearRect(0, 0, canvasW, canvasH);

    for (const d of dots) {
      const dx = d.cx - mp.x;
      const dy = d.cy - mp.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let radius = d.baseRadius;
      if (dist < 160) {
        const rippleFactor = (1 - dist / 160);
        radius += Math.sin(timestamp * 0.008 - dist * 0.08) * rippleFactor * 0.3 * (gridSize / 2) * 1.4;
      }
      if (radius < 0.3) continue;

      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(d.cx, d.cy, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePosRef.current = {
      x: x * (canvasW / rect.width),
      y: y * (canvasH / rect.height),
    };
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: -((y - centerY) / centerY) * 3,
      y: ((x - centerX) / centerX) * 3,
    });
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    const loop = (time: number) => {
      renderRipple(time);
      if (isHoveredRef.current) {
        rippleFrameRef.current = requestAnimationFrame(loop);
      }
    };
    rippleFrameRef.current = requestAnimationFrame(loop);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    cancelAnimationFrame(rippleFrameRef.current);
    mousePosRef.current = { x: -1000, y: -1000 };
    setTilt({ x: 0, y: 0 });
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dots = dotsRef.current;
    ctx.clearRect(0, 0, canvasW, canvasH);
    for (const d of dots) {
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(d.cx, d.cy, d.baseRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={theme === 'dark' ? 'bg-white' : ''}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHoveredRef.current ? 'transform 0.08s ease-out' : 'transform 0.4s ease-out',
        }}
      >
        <canvas ref={canvasRef} className="w-full block" />
      </div>
    </div>
  );
};
