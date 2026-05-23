import "../../style/CodeView.css";

interface CodeViewProps {
  code: string;
}

export default function CodeView({ code }: CodeViewProps) {
  return (
    <div className="code-wrapper">
      <div className="code-header">
        <span>Generated Test</span>
      </div>

      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </div>
  );
}
