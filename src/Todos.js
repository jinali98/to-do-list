import React from "react";

const Todos = ({ allInput, deleteInputHandler }) => {
  return (
    <div>
      {allInput.map((eachInput) => {
        return (
          <div className="todos" key={eachInput.id}>
            <p>{eachInput.todo}</p>
            <button
              className="remove"
              onClick={() => deleteInputHandler(eachInput.id)}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
