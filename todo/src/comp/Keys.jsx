import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export const Keys = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (!inputValue.trim()) return;

    setTasks([...tasks, { id: Date.now(), text: inputValue }]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Add a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="todo-list">
        {tasks.map((task) => (
          <div className="todo-item" key={task.id}>
            <span>{task.text}</span>

            <input type="text" />

            <button onClick={() => handleDelete(task.id)}>
              <MdDeleteForever />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
