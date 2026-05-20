import { Search } from "lucide-react";
import '../style/Search.css'

export default function SearchBar(){
    return(
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
    )
}