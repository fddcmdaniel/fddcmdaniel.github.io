export interface StackCategory {
  dir: string;
  skills: string[];
}

export const STACK: StackCategory[] = [
  {
    dir: 'frontend/',
    skills: ['React', 'Vite', 'Zustand', 'TanStack Query', 'React Router', 'Next.js 16'],
  },
  {
    dir: 'core/',
    skills: ['TypeScript', 'HTML5', 'CSS3'],
  },
  {
    dir: 'backend/',
    skills: ['Node.js'],
  },
  {
    dir: 'ai_engineering/',
    skills: ['LangChain', 'LangGraph', 'AWS Bedrock'],
  },
];
