# Analisador de Código IA

## Visão geral

Este projeto é uma interface web em React para analisar pull requests e visualizar sugestões de testes. A aplicação foi construída com Vite e React e apresenta um fluxo simples de navegação entre PRs e testes, com busca por conteúdo e estados visuais de carregamento.

## Funcionalidades

- Lista de pull requests com resumo, status, tempo de criação e detalhes expandíveis
- Busca por ID, título ou autor
- Paginação na lista de pull requests
- Tela de testes com seleção de arquivo, visualização de terminal e código sugerido
- Geração simulada de testes com transição entre estados
- Estatísticas gerais exibidas no cabeçalho

## Tecnologias

- React
- React Router
- Vite
- TypeScript
- CSS puro
- Lucide React

## Estrutura principal

- src/App.tsx: configuração das rotas do app
- src/component: componentes reutilizáveis, como barra de busca, paginação e cabeçalho
- src/pages/pull request/PullRequest.tsx: tela de pull requests
- src/pages/teste/Teste.tsx: tela de geração e visualização de testes
- src/utils: dados mockados e utilitários

## Como executar

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em http://localhost:5173.

### Build de produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

## Scripts disponíveis

- npm run dev: inicia o servidor de desenvolvimento
- npm run build: gera a versão de produção
- npm run preview: abre a build de produção localmente
- npm run lint: executa a verificação de código

## Observações

- Os dados exibidos são simulados e estão localizados em src/utils
- A rota principal exibe a área de pull requests
- A rota /tests exibe a área de testes
- A aba Regra de Negócio está presente no cabeçalho, mas ainda não possui implementação funcional
