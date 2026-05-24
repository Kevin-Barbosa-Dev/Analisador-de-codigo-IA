import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "../../style/TerminalView.css";

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

interface TerminalViewProps {
  lines: TerminalLine[];
  isGenerating?: boolean;
  command?: string;
  animate?: boolean;
}

export default function TerminalView({
  lines,
  isGenerating = false,
  command = "",
  animate = true,
}: TerminalViewProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [visibleLines, setVisibleLines] = useState(animate ? 0 : lines.length);

  useEffect(() => {
    setVisibleLines(animate ? 0 : lines.length);
  }, [lines, animate]);

  useEffect(() => {
    if (!animate) return;

    if (visibleLines < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, 120);

      return () => clearTimeout(timer);
    }
  }, [visibleLines, lines.length, animate]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleLines, isGenerating, lines]);

  const getLineClass = (type: TerminalLineType) => {
    switch (type) {
      case "command":
        return "terminal-command";
      case "success":
        return "terminal-success";
      case "warning":
        return "terminal-warning";
      case "error":
        return "terminal-error";
      case "header":
        return "terminal-header-line";
      case "result":
        return "terminal-result";
      case "dim":
        return "terminal-dim";
      default:
        return "terminal-info";
    }
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>

        <p>AI Test Generator — bash</p>
      </div>

      <div className="terminal-body">
        {lines.slice(0, visibleLines).map((line, index) => (
          <div
            key={index}
            className={`terminal-line ${getLineClass(line.type)}`}
          >
            {line.type === "command" && (
              <span className="terminal-prefix">$</span>
            )}
            <span>{line.text}</span>
          </div>
        ))}

        {isGenerating && (
          <div className="terminal-loading">
            <Loader2 size={16} className="spin" />
            <span>IA analisando código e criando testes...</span>
          </div>
        )}

        {visibleLines >= lines.length && command && (
          <div className="terminal-line terminal-command terminal-cursor-line">
            <span className="terminal-prefix">$</span>
            <span className="terminal-text">{command}</span>
            <span className="terminal-cursor" />
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
