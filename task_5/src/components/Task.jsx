// Primește sarcina și funcțiile de acțiune prin props
function Task({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "task completed" : "task"}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-title">{task.title}</span>
      </label>
      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        Șterge
      </button>
    </li>
  );
}

export default Task;
