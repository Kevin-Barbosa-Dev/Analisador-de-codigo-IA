import "../../style/Teste.css";

import { FileCode2, CheckCircle2, Play, Terminal, Code2 } from "lucide-react";
import { useMemo, useState } from "react";

import { mockTests } from "../../utils/MockTest";
import { getGeneratedPreset } from "../../utils/MockGeneratedTests";
import ArquivosParaTeste from "./ArquivosParaTeste";
import TerminalView from "./TerminalView";
import CodeView from "./CodeView";

interface TestsProps {
  query: string;
}

export default function Tests({ query }: TestsProps) {
  const [mode, setMode] = useState<"idle" | "generating" | "done">("idle");
  const [showTerminal, setShowTerminal] = useState(false);
  const [selectedFilePath, setSelectedFilePath] = useState<string>(
    mockTests[0].path,
  );
  const [generatedFiles, setGeneratedFiles] = useState<Record<string, boolean>>(
    {},
  );

  const normalizedQuery = query.trim().toLowerCase();

  const filteredTests = mockTests.filter((file) => {
    if (!normalizedQuery) return true;

    return (
      file.path.toLowerCase().includes(normalizedQuery) ||
      file.scenarios.toLowerCase().includes(normalizedQuery) ||
      String(file.coverage).includes(normalizedQuery)
    );
  });

  const selectedFile = useMemo(() => {
    return (
      mockTests.find((file) => file.path === selectedFilePath) ?? mockTests[0]
    );
  }, [selectedFilePath]);

  const preset = getGeneratedPreset(selectedFile.path);
  const alreadyGenerated = !!generatedFiles[selectedFile.path];

  const handleSelectFile = (path: string) => {
    setSelectedFilePath(path);

    const wasGenerated = !!generatedFiles[path];

    if (wasGenerated) {
      setMode("done");
      setShowTerminal(true);
    } else {
      setMode("idle");
      setShowTerminal(false);
    }
  };

  const handleGenerateTests = () => {
    setMode("generating");
    setShowTerminal(true);

    setTimeout(
      () => {
        setGeneratedFiles((prev) => ({
          ...prev,
          [selectedFile.path]: true,
        }));

        setMode("done");
      },
      preset.terminalLines.length * 120 + 1000,
    );
  };

  return (
    <div className="tests-container">
      <div className="tests-content">
        <div className="tests-wrapper">
          <ArquivosParaTeste
            filteredTests={filteredTests}
            selectedFile={selectedFile}
            onSelectFile={handleSelectFile}
          />

          <div className="tests-preview">
            <div className="preview-card">
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

              {(mode === "generating" || showTerminal) && (
                <TerminalView
                  lines={preset.terminalLines}
                  isGenerating={mode === "generating"}
                  command={preset.command}
                  animate={!alreadyGenerated && mode === "generating"}
                />
              )}

              {mode === "done" && !showTerminal && (
                <>
                  <CodeView code={preset.testCode} />

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
