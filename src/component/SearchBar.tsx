import { Search } from 'lucide-react';
import '../style/Search.css';

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Buscar pull requests, testes ..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}