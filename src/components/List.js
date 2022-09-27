import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { deleteTodo } from "../redux/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  const todo = useSelector((store) => store.todo);
  // const todo = [
  //   { id: 1000, task: "Walk the dog", done: false },
  //   { id: 2000, task: "Water the flower", done: true },
  // ];
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };
  const handleToggle = (done) => {
    dispatch(handleToggle({ done }));
  };
  // const renderList = () => {
  //   todo.map((item) => (
  //     <div className="list">
  //       <span
  //         className={`${item.done ? "item-done" : "item"}`}
  //         //onClick={() => handleClick(index)}
  //       >
  //         <FontAwesomeIcon icon={faCheck} /> {item.task}{" "}
  //       </span>
  //       <span>
  //         <FontAwesomeIcon
  //           icon={faXmark}
  //           onClick={() => handleDelete(item.id)}
  //         />
  //       </span>
  //     </div>
  //   ));
  // };
  return (
    <div className="list-ontainer">
      <div className="todo-container">
        {/* {todo.length ? renderList() : <p>No list</p>} */}
        {todo.map((item, index) => (
          <div className="list" key={item.id}>
            <span
              className={`${item.done ? "item-done" : "item"}`}
              onClick={() => handleToggle(item.done)}
            >
              <FontAwesomeIcon icon={faCheck} /> {item.task}{" "}
            </span>
            <span>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => handleDelete(item.id)}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
