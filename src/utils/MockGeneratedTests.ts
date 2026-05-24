export type TerminalLineType =
  | "command"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "header"
  | "result"
  | "dim";

export interface TerminalLine {
  type: TerminalLineType;
  text: string;
}

export interface GeneratedPreset {
  terminalLines: TerminalLine[];
  testCode: string;
  command: string;
}

const defaultPreset: GeneratedPreset = {
  command: "ai-test-generator scan --file selected-file.ts",
  terminalLines: [
    { type: "command", text: "ai-test-generator scan --file selected-file.ts" },
    { type: "info", text: "Conectando ao workspace..." },
    { type: "info", text: "Analisando arquivo selecionado..." },
    { type: "success", text: "✓ Estrutura principal identificada" },
    { type: "success", text: "✓ Casos de teste gerados com sucesso" },
    { type: "warning", text: "⚠ Alguns pontos podem exigir revisão manual" },
    { type: "result", text: "RESULTADO: APROVADO" },
  ],
  testCode: `describe("SelectedFile", () => {
  it("deve passar no fluxo principal", () => {
    expect(true).toBe(true);
  });
});`,
};

export const GENERATED_TEST_PRESETS: Record<string, GeneratedPreset> = {
  "src/auth/middleware.ts": {
    command: "ai-test-generator scan --file src/auth/middleware.ts",
    terminalLines: [
      {
        type: "command",
        text: "ai-test-generator scan --file src/auth/middleware.ts",
      },
      { type: "info", text: "Conectando ao workspace..." },
      { type: "info", text: "Lendo middleware de autenticação..." },
      { type: "info", text: "Identificando guards, tokens e headers..." },
      { type: "success", text: "✓ Fluxo de request autenticado detectado" },
      { type: "success", text: "✓ Fluxo sem token detectado" },
      { type: "success", text: "✓ Fluxo com token expirado detectado" },
      { type: "warning", text: "⚠ 1 regra de autorização precisa de atenção" },
      { type: "header", text: "─── TESTES GERADOS ───" },
      { type: "success", text: "8 testes unitários gerados" },
      { type: "success", text: "3 testes de integração gerados" },
      { type: "success", text: "1 teste de segurança gerado" },
      { type: "result", text: "RESULTADO: APROVADO" },
    ],
    testCode: `import { describe, it, expect } from "vitest";
import { authMiddleware } from "@/auth/middleware";

describe("authMiddleware", () => {
  it("permite requisição com token válido", async () => {
    const req = new Request("http://localhost/api/private", {
      headers: { Authorization: "Bearer valid-token" },
    });

    const res = await authMiddleware(req as any);
    expect(res.status).not.toBe(401);
  });

  it("bloqueia requisição sem token", async () => {
    const req = new Request("http://localhost/api/private");
    const res = await authMiddleware(req as any);

    expect(res.status).toBe(401);
  });
});`,
  },

  "src/utils/tax-calc.ts": {
    command: "ai-test-generator scan --file src/utils/tax-calc.ts",
    terminalLines: [
      {
        type: "command",
        text: "ai-test-generator scan --file src/utils/tax-calc.ts",
      },
      { type: "info", text: "Conectando ao workspace..." },
      { type: "info", text: "Lendo utilitário de cálculo tributário..." },
      { type: "info", text: "Mapeando fórmulas, faixas e arredondamentos..." },
      { type: "success", text: "✓ Cálculo base identificado" },
      { type: "success", text: "✓ Faixa progressiva detectada" },
      { type: "success", text: "✓ Regras de isenção detectadas" },
      {
        type: "warning",
        text: "⚠ 2 cenários de arredondamento foram marcados",
      },
      { type: "header", text: "─── TESTES GERADOS ───" },
      { type: "success", text: "10 testes unitários gerados" },
      { type: "success", text: "4 testes de borda gerados" },
      { type: "success", text: "2 testes de arredondamento gerados" },
      { type: "result", text: "RESULTADO: APROVADO" },
    ],
    testCode: `import { describe, it, expect } from "vitest";
import { calculateTax } from "@/utils/tax-calc";

describe("calculateTax", () => {
  it("calcula imposto básico corretamente", () => {
    const result = calculateTax(1000);
    expect(result).toBeGreaterThan(0);
  });

  it("retorna zero para valor isento", () => {
    const result = calculateTax(0);
    expect(result).toBe(0);
  });
});`,
  },
};

export function getGeneratedPreset(filePath: string): GeneratedPreset {
  return GENERATED_TEST_PRESETS[filePath] ?? defaultPreset;
}
