import { useState } from "react";


function Search(props) {
  const [keyword, setKeyWord] = useState("");

  function handleKeyWordInput(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
    props.handleSearch(event.target.value);
  }

  return (
    <div>
      <label htmlFor="filter">Search</label>
      <input
        onChange={handleKeyWordInput}
        type="text"
        id="filter"
        value={keyword}
      />
    </div>
  );
}
export default Search;