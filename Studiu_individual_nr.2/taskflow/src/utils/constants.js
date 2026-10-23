export const STATUSES = [
  { value: 'todo', label: 'De făcut' },
  { value: 'in-progress', label: 'În lucru' },
  { value: 'done', label: 'Finalizat' },
];

export const PRIORITIES = [
  { value: 'high', label: 'Ridicată' },
  { value: 'medium', label: 'Medie' },
  { value: 'low', label: 'Scăzută' },
];

export const labelOf = (list, value) =>
  list.find((item) => item.value === value)?.label ?? value;
