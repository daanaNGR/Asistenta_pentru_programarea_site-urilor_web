import StatCard from '../components/StatCard';
import { PRIORITIES, labelOf } from '../utils/constants';
import { formatDate, isOverdue } from '../utils/dates';

function DashboardPage({ tasks, onNavigate }) {
  const count = (status) => tasks.filter((t) => t.status === status).length;
  const done = count('done');
  const overdue = tasks.filter(isOverdue).length;
  const progress = tasks.length === 0 ? 0 : Math.round((done / tasks.length) * 100);

  // Următoarele 5 termene dintre sarcinile nefinalizate
  const upcoming = tasks
    .filter((t) => t.status !== 'done' && t.dueDate)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 5);

  return (
    <section>
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <StatCard label="Total sarcini" value={tasks.length} />
        <StatCard label="De făcut" value={count('todo')} />
        <StatCard label="În lucru" value={count('in-progress')} tone="info" />
        <StatCard label="Finalizate" value={done} tone="success" />
        <StatCard label="Restante" value={overdue} tone={overdue > 0 ? 'danger' : 'neutral'} />
      </div>

      <div className="panel">
        <h2>Progres general: {progress}%</h2>
        <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="muted">
          {done} din {tasks.length} sarcini finalizate
        </p>
      </div>

      <div className="two-cols">
        <div className="panel">
          <h2>Termene apropiate</h2>
          {upcoming.length === 0 ? (
            <p className="muted">Nu există sarcini cu termen.</p>
          ) : (
            <ul className="plain-list">
              {upcoming.map((t) => (
                <li key={t.id}>
                  <span>{t.title}</span>
                  <span className={isOverdue(t) ? 'due overdue' : 'due'}>{formatDate(t.dueDate)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="panel">
          <h2>După prioritate</h2>
          <ul className="plain-list">
            {PRIORITIES.map((p) => (
              <li key={p.value}>
                <span>{labelOf(PRIORITIES, p.value)}</span>
                <strong>{tasks.filter((t) => t.priority === p.value && t.status !== 'done').length} active</strong>
              </li>
            ))}
          </ul>
          <button type="button" className="btn primary" onClick={() => onNavigate('tasks')}>
            Gestionează sarcinile
          </button>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
