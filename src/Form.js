import React from "react";

const Form = ({ updateStateHandler, inputChangedHandler, todo }) => {
  return (
    <div className="form">
      <form onSubmit={updateStateHandler}>
        <input
          placeholder="To-Do.."
          type="text"
          onChange={inputChangedHandler}
          value={todo}
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
