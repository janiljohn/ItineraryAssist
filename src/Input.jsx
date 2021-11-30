import React, { useState } from "react";

function Input(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    const newName = event.target.value;

    setName(newName);
  }

  function handleClick(event) {
    event.preventDefault();
    props.makeURL(name);
    setName("");
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
        {/* <button onClick={handleClick}>Search</button> */}
        <br />
        <br />
        <button type="button" class="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Input;
