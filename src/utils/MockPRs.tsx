import type { PullRequest } from "./PullRequestType";

const titles = [
  'feat: implementar autenticação OAuth2',
  'fix: corrigir bug no login',
  'refactor: conexão de banco de dados',
  'feat: adicionar dashboard analytics',
  'style: melhorar responsividade mobile',
  'test: adicionar testes unitários',
  'feat: integração com Stripe',
  'fix: erro de timeout na API',
  'refactor: separar hooks customizados',
  'feat: adicionar dark mode',
];

const authors = [
  'Victor_alves',
  'B_meurer',
  'Lucas_dev',
  'Ana_code',
  'FernandaTech',
  'CarlosJS',
];

export const mockPRs: PullRequest[] = Array.from({ length: 30 }, (_, index) => ({
  id: `${1290 + index}`,
  title: titles[index % titles.length],
  author: authors[index % authors.length],
  time: `${(index + 1) * 5} min atrás`,
  status: index % 3 === 0 ? 'rejected' : 'approved',
}));