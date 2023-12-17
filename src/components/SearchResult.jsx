/* eslint-disable react/prop-types */

const SearchResult = ({ result, onResultClick }) => {
  return (
    <div onClick={() => onResultClick(result)}>
      <h3>{result.title}</h3>
      <p>Points: {result.points}</p>
    </div>
  );
};

export default SearchResult;
