import "./App.css";
import { useState } from "react";
import Heading from "./components/Heading";
import List from "./components/List";
import Form from "./components/Form";
import { useSelector, useDispatch } from "react-redux";
import { itemAdded, itemClicked, itemDeleted } from "./redux/actions";
import { selectTodoList } from "./redux/todoSlice";

function App() {
  // const todoItems = [
  //   { id: 1000, task: "Walk the dog", done: false },
  //   { id: 2000, task: "Water the flower", done: true },
  // ];

  // const [todoList, setTodoList] = useState(todoItems);
  // const [text, setText] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setText(e.target.value);
  // };

  // const handleAdd = () => {
  //   if (text) {
  //     const newToDo = {
  //       id: Math.floor(Math.random() * 1000),
  //       task: text,
  //       done: false,
  //     };

  //     const newToDoList = [...todoList, newToDo];
  //     setTodoList(newToDoList);
  //     setText("");
  //   }
  // };
  // const handleDelete = (id) => {
  //   const newList = todoList.filter((item) => item.id !== id);
  //   setTodoList(newList);
  // };

  // const handleClick = (id) => {
  //   const newList = todoList.map((item) =>
  //     item.id === id ? { ...item, done: !item.done } : item
  //   );
  //   setTodoList(newList);
  // };
  return (
    <div className="App">
      <div className="main-container">
        <div className="heading-list-container">
          <Heading />

          <List />

          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
