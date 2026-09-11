// Exercițiul 1 — filter(), map(), reduce()

const grades = [7, 9, 5, 10, 8, 6];

// 1. toate notele mai mari sau egale cu 8
const highGrades = grades.filter((grade) => grade >= 8);

// 2. media notelor
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

// 3. fiecare notă mărită cu 1 punct, fără a depăși 10
const increasedGrades = grades.map((grade) => Math.min(grade + 1, 10));

console.log(`Note inițiale: ${grades.join(", ")}`);
console.log(`Note >= 8: ${highGrades.join(", ")}`);
console.log(`Media notelor: ${average.toFixed(2)}`);
console.log(`Note mărite cu 1 (max 10): ${increasedGrades.join(", ")}`);
