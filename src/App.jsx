import { useState } from "react";
import hackerNewsApi from "./services/hackerNewsApi";
import SearchBar from "./components/SearchBar";

import PostDetail from "./components/PostDetail";
import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const results = await hackerNewsApi.search(query);
    setSearchResults(results);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <SearchBar onSearch={handleSearch} />
          {searchResults.map((result) => (
            <Link
              key={result.objectID}
              to={`/post-details/${result?.objectID}`}
            >
              <div
                key={result.objectID}
                className="search-result"
                // onClick={() => handleResultClick(result)}
              >
                <h3>{result.title}</h3>
                <p>Points: {result.points}</p>
              </div>
            </Link>
          ))}
        </>
      ),
    },
    {
      path: "/post-details/:id",
      element: <PostDetail />,
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
