// main.js — demonstrație coș de cumpărături, temă: barbershop

import { addProduct, removeProduct, updateQuantity, calculateTotal, getCart } from "./cart.js";

// produse disponibile în magazinul barbershop-ului
const catalog = [
  { id: 1, name: "Ceară modelatoare", price: 85, quantity: 2 },
  { id: 2, name: "Loțiune after-shave", price: 60, quantity: 1 },
  { id: 3, name: "Foarfecă profesională de tuns", price: 350, quantity: 1 },
  { id: 4, name: "Aparat de tuns fără fir", price: 720, quantity: 1 },
  { id: 5, name: "Pieptene din lemn de cireș", price: 45, quantity: 3 },
];

console.log("--- Adăugăm produse în coș ---");
catalog.forEach((product) => addProduct(product));

// mai adăugăm încă o ceară modelatoare -> cantitatea existentă crește, nu se dublează rândul
addProduct({ id: 1, name: "Ceară modelatoare", price: 85, quantity: 1 });

getCart().forEach(({ id, name, price, quantity }) => {
  console.log(`  #${id} ${name} — ${price} MDL x ${quantity} buc.`);
});
console.log(`Total după adăugări: ${calculateTotal()} MDL`);

console.log("\n--- Modificăm cantitatea foarfecii la 2 buc. ---");
updateQuantity(3, 2);
getCart().forEach(({ name, price, quantity }) => {
  console.log(`  • ${name} — ${price} MDL x ${quantity} buc.`);
});
console.log(`Total după modificare: ${calculateTotal()} MDL`);

console.log("\n--- Ștergem un produs existent (id 5) ---");
removeProduct(5);
console.log(`Total după ștergere: ${calculateTotal()} MDL`);

console.log("\n--- Încercăm să ștergem un produs inexistent (id 99) ---");
try {
  removeProduct(99);
} catch (error) {
  console.error(`Eroare: ${error.message}`);
}

console.log("\n--- Coșul final ---");
getCart().forEach(({ name, price, quantity }) => {
  console.log(`  • ${name}: ${price} MDL x ${quantity} = ${price * quantity} MDL`);
});
console.log(`TOTAL COMANDĂ: ${calculateTotal()} MDL`);
