import "./styles.css";
import { useState } from "react";
let todos = [];
const ToDoElement = ({ value, idx, onCompleteToDo }) => {
  console.log("value: ", value);
  return (
    <li>
      {value.todo}
      <button onClick={() => onCompleteToDo(idx)}>
        {value.isCompleted ? "completed task" : "Task is Complete"}
      </button>
      <button onClick={() => removeToDoItem(idx)}>Remove item</button>
    </li>
  );
};
export default function App() {
  const [inputValue, setToDo] = useState({
    todo: "",
    isCompleted: false
  });

  //there are three functionalities we need to add
  //and for thet we need the dataa structure of arrays to store values

  // for managing todo items
  const [todos, updateTodoList] = useState([]);
  //1-Add item in list
  addToDo = () => {
    if (inputValue.todo) {
      //todos.push(inputValue);
      updateTodoList([...todos, inputValue]);
      setToDo({
        todo: "",
        isCompleted: false
      });
    }
  };

  //2-Update item in list
  onCompleteToDo = (idx) => {
    const ourItem = todos[idx];
    const mtodos = [...todos];

    const UpdateItems = {
      ...ourItem,
      isCompleted: !ourItem.isCompleted
    };
    // noe putting the updated items in to do list
    mtodos[idx] = UpdateItems;
    updateTodoList(mtodos);
  };
  //3-remove item from list
  removeToDoItem = (idx) => {
    const mtodos = [...todos];
    mtodos.splice(idx, 1);
    //now updating to do list after removal
    updateTodoList(mtodos);
  };

  return (
    <div className="App">
      <h1>" To do List "</h1>
      <input
        className="inputFields"
        type="text"
        value={inputValue.todo}
        placeholder="task to finish"
        onChange={(e) =>
          setToDo({
            todo: e.target.value,
            isCompleted: false
          })
        }
      />
      <button onClick={addToDo}> add to do </button>

      <ul>
        {todos.length > 0 &&
          todos.map((value, idx) => {
            return (
              <ToDoElement
                //giving a key to ToDoElement
                key={value.todo + idx}
                value={value}
                idx={idx}
                onCompleteToDo={onCompleteToDo}
                removeToDoItem={removeToDoItem}
              />
            );
          })}
      </ul>
    </div>
  );
}
