import "./App.css";
import React, { useState } from "react";
import Todos from "./Todos";
import Form from "./Form";

function App(props) {
  const [newInput, setNewInput] = useState({ todo: "", id: "" });
  const [allInput, setAllInput] = useState([]);

  const inputChangedHandler = (event) => {
    setNewInput({
      todo: event.target.value,
      id: Date.now(),
    });
  };

  const updateStateHandler = (e) => {
    e.preventDefault();
    const newTodo = newInput;
    if (newInput.todo !== "") {
      const currentToDos = [...allInput, newTodo];
      setAllInput(currentToDos);
      setNewInput({
        todo: "",
        id: "",
      });
    }
  };

  const deleteInputHandler = (id) => {
    let filteredItems = allInput.filter((eachInput) => eachInput.id !== id);
    setAllInput(filteredItems);
  };

  return (
    <div className="App">
      <main>
        <Form
          updateStateHandler={updateStateHandler}
          inputChangedHandler={inputChangedHandler}
          todo={newInput.todo}
        />
        <Todos allInput={allInput} deleteInputHandler={deleteInputHandler} />
      </main>
    </div>
  );
}

export default App;
