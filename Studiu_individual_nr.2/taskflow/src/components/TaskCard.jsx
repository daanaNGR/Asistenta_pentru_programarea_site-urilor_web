import { PRIORITIES, STATUSES, labelOf } from '../utils/constants';
import { formatDate, isOverdue } from '../utils/dates';

function TaskCard({ task, onStatusChange, onEdit, onDelete }) {
  const overdue = isOverdue(task);

  return (
    <li className={`task-card priority-${task.priority}${task.status === 'done' ? ' is-done' : ''}`}>
      <div className="task-main">
        <h3>{task.title}</h3>
        {task.description && <p className="task-desc">{task.description}</p>}
        <p className="task-meta">
          <span className={`badge priority-${task.priority}`}>
            {labelOf(PRIORITIES, task.priority)}
          </span>
          <span className={overdue ? 'due overdue' : 'due'}>
            Termen: {formatDate(task.dueDate)}
            {overdue && ' (restant)'}
          </span>
          {task.assignee && <span>Responsabil: {task.assignee}</span>}
        </p>
      </div>
      <div className="task-actions">
        <select
          aria-label={`Status pentru ${task.title}`}
          value={task.status}
          onChange={(event) => onStatusChange(task, event.target.value)}
        >
          {STATUSES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        <button type="button" className="btn" onClick={() => onEdit(task)}>
          Editează
        </button>
        <button type="button" className="btn danger-outline" onClick={() => onDelete(task)}>
          Șterge
        </button>
      </div>
    </li>
  );
}

export default TaskCard;
