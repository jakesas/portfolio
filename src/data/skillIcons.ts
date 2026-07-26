import { IconType } from 'react-icons';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiFramer,
  SiNodedotjs,
  SiGraphql,
  SiPostgresql,
  SiFirebase,
  SiSocketdotio,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
  SiVite,
  SiGit,
  SiAuth0,
  SiJsonwebtokens,
  SiLinux,
  SiCisco,
  SiRedux,
} from 'react-icons/si';
import { Cpu, Terminal, FileText, Table, Monitor } from 'lucide-react';

export function getSkillIcon(skillName: string): IconType | typeof Cpu | typeof Terminal | typeof FileText | typeof Table | typeof Monitor {
  const name = skillName.toLowerCase();

  if (name.includes('typescript') || name.includes('javascript')) return SiTypescript;
  if (name.includes('react') || name.includes('next.js') || name.includes('motion')) return SiReact;
  if (name.includes('tailwind')) return SiTailwindcss;
  if (name.includes('html') || name.includes('canvas') || name.includes('webgl') || name.includes('shader')) return SiHtml5;
  if (name.includes('framer')) return SiFramer;
  if (name.includes('node') || name.includes('express') || name.includes('fastify')) return SiNodedotjs;
  if (name.includes('graphql') || name.includes('rest')) return SiGraphql;
  if (name.includes('postgres') || name.includes('sql') || name.includes('drizzle') || name.includes('prisma')) return SiPostgresql;
  if (name.includes('firebase') || name.includes('firestore')) return SiFirebase;
  if (name.includes('websocket') || name.includes('socket')) return SiSocketdotio;
  if (name.includes('auth') || name.includes('oauth') || name.includes('jwt')) return SiAuth0;
  if (name.includes('google cloud') || name.includes('gcp') || name.includes('cloud run')) return SiGooglecloud;
  if (name.includes('docker')) return SiDocker;
  if (name.includes('ci/cd') || name.includes('github actions')) return SiGithubactions;
  if (name.includes('vite') || name.includes('esbuild') || name.includes('webpack')) return SiVite;
  if (name.includes('git')) return SiGit;
  if (name.includes('gemini') || name.includes('genai')) return SiGooglecloud;
  if (name.includes('state management') || name.includes('redux')) return SiRedux;
  if (name.includes('linux')) return SiLinux;
  if (name.includes('cisco') || name.includes('network config') || name.includes('network trouble') || name.includes('mikrotik')) return SiCisco;
  if (name.includes('hardware') || name.includes('cctv') || name.includes('printer')) return Cpu;
  if (name.includes('software')) return Monitor;
  if (name.includes('word') || name.includes('powerpoint')) return FileText;
  if (name.includes('excel') || name.includes('data entry') || name.includes('table')) return Table;
  if (name.includes('microsoft') || name.includes('windows') || name.includes('office')) return Monitor;
  if (name.includes('prompt') || name.includes('llm') || name.includes('token') || name.includes('function calling') || name.includes('grounding')) return SiGooglecloud;

  return Terminal;
}
