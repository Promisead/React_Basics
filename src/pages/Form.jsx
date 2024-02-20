import React, { useState } from "react";
const Form = () => {
  const [inputs, setInputs] = useState({});
  console.log(inputs);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The Detils you entered was:  ${inputs.username}, ${inputs.age} Old, fav car is ${inputs.car} and born in ${inputs.dob} Other Details: ${inputs.textarea}`
    );
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((vals) => ({ ...vals, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
        Enter your Age:
        <input
          type="text"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          value={inputs.dob || ""}
          onChange={handleChange}
        />
        <p>Write a Short Description About yourself:</p>
        <textarea
          name="textarea"
          value={inputs.textarea || ""}
          onChange={handleChange}
        />
        <h3>Select your Favorite car:</h3>
        <select name="car" value={inputs.car} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <input type="submit" />
      </label>
    </form>
  );
};

export default Form;
