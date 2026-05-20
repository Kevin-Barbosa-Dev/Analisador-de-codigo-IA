import "../style/Header.css"
export default function HeaderTabsAndStats(){
    return(
        <div className="containerHeader">
            <div className="tabs">
                <button className="tab active">Pull Requests</button>
                <button className="tab">Regra de Negócio</button>
                <button className="tab">Testes</button>
            </div>

            <div className="stats-grid">
                <div className="">
                  <p className="stat-label">PRs hoje</p>
                  <p className="stat-value">23</p>
                </div>
                <div className="">
                  <p className="stat-label">Aprovados</p>
                  <p className="stat-value approved">21</p>
                </div>
                <div className="">
                  <p className="stat-label">Reprovados</p>
                  <p className="stat-value rejected">2</p>
                </div>
                <div className="">
                  <p className="stat-label">Testes gerados</p>
                  <p className="stat-value">187</p>
                </div>
              </div>
            
        </div>      
    )
}