import React from "react";

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name here..." />
      <input type="submit" value="Submit!!" />
    </form>
  );
};

export default Form;
