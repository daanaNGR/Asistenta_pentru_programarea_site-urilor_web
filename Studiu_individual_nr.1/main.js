
import { ShoppingCart } from "./ShoppingCart.js";

const cart = new ShoppingCart();

const catalog = [
  { id: 1, name: "Ceară modelatoare", price: 85, quantity: 2 },
  { id: 2, name: "Loțiune after-shave", price: 60, quantity: 1 },
  { id: 3, name: "Foarfecă profesională de tuns", price: 350, quantity: 1 },
  { id: 4, name: "Aparat de tuns fără fir", price: 720, quantity: 1 },
  { id: 5, name: "Pieptene din lemn de cireș", price: 45, quantity: 3 },
];

console.log("--- Adăugăm produse în coș ---");
catalog.forEach((product) => cart.addProduct(product));

cart.items.forEach(({ id, name, price, quantity }) => {
  console.log(`  #${id} ${name} — ${price} MDL x ${quantity} buc.`);
});
console.log(`Total după adăugări: ${cart.calculateTotal()} MDL`);

console.log("\n--- Modificăm cantitatea foarfecii la 2 buc. ---");
cart.updateQuantity(3, 2);
console.log(`Total după modificare: ${cart.calculateTotal()} MDL`);

console.log("\n--- Ștergem un produs existent (id 5) ---");
cart.removeProduct(5);
console.log(`Total după ștergere: ${cart.calculateTotal()} MDL`);

console.log("\n--- Încercăm să ștergem un produs inexistent (id 99) ---");
try {
  cart.removeProduct(99);
} catch (error) {
  console.error(`Eroare: ${error.message}`);
}

console.log("\n--- Coșul final ---");
cart.items.forEach(({ name, price, quantity }) => {
  console.log(`  • ${name}: ${price} MDL x ${quantity} = ${price * quantity} MDL`);
});
console.log(`TOTAL COMANDĂ: ${cart.calculateTotal()} MDL`);
