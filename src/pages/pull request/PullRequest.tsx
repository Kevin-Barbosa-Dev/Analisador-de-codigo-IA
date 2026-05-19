import React from 'react';
import { CheckCircle, XCircle, Search } from 'lucide-react';
import './PullRequest.css';

interface PullRequest {
  id: string;
  title: string;
  author: string;
  time: string;
  status: 'approved' | 'rejected';
}

const mockPRs: PullRequest[] = [
  { id: '1292', title: 'feat: Implementar autenticação OAuth2', author: 'Victor_alves', time: '15 min atrás', status: 'approved' },
  { id: '1292', title: 'refactor: Conexão de banco de dados', author: 'B_meurer', time: '30 min atrás', status: 'rejected' },
  { id: '1292', title: 'feat: Implementar autenticação OAuth2', author: 'Victor_alves', time: '15 min atrás', status: 'approved' },
  { id: '1292', title: 'refactor: Conexão de banco de dados', author: 'B_meurer', time: '30 min atrás', status: 'rejected' },
];

const PullRequest: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Search Bar */}
        <div className="search-container">
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Buscar pull requests, testes ..."
              className="search-input"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab">Visão Geral</button>
          <button className="tab active">Pull Requests</button>
          <button className="tab">Regra de Negócio</button>
          <button className="tab">Testes</button>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-label">PRs hoje</p>
            <p className="stat-value">23</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Aprovados</p>
            <p className="stat-value approved">21</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Reprovados</p>
            <p className="stat-value rejected">2</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Testes gerados</p>
            <p className="stat-value">187</p>
          </div>
        </div>

        {/* Recent PRs */}
        <div className="pr-section">
          <h2 className="section-title">Pull Request Recentes</h2>

          <div className="pr-list">
            {mockPRs.map((pr, index) => (
              <div key={index} className="pr-card">
                <div className="pr-info">
                  <span className="pr-id">#{pr.id}</span>
                  <div>
                    <p className="pr-title">{pr.title}</p>
                    <p className="pr-meta">{pr.author} • {pr.time}</p>
                  </div>
                </div>

                <div className="pr-status">
                  {pr.status === 'approved' ? (
                    <CheckCircle className="status-icon approved" size={28} />
                  ) : (
                    <XCircle className="status-icon rejected" size={28} />
                  )}
                  <span className="arrow">▼</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PullRequest;