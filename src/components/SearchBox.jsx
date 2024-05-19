function SearchBox({ setSearchTerm }) {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={handleInputChange}
    />
  );
}

export default SearchBox;
