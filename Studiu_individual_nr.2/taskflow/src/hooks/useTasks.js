import { useCallback, useEffect, useState } from 'react';
import * as api from '../services/taskService';

// Ține lista de sarcini și stările LOADING / ERROR; acțiunile aruncă eroarea mai departe
export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    api
      .getTasks()
      .then((data) => !cancelled && setTasks(data))
      .catch(() => !cancelled && setError('Nu s-au putut încărca sarcinile.'))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const reload = useCallback(() => {
    setError(null);
    setLoading(true);
    setAttempt((n) => n + 1);
  }, []);

  const addTask = async (data) => {
    const created = await api.createTask(data);
    setTasks((current) => [...current, created]);
  };

  const editTask = async (id, changes) => {
    const updated = await api.updateTask(id, changes);
    setTasks((current) => current.map((t) => (t.id === id ? updated : t)));
  };

  const removeTask = async (id) => {
    await api.deleteTask(id);
    setTasks((current) => current.filter((t) => t.id !== id));
  };

  return { tasks, loading, error, reload, addTask, editTask, removeTask };
}
