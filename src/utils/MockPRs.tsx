import type { PullRequest } from "./PullRequestType";

const titles = [
  "feat: implementar autenticação OAuth2",
  "fix: corrigir bug no login",
  "refactor: otimizar conexão com banco",
  "feat: adicionar dashboard analytics",
  "style: melhorar responsividade mobile",
  "test: adicionar testes unitários",
  "feat: integrar pagamento com Stripe",
  "fix: corrigir timeout na API",
  "refactor: separar hooks customizados",
  "feat: adicionar dark mode",
  "feat: criar sistema de notificações",
  "fix: ajustar validação de formulário",
  "refactor: simplificar estrutura de componentes",
  "feat: adicionar exportação em CSV",
  "test: cobrir fluxo de cadastro",
  "feat: criar página de perfil",
  "fix: corrigir erro no carregamento inicial",
  "refactor: reduzir duplicação de código",
  "feat: adicionar filtros na listagem",
  "test: validar integrações do checkout",
  "feat: implementar busca global",
  "fix: corrigir header quebrado no mobile",
  "refactor: melhorar organização das rotas",
  "feat: adicionar modal de confirmação",
  "test: criar testes de permissão",
  "feat: integrar API de relatórios",
  "fix: corrigir falha no refresh token",
  "refactor: modularizar serviços da aplicação",
  "feat: adicionar histórico de atividades",
  "fix: ajustar estilização do footer",
];

const authors = [
  "Victor_alves",
  "B_meurer",
  "Lucas_dev",
  "Ana_code",
  "FernandaTech",
  "CarlosJS",
];

