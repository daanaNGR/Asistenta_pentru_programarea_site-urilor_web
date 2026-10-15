function Task({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? 'task completed' : 'task'}>
      <input
        type="checkbox"
        id={`task-${task.id}`}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label htmlFor={`task-${task.id}`}>
        {task.completed ? '✓ ' : ''}
        {task.title}
      </label>
      <button className="delete" onClick={() => onDelete(task.id)}>
        Șterge
      </button>
    </li>
  )
}

export default Task
