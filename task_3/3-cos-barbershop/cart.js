// cart.js — gestionarea coșului de cumpărături pentru un barbershop
// Fiecare produs: { id, name, price, quantity }

let cart = [];

// adăugarea unui produs — dacă produsul există deja, îi crește cantitatea
export function addProduct(product) {
  const { id, name, price, quantity } = product;
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    cart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + quantity } : item
    );
  } else {
    cart = [...cart, { id, name, price, quantity }];
  }

  return cart;
}

// ștergerea unui produs — aruncă eroare dacă produsul nu există
export function removeProduct(id) {
  const exists = cart.some((item) => item.id === id);
  if (!exists) {
    throw new Error(`Produsul cu id ${id} nu există în coș.`);
  }
  cart = cart.filter((item) => item.id !== id);
  return cart;
}

// modificarea cantității unui produs existent
export function updateQuantity(id, quantity) {
  const exists = cart.some((item) => item.id === id);
  if (!exists) {
    throw new Error(`Produsul cu id ${id} nu există în coș.`);
  }
  if (quantity <= 0) {
    throw new Error(`Cantitatea trebuie să fie mai mare decât 0.`);
  }
  cart = cart.map((item) => (item.id === id ? { ...item, quantity } : item));
  return cart;
}

// calcularea totalului comenzii
export function calculateTotal() {
  return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
}

// returnează starea curentă a coșului
export function getCart() {
  return cart;
}
