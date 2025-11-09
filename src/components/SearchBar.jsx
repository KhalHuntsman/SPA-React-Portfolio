// The SearchBar component is responsible for capturing user input
// and updating the searchTerm state in App.jsx through props.
function SearchBar({ searchTerm, setSearchTerm }) {

  return (
    <input
      className="search-input"       // Styled input field from App.css
      type="text"
      placeholder="Search Projects" // Placeholder shown when field is empty

      // Controlled input:
      // `value` comes from parent state and updates on each keypress
      value={searchTerm}

      // When user types, update searchTerm state in App.jsx
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
