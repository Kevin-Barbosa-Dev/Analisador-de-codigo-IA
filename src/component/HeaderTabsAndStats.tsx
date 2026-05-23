import "../style/Header.css";

import { useLocation, useNavigate } from "react-router-dom";

export default function HeaderTabsAndStats() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="containerHeader">
      <div className="tabs">
        <button
          className={`tab ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          Pull Requests
        </button>

        <button className="tab">Regra de Negócio</button>

        <button
          className={`tab ${location.pathname === "/tests" ? "active" : ""}`}
          onClick={() => navigate("/tests")}
        >
          Testes
        </button>
      </div>

      <div className="stats-grid">
        <div>
          <p className="stat-label">PRs hoje</p>
          <p className="stat-value">23</p>
        </div>

        <div>
          <p className="stat-label">Aprovados</p>
          <p className="stat-value approved">21</p>
        </div>

        <div>
          <p className="stat-label">Reprovados</p>
          <p className="stat-value rejected">2</p>
        </div>

        <div>
          <p className="stat-label">Testes gerados</p>
          <p className="stat-value">187</p>
        </div>
      </div>
    </div>
  );
}
