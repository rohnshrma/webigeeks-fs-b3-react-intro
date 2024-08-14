import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    console.log("Writing", e.target.value);
    var nameInput = e.target.value;
    setName(nameInput);
  };
  return (
    <div>
      <h1>{name}</h1>
      <form>
        <div>
          <input
            onChange={changeHandler}
            type="text"
            placeholder="Enter name..."
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
