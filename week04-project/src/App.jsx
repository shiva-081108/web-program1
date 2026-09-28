import { useState,useEffect } from "react";
import "./App.css";
import NotesApp from "./components/NotesApp";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  function addTask() {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function toggleTask(id) {
  setTasks(
    tasks.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    )
  );
}
function deleteTask(id) {
  setTasks(tasks.filter((item) => item.id !== id));
}
function editTask(id) {
  const newText = prompt("Edit your task:");

  if (newText === null || newText.trim() === "") {
    return;
  }

  setTasks(
    tasks.map((item) =>
      item.id === id
        ? { ...item, text: newText }
        : item
    )
  );
}
const filteredTasks = tasks.filter((item) => {
  if (filter === "completed") {
    return item.completed;
  }

  if (filter === "pending") {
    return !item.completed;
  }

  return true;
});

  return (


    <div className="app">

      <h1>TaskFlow ✨</h1>

      <p>make  your day, one task at a time.</p>

      <div className="task-box">

        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          Add Task
        </button>

      </div>

      <div className="task-list">

      {tasks.map((item) => (
  <div
    className={`task-card ${item.completed ? "completed" : ""}`}
    key={item.id}
  >
    <input
      type="checkbox"
      checked={item.completed}
      onChange={() => toggleTask(item.id)}
    />

  <span>{item.text}</span>

<button
  className="edit-btn"
  onClick={() => editTask(item.id)}
>
  ✏️
</button>

<button
  className="delete-btn"
  onClick={() => deleteTask(item.id)}
>
  🗑️
</button>
  </div>
))}

      </div>
            <NotesApp />

    </div>
  );
}

export default App;