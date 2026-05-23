import "../../style/Teste.css";

import { FileCode2, CheckCircle2, Play, Terminal, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

import { mockTests } from "../../utils/MockTest";
import ArquivosParaTeste from "./ArquivosParaTeste";
import TerminalView from "./TerminalView";
import CodeView from "./CodeView";

interface TestsProps {
  query: string;
}

const TERMINAL_LINES = [
  "Analisando arquivo coupon.service.ts...",
  "Identificando regras de negócio...",
  "Detectado fluxo progressivo de desconto...",
  "Mapeando edge cases...",
  "Gerando cenários inválidos...",
  "Criando testes de integração...",
  "Validando cobertura mínima...",
  "Testes gerados com sucesso.",
];

const TEST_CODE = `describe('CouponService.applyProgressive', () => {
  it('aplica desconto progressivo até o teto fiscal', () => {
    const result = service.apply({
      subtotal: 1500,
      coupon: 'PROG10'
    });

    expect(result.discount).toBe(150);
    expect(result.taxBase).toBe(1350);
  });

  it('rejeita acúmulo com promoção sazonal', () => {
    expect(() =>
      service.apply({
        subtotal: 100,
        coupon: 'PROG10',
        season: 'BLACK'
      })
    ).toThrow(BusinessRuleViolation);
  });
});`;

export default function Tests({ query }: TestsProps) {
  const [mode, setMode] = useState<"idle" | "generating" | "done">("idle");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [showTerminal, setShowTerminal] = useState(false);

  const selectedFile = mockTests[0];

  const normalizedQuery = query.trim().toLowerCase();

  const filteredTests = mockTests.filter((file) => {
    if (!normalizedQuery) return true;

    return (
      file.path.toLowerCase().includes(normalizedQuery) ||
      file.scenarios.toLowerCase().includes(normalizedQuery) ||
      String(file.coverage).includes(normalizedQuery)
    );
  });

  const handleGenerateTests = () => {
    setMode("generating");
    setShowTerminal(true);
    setTerminalLines([]);

    TERMINAL_LINES.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, line]);

        if (index === TERMINAL_LINES.length - 1) {
          setTimeout(() => setMode("done"), 700);
        }
      }, index * 900);
    });
  };

  return (
    <div className="tests-container">
      <div className="tests-content">
        <div className="tests-wrapper">
          {/* LEFT SIDE */}
          <ArquivosParaTeste
            filteredTests={filteredTests}
            selectedFile={selectedFile}
          />

          {/* RIGHT SIDE */}
          <div className="tests-preview">
            <div className="preview-card">
              {/* HEADER */}
              <div className="preview-header">
                <div className="preview-file">
                  <FileCode2 size={16} />
                  <span>{selectedFile.path}</span>
                </div>

                {mode === "idle" && (
                  <button
                    className="generate-button"
                    onClick={handleGenerateTests}
                  >
                    Gerar Testes
                  </button>
                )}

                {mode === "done" && (
                  <button
                    className="terminal-button"
                    onClick={() => setShowTerminal((v) => !v)}
                  >
                    {showTerminal ? (
                      <>
                        <Code2 size={16} />
                        Ver Código
                      </>
                    ) : (
                      <>
                        <Terminal size={16} />
                        Ver Terminal
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* TERMINAL (COMPONENTE SEPARADO) */}
              {(mode === "generating" || showTerminal) && (
                <TerminalView
                  lines={terminalLines}
                  isGenerating={mode === "generating"}
                />
              )}

              {/* CODE */}
              {mode === "done" && !showTerminal && (
                <>
                  <CodeView code={TEST_CODE} />

                  <div className="preview-footer">
                    <div className="suggested-tests">
                      <CheckCircle2 size={18} />
                      <span>Testes sugeridos</span>
                    </div>

                    <button className="run-button">
                      <Play size={16} />
                      Rodar localmente
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
