function SearchBar({ onSearchKeywordChange }: SearchBarProps) {
  return (
    <div className="searchbar__container">
      <input
        className="searchbar__input"
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="search notes"
        onChange={(e) => onSearchKeywordChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
