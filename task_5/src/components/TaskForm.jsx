import { useState } from "react";

function TaskForm({ onAddTask }) {
  // Starea care păstrează textul introdus în câmp
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // împiedică reîncărcarea paginii
    onAddTask(taskName);
    setTaskName(""); // golește câmpul după adăugare
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        placeholder="Introdu denumirea sarcinii"
        aria-label="Denumirea sarcinii"
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button type="submit">Adaugă</button>
    </form>
  );
}

export default TaskForm;
