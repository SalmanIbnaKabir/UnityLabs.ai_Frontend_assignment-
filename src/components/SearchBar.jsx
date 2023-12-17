/* eslint-disable react/prop-types */
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <nav>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Hacker News"
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
};

export default SearchBar;
