// utils.js — funcții utilitare, reutilizabile pentru orice array de numere

export function calculateSum(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return calculateSum(numbers) / numbers.length;
}
