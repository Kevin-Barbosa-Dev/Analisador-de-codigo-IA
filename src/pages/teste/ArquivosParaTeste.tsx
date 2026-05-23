import { FileCode2 } from "lucide-react";

interface TestFile {
  id: number;
  path: string;
  coverage: number;
  scenarios: string;
}

interface ArquivosParaTesteProps {
  filteredTests: TestFile[];
  selectedFile: TestFile;
}

export default function ArquivosParaTeste({
  filteredTests,
  selectedFile,
}: ArquivosParaTesteProps) {
  return (
    <div className="tests-files">
      {filteredTests.map((file) => (
        <div
          key={file.id}
          className={`test-file-card ${
            file.id === selectedFile.id ? "active" : ""
          }`}
        >
          <div className="test-file-header">
            <FileCode2 size={18} />

            <span>{file.path}</span>
          </div>

          <div className="test-file-footer">
            <div className="coverage-info">
              <span>Cobertura {file.coverage}%</span>

              <div className="coverage-bar">
                <div
                  className="coverage-fill"
                  style={{
                    width: `${file.coverage}%`,
                  }}
                />
              </div>
            </div>

            <span className="scenario-count">{file.scenarios}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
