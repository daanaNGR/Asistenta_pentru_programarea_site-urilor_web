import { useState } from 'react';
import ConfirmDialog from '../components/ConfirmDialog';
import TaskCard from '../components/TaskCard';
import TaskFilters from '../components/TaskFilters';
import TaskForm from '../components/TaskForm';

const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 };

function applyFilters(tasks, { search, status, priority, sort }) {
  const q = search.trim().toLowerCase();
  const result = tasks.filter(
    (t) =>
      (status === 'all' || t.status === status) &&
      (priority === 'all' || t.priority === priority) &&
      (q === '' || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)),
  );
  return result.sort((a, b) => {
    if (sort === 'priority') return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
    if (sort === 'title') return a.title.localeCompare(b.title);
    // fără termen → la sfârșit
    return (a.dueDate || '9999').localeCompare(b.dueDate || '9999');
  });
}

function TasksPage({ data, notify }) {
  const { tasks, loading, error, reload, addTask, editTask, removeTask } = data;
  const [filters, setFilters] = useState({ search: '', status: 'all', priority: 'all', sort: 'due' });
  const [editing, setEditing] = useState(null); // null | 'new' | task
  const [toDelete, setToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const visible = applyFilters(tasks, filters);
  const hasFilters = filters.search !== '' || filters.status !== 'all' || filters.priority !== 'all';

  const handleSubmit = async (values) => {
    if (editing === 'new') {
      await addTask(values);
      notify('success', 'Sarcina a fost adăugată.');
    } else {
      await editTask(editing.id, values);
      notify('success', 'Sarcina a fost actualizată.');
    }
    setEditing(null);
  };

  const handleStatusChange = async (task, status) => {
    try {
      await editTask(task.id, { status });
      notify('success', 'Statusul a fost actualizat.');
    } catch (err) {
      notify('error', err.message || 'Statusul nu a putut fi actualizat.');
    }
  };

  const confirmDelete = async () => {
    setDeleting(true);
    try {
      await removeTask(toDelete.id);
      notify('success', 'Sarcina a fost ștearsă.');
    } catch (err) {
      notify('error', err.message || 'Sarcina nu a putut fi ștearsă.');
    } finally {
      setDeleting(false);
      setToDelete(null);
    }
  };

  if (loading) return <p className="state-msg">Se încarcă sarcinile...</p>;

  if (error) {
    return (
      <div className="state-msg error" role="alert">
        <p>{error} Încearcă din nou.</p>
        <button type="button" className="btn primary" onClick={reload}>
          Reîncarcă
        </button>
      </div>
    );
  }

  return (
    <section>
      <div className="page-head">
        <h1>Sarcini</h1>
        {editing === null && (
          <button type="button" className="btn primary" onClick={() => setEditing('new')}>
            + Sarcină nouă
          </button>
        )}
      </div>

      {editing !== null && (
        <TaskForm
          key={editing === 'new' ? 'new' : editing.id}
          task={editing === 'new' ? null : editing}
          onSubmit={handleSubmit}
          onCancel={() => setEditing(null)}
        />
      )}

      <TaskFilters filters={filters} onChange={setFilters} />

      {tasks.length === 0 ? (
        <p className="state-msg">Nu există sarcini momentan. Adaugă prima sarcină.</p>
      ) : visible.length === 0 ? (
        <div className="state-msg">
          <p>Nicio sarcină nu corespunde filtrelor.</p>
          {hasFilters && (
            <button
              type="button"
              className="btn"
              onClick={() => setFilters({ ...filters, search: '', status: 'all', priority: 'all' })}
            >
              Resetează filtrele
            </button>
          )}
        </div>
      ) : (
        <ul className="task-list">
          {visible.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
              onEdit={setEditing}
              onDelete={setToDelete}
            />
          ))}
        </ul>
      )}

      {toDelete && (
        <ConfirmDialog
          title="Ștergi sarcina?"
          message={`Sarcina „${toDelete.title}" va fi ștearsă definitiv.`}
          confirmLabel="Da, șterge"
          busy={deleting}
          onConfirm={confirmDelete}
          onCancel={() => setToDelete(null)}
        />
      )}
    </section>
  );
}

export default TasksPage;
