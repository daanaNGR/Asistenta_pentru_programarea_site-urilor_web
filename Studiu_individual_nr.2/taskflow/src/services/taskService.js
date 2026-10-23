// Serviciul de date. Interfața este asincronă (ca la un API REST), iar datele
// sunt păstrate în localStorage. Pentru un API real se înlocuiește doar acest fișier.
import { addDays } from '../utils/dates';

const STORAGE_KEY = 'taskflow.tasks';
const DELAY_MS = 300; // simulează întârzierea rețelei, pentru starea de încărcare

const wait = () => new Promise((resolve) => setTimeout(resolve, DELAY_MS));

const seedTasks = () => [
  { id: 's1', title: 'Definirea cerințelor proiectului', description: 'Lista funcționalităților și User Stories.', status: 'done', priority: 'high', dueDate: addDays(-6), assignee: 'Membrul 3' },
  { id: 's2', title: 'Schița interfeței în Figma', description: 'Dashboard, lista de sarcini și formularul.', status: 'done', priority: 'medium', dueDate: addDays(-3), assignee: 'Membrul 1' },
  { id: 's3', title: 'Implementarea formularului de adăugare', description: 'Cu validarea câmpurilor.', status: 'in-progress', priority: 'high', dueDate: addDays(2), assignee: 'Membrul 2' },
  { id: 's4', title: 'Filtrarea după prioritate', description: 'Filtre combinate: status, prioritate, căutare.', status: 'todo', priority: 'medium', dueDate: addDays(5), assignee: 'Membrul 2' },
  { id: 's5', title: 'Pagina cu statistici', description: 'Dashboard cu progresul general.', status: 'todo', priority: 'low', dueDate: addDays(9), assignee: 'Membrul 1' },
  { id: 's6', title: 'Predarea documentației în Jira', description: 'Task-uri cu estimări și responsabili.', status: 'todo', priority: 'high', dueDate: addDays(-1), assignee: 'Membrul 3' },
];

function readAll() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) return JSON.parse(raw);
  const initial = seedTasks();
  writeAll(initial);
  return initial;
}

function writeAll(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// READ
export async function getTasks() {
  await wait();
  return readAll();
}

// CREATE
export async function createTask(data) {
  await wait();
  const task = { ...data, id: crypto.randomUUID() };
  writeAll([...readAll(), task]);
  return task;
}

// UPDATE
export async function updateTask(id, changes) {
  await wait();
  const tasks = readAll();
  if (!tasks.some((t) => t.id === id)) throw new Error('Sarcina nu mai există.');
  const updated = tasks.map((t) => (t.id === id ? { ...t, ...changes } : t));
  writeAll(updated);
  return updated.find((t) => t.id === id);
}

// DELETE
export async function deleteTask(id) {
  await wait();
  writeAll(readAll().filter((t) => t.id !== id));
}
