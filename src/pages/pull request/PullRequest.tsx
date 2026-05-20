import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

import '../../style/PullRequest.css';

import { mockPRs } from '../../utils/MockPRs';

import HeaderTabsAndStats from '../../component/HeaderTabsAndStats';
import SearchBar from '../../component/SearchBar';
import Pagination from '../../component/Pagination';

const ITEMS_PER_PAGE = 6;

const PullRequest: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockPRs.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentPRs = mockPRs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <SearchBar />

        <HeaderTabsAndStats />

        <div className="pr-section">
          <h2 className="section-title">
            Pull Requests Recentes
          </h2>

          <div className="pr-list">
            {currentPRs.map((pr, index) => (
              <div key={index} className="pr-card">
                <div className="pr-info">
                  <span className="pr-id">#{pr.id}</span>

                  <div>
                    <p className="pr-title">{pr.title}</p>

                    <p className="pr-meta">
                      {pr.author} • {pr.time}
                    </p>
                  </div>
                </div>

                <div className="pr-status">
                  {pr.status === 'approved' ? (
                    <CheckCircle
                      className="status-icon approved"
                      size={28}
                    />
                  ) : (
                    <XCircle
                      className="status-icon rejected"
                      size={28}
                    />
                  )}

                  <span className="arrow">▼</span>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            paginaAtual={currentPage}
            totalPaginas={totalPages}
            mudarPagina={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PullRequest;