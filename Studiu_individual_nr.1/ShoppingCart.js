
export class ShoppingCart {
  #items = [];

  addProduct(product) {
    const { id, name, price, quantity } = product;
    const existing = this.#items.find((item) => item.id === id);

    if (existing) {
      this.#items = this.#items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      this.#items = [...this.#items, { id, name, price, quantity }];
    }

    return this;
  }

  removeProduct(id) {
    const exists = this.#items.some((item) => item.id === id);
    if (!exists) {
      throw new Error(`Produsul cu id ${id} nu există în coș.`);
    }
    this.#items = this.#items.filter((item) => item.id !== id);
    return this;
  }

  updateQuantity(id, quantity) {
    const exists = this.#items.some((item) => item.id === id);
    if (!exists) {
      throw new Error(`Produsul cu id ${id} nu există în coș.`);
    }
    if (quantity <= 0) {
      throw new Error(`Cantitatea trebuie să fie mai mare decât 0.`);
    }
    this.#items = this.#items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    return this;
  }

  // calcularea totalului comenzii
  calculateTotal() {
    return this.#items.reduce((total, { price, quantity }) => total + price * quantity, 0);
  }

  get items() {
    return [...this.#items];
  }
}
