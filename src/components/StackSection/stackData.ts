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
    dir: 'frontend_legacy/',
    skills: ['React Class Components', 'Angular', 'Redux', 'Webpack'],
  },
  {
    dir: 'ai_backend/',
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
];
