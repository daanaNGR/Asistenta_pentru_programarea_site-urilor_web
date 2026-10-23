export const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export const addDays = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export const formatDate = (iso) => {
  if (!iso) return 'Fără termen';
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
};

// O sarcină este restantă dacă are termen în trecut și nu este finalizată
export const isOverdue = (task) =>
  Boolean(task.dueDate) && task.status !== 'done' && task.dueDate < todayISO();
