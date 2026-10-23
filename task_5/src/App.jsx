import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as deleteTaskApi,
} from "./services/taskService";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"
  const [loading, setLoading] = useState(true); // LOADING
  const [error, setError] = useState(null); // ERROR
  const [attempt, setAttempt] = useState(0); // crește la „Reîncarcă"

  // GET – încărcăm sarcinile la afișarea componentei (și la „Reîncarcă")
  useEffect(() => {
    let cancelled = false;
    getTasks()
      .then((data) => !cancelled && setTasks(data)) // SUCCESS
      .catch(
        () =>
          !cancelled &&
          setError("Nu s-au putut încărca sarcinile. Încearcă din nou.")
      )
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const retry = () => {
    setError(null);
    setLoading(true);
    setAttempt((n) => n + 1);
  };

  // POST – adaugă o sarcină nouă; nu permite denumiri goale
  const addTask = async (title) => {
    const cleanTitle = title.trim();
    if (cleanTitle === "") return;

    try {
      setError(null);
      const created = await createTask(cleanTitle);
      // API-ul de test returnează mereu același id (201): îl facem unic local
      const id = tasks.some((t) => t.id === created.id) ? Date.now() : created.id;
      setTasks((current) => [...current, { ...created, id }]);
    } catch {
      setError("Nu s-a putut adăuga sarcina.");
    }
  };

  // PATCH – inversează completed: false → true, true → false
  const toggleTask = async (id) => {
    const task = tasks.find((t) => t.id === id);
    try {
      setError(null);
      await updateTask(id, { completed: !task.completed });
      setTasks((current) =>
        current.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    } catch {
      setError("Nu s-a putut actualiza sarcina.");
    }
  };

  // DELETE – elimină sarcina cu id-ul primit
  const deleteTask = async (id) => {
    try {
      setError(null);
      await deleteTaskApi(id);
      setTasks((current) => current.filter((t) => t.id !== id));
    } catch {
      setError("Nu s-a putut șterge sarcina.");
    }
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

      {error && (
        <p className="error" role="alert">
          {error}{" "}
          {tasks.length === 0 && (
            <button type="button" onClick={retry}>
              Reîncarcă
            </button>
          )}
        </p>
      )}

      {loading ? (
        <p className="empty">Se încarcă...</p>
      ) : totalCount === 0 ? (
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
