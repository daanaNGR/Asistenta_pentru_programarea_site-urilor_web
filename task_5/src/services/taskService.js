// Service-ul se ocupă doar de comunicarea cu API-ul (fără UI).
// API public de test: JSONPlaceholder (/todos) – returnează { id, title, completed, userId }.
const BASE_URL =
  import.meta.env.VITE_API_URL ?? "https://jsonplaceholder.typicode.com";
const API_URL = `${BASE_URL}/todos`;

// JSONPlaceholder nu salvează nimic: are doar 200 de todos reale.
// Sarcinile create de noi primesc id > 200, iar PATCH/DELETE pe ele dau 404.
export const MAX_SERVER_ID = 200;

// Verifică răspunsul și aruncă eroare cu codul HTTP (200, 201 = ok; 404, 500 = eroare)
async function request(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Cerere eșuată (HTTP ${response.status})`);
  }
  return response.status === 204 ? null : response.json();
}

const jsonOptions = (method, body) => ({
  method,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

// GET – citește primele 10 sarcini
export function getTasks() {
  return request(`${API_URL}?_limit=10`);
}

// POST – creează o sarcină (serverul răspunde 201 Created)
export function createTask(title) {
  return request(API_URL, jsonOptions("POST", { title, completed: false, userId: 1 }));
}

// PATCH – trimitem doar câmpurile modificate
export function updateTask(id, changes) {
  if (id > MAX_SERVER_ID) return Promise.resolve({ id, ...changes });
  return request(`${API_URL}/${id}`, jsonOptions("PATCH", changes));
}

// DELETE – șterge sarcina
export async function deleteTask(id) {
  if (id > MAX_SERVER_ID) return;
  await request(`${API_URL}/${id}`, { method: "DELETE" });
}
