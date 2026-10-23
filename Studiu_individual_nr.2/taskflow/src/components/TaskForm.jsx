import { useState } from 'react';
import { PRIORITIES, STATUSES } from '../utils/constants';
import { validateTask } from '../utils/validation';

const EMPTY = {
  title: '',
  description: '',
  status: 'todo',
  priority: 'medium',
  dueDate: '',
  assignee: '',
};

// Formular pentru adăugare și editare (task = null → adăugare)
function TaskForm({ task, onSubmit, onCancel }) {
  const [values, setValues] = useState(task ? { ...EMPTY, ...task } : EMPTY);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const set = (key) => (event) => setValues({ ...values, [key]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validateTask(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSaving(true);
    setSubmitError('');
    try {
      await onSubmit({
        title: values.title.trim(),
        description: values.description.trim(),
        status: values.status,
        priority: values.priority,
        dueDate: values.dueDate,
        assignee: values.assignee.trim(),
      });
    } catch (err) {
      setSubmitError(err.message || 'Salvarea a eșuat.');
      setSaving(false);
    }
  };

  const field = (key) => ({
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  });
  const fieldError = (key) =>
    errors[key] && (
      <span className="field-error" id={`${key}-error`}>
        {errors[key]}
      </span>
    );

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <h2>{task ? 'Editează sarcina' : 'Sarcină nouă'}</h2>

      <label>
        Titlu *
        <input type="text" value={values.title} onChange={set('title')} {...field('title')} />
        {fieldError('title')}
      </label>

      <label>
        Descriere
        <textarea rows="3" value={values.description} onChange={set('description')} {...field('description')} />
        {fieldError('description')}
      </label>

      <div className="form-row">
        <label>
          Status
          <select value={values.status} onChange={set('status')}>
            {STATUSES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </label>
        <label>
          Prioritate
          <select value={values.priority} onChange={set('priority')}>
            {PRIORITIES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-row">
        <label>
          Termen limită
          <input type="date" value={values.dueDate} onChange={set('dueDate')} {...field('dueDate')} />
          {fieldError('dueDate')}
        </label>
        <label>
          Responsabil
          <input type="text" value={values.assignee} onChange={set('assignee')} />
        </label>
      </div>

      {submitError && <p className="form-error" role="alert">{submitError}</p>}

      <div className="form-actions">
        <button type="button" className="btn" onClick={onCancel} disabled={saving}>
          Anulează
        </button>
        <button type="submit" className="btn primary" disabled={saving}>
          {saving ? 'Se salvează...' : task ? 'Salvează modificările' : 'Adaugă sarcina'}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
