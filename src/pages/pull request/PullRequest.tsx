import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  CircleCheck,
} from "lucide-react";

import "../../style/PullRequest.css";
import { mockPRs } from "../../utils/MockPRs";
import Pagination from "../../component/Pagination";
import Skeleton from "../../component/Skeleton";
import { formatarTempo } from "../../utils/FormatarTempo";

const ITEMS_PER_PAGE = 6;

interface PullRequestProps {
  query: string;
}

const PullRequest: React.FC<PullRequestProps> = ({ query }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedPR, setExpandedPR] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredPRs = mockPRs.filter((pr) => {
    if (!normalizedQuery) return true;

    const inTitle = pr.title.toLowerCase().includes(normalizedQuery);
    const inAuthor = pr.author.toLowerCase().includes(normalizedQuery);
    const inId = String(pr.id).toLowerCase().includes(normalizedQuery);

    return inTitle || inAuthor || inId;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPRs.length / ITEMS_PER_PAGE)
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentPRs = filteredPRs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleCard = (id: string) => {
    setExpandedPR((prev) => {
      const nextState = prev === id ? null : id;

      if (nextState) {
        setTimeout(() => {
          cardRefs.current[id]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 180);
      }

      return nextState;
    });
  };

  const formatTime = formatarTempo;

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 320);
    return () => clearTimeout(t);
  }, [currentPage, query]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="pr-section">
          <h2 className="section-title">Pull Requests</h2>

          <div className="pr-list">
            {loading ? (
              Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                <Skeleton key={i} />
              ))
            ) : currentPRs.length === 0 ? (
              <div className="empty-message">
                Nenhum pull request encontrado
              </div>
            ) : (
              currentPRs.map((pr) => {
                const prId = String(pr.id);
                const isExpanded = expandedPR === prId;

                return (
                  <div
                    key={prId}
                    ref={(el) => {
                      cardRefs.current[prId] = el;
                    }}
                    className={`pr-card ${isExpanded ? "expanded" : ""}`}
                  >
                    <div
                      className="pr-card-header"
                      onClick={() => toggleCard(prId)}
                    >
                      <div className="pr-info">
                        <span className="pr-id">#{pr.id}</span>

                        <div>
                          <p className="pr-title">{pr.title}</p>
                          <p className="pr-meta">
                            {pr.author} • {formatTime(pr.timeMinutes)}
                          </p>
                        </div>
                      </div>

                      <div className="pr-status">
                        {pr.status === "approved" ? (
                          <CheckCircle
                            className="status-icon approved"
                            size={26}
                          />
                        ) : (
                          <XCircle className="status-icon rejected" size={26} />
                        )}

                        {isExpanded ? (
                          <ChevronUp className="arrow" size={20} />
                        ) : (
                          <ChevronDown className="arrow" size={20} />
                        )}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className={`pr-details ${isExpanded ? "open" : ""}`}>
                        <div className="details-grid">
                          <div className="detail-item">
                            <span className="detail-label">Violações</span>
                            <span className="detail-value">
                              {pr.details.violations}
                            </span>
                          </div>

                          <div className="detail-item">
                            <span className="detail-label">Testes</span>
                            <span className="detail-value">
                              {pr.details.tests}
                            </span>
                          </div>

                          <div className="detail-item">
                            <span className="detail-label">Cobertura</span>
                            <span className="detail-value">
                              {pr.details.coverage}
                            </span>
                          </div>

                          <div className="detail-item">
                            <span className="detail-label">Risco</span>
                            <span className={`risk-badge ${pr.details.risk}`}>
                              {pr.details.risk}
                            </span>
                          </div>
                        </div>

                        <div className="detail-notes">
                          {pr.details.notes.map((note, index) => (
                            <div key={index} className="note-item">
                              <CircleCheck size={14} />
                              <span>{note}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
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
