// ++++++++++++++ ТЕСТ 1 ++++++++++++++

/* const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order("Smoked")); */

// ++++++++++++++ ТЕСТ 2 ++++++++++++++

/* const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"] */

// ++++++++++++++ ТЕСТ 3 ++++++++++++++

/* const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
};

console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
console.log(historyService.getOrdersByEmail("artemis@coldmail.net")); */

// ++++++++++++++ ТЕСТ 4 ++++++++++++++

/* const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);

child.name = "Jason";
child.age = 27;

console.log(child.hasOwnProperty("surname")); */

// ++++++++++++++ ТЕСТ 5 ++++++++++++++

/* const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27; */

// ++++++++++++++ ТЕСТ 6 ++++++++++++++

/* class Car {}

const mango = new Car(); */

// ++++++++++++++ ТЕСТ 7 ++++++++++++++

/* class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car("Audi", "Q3", 36000));
console.log(new Car("BMW", "X5", 58900));
console.log(new Car("Nissan", "Murano", 31700)); */

// ++++++++++++++ ТЕСТ 8 ++++++++++++++

/* class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); */

// ++++++++++++++ ТЕСТ 9 ++++++++++++++

/* class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });

console.log(car1.getPrice());

car1.changePrice(32000);
console.log(car1.getPrice()); */

// ++++++++++++++ ТЕСТ 10 ++++++++++++++

/* class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    console.log(this.items.indexOf(item));
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"] */

// ++++++++++++++ ТЕСТ 11 ++++++++++++++

/* class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue(str) {
    return this.value;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padBoth(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^=" */

// ++++++++++++++ ТЕСТ 12 ++++++++++++++

/* class Car {
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // { model: "Q3", price: 36000 }
console.log(new Car({ brand: "BMW", model: "X5", price: 58900 })); // { model: "X5", price: 58900 }
console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); // { model: "Murano", price: 31700 } */

// ++++++++++++++ ТЕСТ 13 ++++++++++++++

/* class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"] */

// ++++++++++++++ ТЕСТ 14 ++++++++++++++

/* class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");

console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^=" */

// ++++++++++++++ ТЕСТ 15 ++++++++++++++

/* class Car {
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
} */

// ++++++++++++++ ТЕСТ 16 ++++++++++++++

// ++++++++++++++ ТЕСТ 17 ++++++++++++++

// ++++++++++++++ ТЕСТ 18 ++++++++++++++

// ++++++++++++++ ТЕСТ 19 ++++++++++++++

// ++++++++++++++ ТЕСТ 20 ++++++++++++++
