// students.js — toată logica legată de elevi, separată de main.js

import { calculateAverage } from "./utils.js";

let students = [
  { id: 1, name: "Ana", grade: 9 },
  { id: 2, name: "Ion", grade: 7 },
  { id: 3, name: "Maria", grade: 10 },
  { id: 4, name: "Vlad", grade: 6 },
  { id: 5, name: "Elena", grade: 8 },
];

// afișarea tuturor elevilor
export function getAllStudents() {
  return students;
}

// identificarea elevilor cu nota >= 8
export function getTopStudents(minGrade = 8) {
  return students.filter((student) => student.grade >= minGrade);
}

// calcularea mediei clasei
export function getClassAverage() {
  const grades = students.map((student) => student.grade);
  return calculateAverage(grades);
}

// căutarea unui elev după id — aruncă eroare dacă nu există
export function findStudentById(id) {
  const student = students.find((s) => s.id === id);
  if (!student) {
    throw new Error(`Nu există niciun elev cu id-ul ${id}.`);
  }
  return student;
}

// adăugarea unui elev nou
export function addStudent(newStudent) {
  const idExists = students.some((s) => s.id === newStudent.id);
  if (idExists) {
    throw new Error(`Există deja un elev cu id-ul ${newStudent.id}.`);
  }
  students = [...students, newStudent];
  return newStudent;
}
