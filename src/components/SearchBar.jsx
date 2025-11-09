function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search Projects"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
