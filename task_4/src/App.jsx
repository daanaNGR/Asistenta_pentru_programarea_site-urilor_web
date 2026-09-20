import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Învață React", completed: false },
  ]);
  const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"

  // Adaugă o sarcină nouă; nu permite denumiri goale
  const addTask = (title) => {
    const cleanTitle = title.trim();
    if (cleanTitle === "") return;

    const newTask = {
      id: Date.now(),
      title: cleanTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Inversează valoarea completed: false → true, true → false
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Elimină sarcina cu id-ul primit
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;

  // Sarcinile afișate în funcție de filtrul ales (bonus)
  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const filters = [
    { value: "all", label: "Toate" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Finalizate" },
  ];

  return (
    <main>
      <h1>Task Manager</h1>

      <p className="stats">
        <span>Total sarcini: {totalCount}</span>
        <span>Finalizate: {completedCount}</span>
      </p>

      <TaskForm onAddTask={addTask} />

      {totalCount > 0 && (
        <div className="filters" role="group" aria-label="Filtrare sarcini">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className={filter === item.value ? "filter active" : "filter"}
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {totalCount === 0 ? (
        <p className="empty">Nu există sarcini momentan.</p>
      ) : visibleTasks.length === 0 ? (
        <p className="empty">Nicio sarcină în această categorie.</p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
