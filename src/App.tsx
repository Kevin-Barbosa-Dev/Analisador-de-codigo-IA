import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderTabsAndStats from "./component/HeaderTabsAndStats";
import SearchBar from "./component/SearchBar";
import PullRequest from "./pages/pull request/PullRequest";
import Tests from "./pages/teste/Teste";
import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  return (
    <BrowserRouter>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <SearchBar query={query} setQuery={setQuery} />
          <HeaderTabsAndStats />

          <Routes>
            <Route path="/" element={<PullRequest query={query} />} />
            <Route path="/tests" element={<Tests query={query} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
