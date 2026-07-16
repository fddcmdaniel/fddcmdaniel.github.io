export interface StackCategory {
  dir: string;
  skills: string[];
}

export const STACK: StackCategory[] = [
  {
    dir: 'frontend/',
    skills: [
      'React',
      'Vite',
      'Next.js 16',
      'Zustand',
      'TanStack Query',
      'TypeScript',
      'HTML5',
      'CSS3',
    ],
  },
  {
    dir: 'ai_engineering/',
    skills: ['Python', 'AWS Bedrock', 'LangGraph', 'LangChain', 'Node.js', 'Java'],
  },
  {
    dir: 'quality/',
    skills: ['Playwright', 'Cypress', 'WDIO', 'MSW', 'Vitest', 'React Testing Library', 'Enzyme'],
  },
  {
    dir: 'infra/',
    skills: ['AWS', 'ArgoCD', 'Terraform'],
  },
  {
    dir: 'ides/',
    skills: ['VSCode', 'Cursor', 'OpenCode'],
  },
  {
    dir: 'legacy/',
    skills: ['React Class Components', 'Angular', 'Redux', 'Webpack'],
  }
];
