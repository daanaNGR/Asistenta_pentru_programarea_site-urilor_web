function Task({ task }) {
  return (
    <li className="task">
      <label>
        <input type="checkbox" checked={task.completed} readOnly />{' '}
        {task.title}
      </label>
      <button className="delete">Șterge</button>
    </li>
  )
}

export default Task
