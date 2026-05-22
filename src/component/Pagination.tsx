interface PaginationProps{
    paginaAtual:number;
    totalPaginas:number;
    mudarPagina:(page:number)=> void;
}

export default function Pagination({paginaAtual,totalPaginas,mudarPagina}:PaginationProps){
    return(
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => mudarPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}
          >
            Anterior
          </button>

          <div className="pagination-pages">
            {Array.from({ length: totalPaginas }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  onClick={() => {
                    if (page !== paginaAtual) {
                      mudarPagina(page);
                    }
                  }}
                  className={`pagination-page ${
                    paginaAtual === page ? 'active' : ''
                  }`}
                  aria-current={paginaAtual === page ? 'page' : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            className="pagination-btn"
            onClick={() => mudarPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalPaginas}
          >
            Próxima
          </button>
        </div>
    )
}