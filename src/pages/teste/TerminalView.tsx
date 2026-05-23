import { Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import "../../style/Terminal.css";

interface TerminalViewProps {
  lines: string[];
  isGenerating?: boolean;
}

export default function TerminalView({
  lines,
  isGenerating = false,
}: TerminalViewProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>

        <p>AI Test Generator</p>
      </div>

      <div className="terminal-body">
        {lines.map((line, index) => (
          <div key={index} className="terminal-line">
            <span className="terminal-prefix">$</span>
            <span className="terminal-text">{line}</span>
          </div>
        ))}

        {isGenerating && (
          <div className="terminal-loading">
            <Loader2 size={16} className="spin" />
            <span>IA analisando código e criando testes...</span>
          </div>
        )}

        <div className="terminal-cursor">
          <span />
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
