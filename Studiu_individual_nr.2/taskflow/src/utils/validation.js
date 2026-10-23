import { PRIORITIES, STATUSES } from './constants';

// Returnează un obiect cu erorile câmpurilor; obiect gol = formular valid
export function validateTask(values) {
  const errors = {};
  const title = values.title.trim();

  if (title === '') errors.title = 'Titlul este obligatoriu.';
  else if (title.length < 3) errors.title = 'Titlul trebuie să aibă minimum 3 caractere.';
  else if (title.length > 80) errors.title = 'Titlul poate avea maximum 80 de caractere.';

  if (values.description.length > 300) {
    errors.description = 'Descrierea poate avea maximum 300 de caractere.';
  }
  if (values.dueDate && Number.isNaN(Date.parse(values.dueDate))) {
    errors.dueDate = 'Data introdusă nu este validă.';
  }
  if (!STATUSES.some((s) => s.value === values.status)) errors.status = 'Alege un status.';
  if (!PRIORITIES.some((p) => p.value === values.priority)) errors.priority = 'Alege o prioritate.';
  return errors;
}
