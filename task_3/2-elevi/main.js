// main.js — punctul de intrare al aplicației

import { calculateSum, calculateAverage } from "./utils.js";
import {
  getAllStudents,
  getTopStudents,
  getClassAverage,
  findStudentById,
  addStudent,
} from "./students.js";

// --- demonstrație rapidă pentru utils.js, cu câteva valori oarecare ---
const someValues = [4, 8, 15, 16, 23, 42];
console.log(`Suma valorilor [${someValues.join(", ")}] este ${calculateSum(someValues)}`);
console.log(`Media valorilor [${someValues.join(", ")}] este ${calculateAverage(someValues).toFixed(2)}`);

console.log("\n--- Elevi ---");

// afișarea tuturor elevilor
console.log("Toți elevii:");
getAllStudents().forEach((student) => {
  console.log(`  • ${student.name} (id: ${student.id}) — nota ${student.grade}`);
});

// elevii cu nota >= 8
console.log("\nElevi cu nota >= 8:");
getTopStudents(8).forEach((student) => {
  console.log(`  • ${student.name} — nota ${student.grade}`);
});

// media clasei
console.log(`\nMedia clasei: ${getClassAverage().toFixed(2)}`);

// căutare elev după id — caz existent
try {
  const found = findStudentById(2);
  console.log(`\nElevul cu id 2 este ${found.name}, nota ${found.grade}.`);
} catch (error) {
  console.error(`Eroare: ${error.message}`);
}

// căutare elev după id — caz inexistent, tratat cu try/catch
try {
  const notFound = findStudentById(99);
  console.log(`Elevul cu id 99 este ${notFound.name}.`);
} catch (error) {
  console.error(`\nEroare la căutare: ${error.message}`);
}

// adăugarea unui elev nou
const newStudent = addStudent({ id: 6, name: "Radu", grade: 7 });
console.log(`\nElev nou adăugat: ${newStudent.name} (id: ${newStudent.id}), nota ${newStudent.grade}`);
console.log(`Media clasei după adăugare: ${getClassAverage().toFixed(2)}`);