const details: Array<{
  violations: number;
  tests: number;
  coverage: string;
  risk: "low" | "medium" | "high" | "critical";
  notes: string[];
}> = [
  {
    violations: 0,
    tests: 12,
    coverage: "94%",
    risk: "low",
    notes: [
      "Segue padrão de autenticação da equipe",
      "Testes unitários completos",
    ],
  },
  {
    violations: 1,
    tests: 8,
    coverage: "87%",
    risk: "medium",
    notes: [
      "Ajuste necessário na validação de senha",
      "Cobertura boa, mas pode melhorar",
    ],
  },
  {
    violations: 0,
    tests: 15,
    coverage: "96%",
    risk: "low",
    notes: [
      "Refatoração sem impacto funcional",
      "Estrutura do código ficou mais limpa",
    ],
  },
  {
    violations: 2,
    tests: 10,
    coverage: "82%",
    risk: "high",
    notes: [
      "Mudança crítica em fluxo sensível",
      "Recomenda revisão manual do time",
    ],
  },
  {
    violations: 0,
    tests: 18,
    coverage: "91%",
    risk: "low",
    notes: [
      "Responsividade validada em múltiplos tamanhos",
      "Layout consistente no mobile",
    ],
  },
  {
    violations: 3,
    tests: 6,
    coverage: "76%",
    risk: "critical",
    notes: [
      "Pouca cobertura em cenários de erro",
      "Precisa de ajuste antes do merge",
    ],
  },
  {
    violations: 0,
    tests: 14,
    coverage: "93%",
    risk: "medium",
    notes: [
      "Integração externa funcionando corretamente",
      "Atenção ao tratamento de falhas da API",
    ],
  },
  {
    violations: 1,
    tests: 11,
    coverage: "89%",
    risk: "medium",
    notes: [
      "Timeout tratado em ambiente de teste",
      "Pode exigir ajuste em produção",
    ],
  },
  {
    violations: 0,
    tests: 9,
    coverage: "90%",
    risk: "low",
    notes: [
      "Hooks customizados reutilizáveis",
      "Melhorou a legibilidade do módulo",
    ],
  },
  {
    violations: 0,
    tests: 13,
    coverage: "95%",
    risk: "low",
    notes: [
      "Dark mode aprovado pela equipe de UI",
      "Sem regressões visuais encontradas",
    ],
  },
  {
    violations: 0,
    tests: 16,
    coverage: "92%",
    risk: "medium",
    notes: ["Notificações com boa cobertura", "Atenção ao estado de leitura"],
  },
  {
    violations: 1,
    tests: 7,
    coverage: "84%",
    risk: "medium",
    notes: [
      "Validação de formulário precisa de ajuste",
      "Casos de borda ainda abertos",
    ],
  },
  {
    violations: 0,
    tests: 14,
    coverage: "94%",
    risk: "low",
    notes: [
      "Componentes reorganizados por responsabilidade",
      "Arquitetura mais fácil de manter",
    ],
  },
  {
    violations: 1,
    tests: 10,
    coverage: "88%",
    risk: "medium",
    notes: [
      "Exportação CSV funcionando no fluxo principal",
      "Ajustar formato em casos especiais",
    ],
  },
  {
    violations: 2,
    tests: 12,
    coverage: "86%",
    risk: "high",
    notes: [
      "Fluxo de cadastro com cenários pendentes",
      "Revisar mensagens de erro",
    ],
  },
  {
    violations: 0,
    tests: 15,
    coverage: "93%",
    risk: "low",
    notes: [
      "Página de perfil pronta para integração",
      "Campos principais renderizando corretamente",
    ],
  },
  {
    violations: 3,
    tests: 9,
    coverage: "79%",
    risk: "critical",
    notes: [
      "Carregamento inicial ainda instável",
      "Pode impactar experiência do usuário",
    ],
  },
  {
    violations: 0,
    tests: 11,
    coverage: "91%",
    risk: "low",
    notes: [
      "Duplicação reduzida com sucesso",
      "Código mais enxuto e previsível",
    ],
  },
  {
    violations: 1,
    tests: 13,
    coverage: "90%",
    risk: "medium",
    notes: [
      "Filtros funcionando conforme esperado",
      "Ainda falta testar combinações avançadas",
    ],
  },
  {
    violations: 0,
    tests: 17,
    coverage: "96%",
    risk: "low",
    notes: ["Checkout com validação completa", "Fluxo pronto para homologação"],
  },
  {
    violations: 0,
    tests: 18,
    coverage: "95%",
    risk: "low",
    notes: ["Busca global com boa performance", "Resultados consistentes"],
  },
  {
    violations: 2,
    tests: 8,
    coverage: "83%",
    risk: "high",
    notes: [
      "Header adaptado para telas menores",
      "Ainda há inconsistências no breakpoint",
    ],
  },
  {
    violations: 0,
    tests: 12,
    coverage: "92%",
    risk: "low",
    notes: [
      "Rotas reorganizadas para facilitar manutenção",
      "Navegação mais clara",
    ],
  },
  {
    violations: 1,
    tests: 9,
    coverage: "85%",
    risk: "medium",
    notes: ["Modal de confirmação revisado", "Ajustar foco acessível"],
  },
  {
    violations: 0,
    tests: 10,
    coverage: "89%",
    risk: "medium",
    notes: ["Permissões cobertas pelos testes", "Fluxo de acesso consistente"],
  },
  {
    violations: 0,
    tests: 14,
    coverage: "94%",
    risk: "low",
    notes: [
      "API de relatórios integrada com sucesso",
      "Boa separação entre serviço e UI",
    ],
  },
  {
    violations: 2,
    tests: 7,
    coverage: "80%",
    risk: "high",
    notes: [
      "Refresh token exigiu tratamento extra",
      "Revisar expiração de sessão",
    ],
  },
  {
    violations: 0,
    tests: 15,
    coverage: "93%",
    risk: "low",
    notes: [
      "Serviços modularizados corretamente",
      "Melhorou a testabilidade do projeto",
    ],
  },
  {
    violations: 1,
    tests: 11,
    coverage: "88%",
    risk: "medium",
    notes: [
      "Histórico de atividades com boa base",
      "Falta validar paginação dos eventos",
    ],
  },
  {
    violations: 0,
    tests: 9,
    coverage: "90%",
    risk: "low",
    notes: [
      "Footer ajustado visualmente",
      "Melhor alinhamento em telas pequenas",
    ],
  },
];

export const mockPRs: PullRequest[] = Array.from(
  { length: 30 },
  (_, index) => ({
    id: `${1290 + index}`,
    title: titles[index],
    author: authors[index % authors.length],
    timeMinutes: (index + 1) * 5,
    status: index % 3 === 0 ? "rejected" : "approved",
    details: details[index],
  }),
);
