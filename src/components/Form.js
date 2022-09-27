import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../redux/todoSlice";

const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (input) {
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 1000),
          task: input,
          done: false,
        })
      );
      setInput("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Form;
