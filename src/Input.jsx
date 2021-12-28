import React, { useState } from "react";

function Input(props) {
  const [name, setName] = useState("");
  const [keyword, setKeyword] = useState("");

  function handleChange(event) {
    const newName = event.target.value;
    setName(newName);
  }

  function handleKeywordChange(event) {
    const keyword = event.target.value;
    setKeyword(keyword);
  }

  function handleClick(event) {
    event.preventDefault();
    props.makeURL(name,keyword);
    setName("");
    setKeyword("");
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Name"
          onChange={handleChange}
          value={name}
        />
        <br/>
        <input
          name="keyword"
          placeholder="Keyword"
          onChange={handleKeywordChange}
          value={keyword}
        />
        <br />
        <button type="button" class="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Input;