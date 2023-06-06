// ++++++++++++++ ТЕСТ 1 ++++++++++++++

/* function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

console.log("result: ", result);
console.log("pointer: ", pointer); */

// ++++++++++++++ ТЕСТ 2 ++++++++++++++

/* function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza)); */

// ++++++++++++++ ТЕСТ 3 ++++++++++++++

/* function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
}); */

// ++++++++++++++ ТЕСТ 4 ++++++++++++++

/* const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    } else {
      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    }
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError)); */

// ++++++++++++++ ТЕСТ 5 ++++++++++++++

/* function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach((element) => {
    totalPrice += element;
  });

  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); */

// ++++++++++++++ ТЕСТ 6 ++++++++++++++

/* function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20)); */

// ++++++++++++++ ТЕСТ 7 ++++++++++++++

/* function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach((firstElement) => {
    if (secondArray.includes(firstElement)) {
      commonElements.push(firstElement);
    }
  });

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); */

// ++++++++++++++ ТЕСТ 8 ++++++++++++++

/* const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}; */

// ++++++++++++++ ТЕСТ 9 ++++++++++++++

/* const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem; */

// ++++++++++++++ ТЕСТ 10 ++++++++++++++

/* const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); */

// ++++++++++++++ ТЕСТ 11 ++++++++++++++

/* const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
} */

// ++++++++++++++ ТЕСТ 12 ++++++++++++++

/* const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
}; */

// ++++++++++++++ ТЕСТ 13 ++++++++++++++

/* function changeEven(numbers, value) {
  const newArr = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      number = number + value;
    }

    newArr.push(number);
  });

  return newArr;
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); */

// ++++++++++++++ ТЕСТ 14 ++++++++++++++

/* const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map((planet) => planet.length);

console.log(planetsLengths); */

// ++++++++++++++ ТЕСТ 15 ++++++++++++++

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map((book) => book.title);

console.log(titles); */

// ++++++++++++++ ТЕСТ 16 ++++++++++++++

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap((book) => book.genres);

console.log(genres); */

// ++++++++++++++ ТЕСТ 17 ++++++++++++++

/* const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserNames = (users) => {
  const names = users.map((user) => user.name);

  return names;
};

console.log(getUserNames(users)); */

// ++++++++++++++ ТЕСТ 18 ++++++++++++++

/* const getUserEmails = (users) => {
  const emails = users.map((user) => user.email);

  return emails;
}; */

// ++++++++++++++ ТЕСТ 19 ++++++++++++++

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

// ++++++++++++++ ТЕСТ 20 ++++++++++++++

// ++++++++++++++ ТЕСТ 21 ++++++++++++++

// ++++++++++++++ ТЕСТ 22 ++++++++++++++

// ++++++++++++++ ТЕСТ 23 ++++++++++++++

// ++++++++++++++ ТЕСТ 24 ++++++++++++++

// ++++++++++++++ ТЕСТ 25 ++++++++++++++

// ++++++++++++++ ТЕСТ 26 ++++++++++++++

// ++++++++++++++ ТЕСТ 27 ++++++++++++++

// ++++++++++++++ ТЕСТ 28 ++++++++++++++

// ++++++++++++++ ТЕСТ 29 ++++++++++++++

// ++++++++++++++ ТЕСТ 30 ++++++++++++++

// ++++++++++++++ ТЕСТ 31 ++++++++++++++

// ++++++++++++++ ТЕСТ 32 ++++++++++++++

// ++++++++++++++ ТЕСТ 33 ++++++++++++++

// ++++++++++++++ ТЕСТ 34 ++++++++++++++

// ++++++++++++++ ТЕСТ 35 ++++++++++++++

// ++++++++++++++ ТЕСТ 36 ++++++++++++++

// ++++++++++++++ ТЕСТ 37 ++++++++++++++

// ++++++++++++++ ТЕСТ 38 ++++++++++++++

// ++++++++++++++ ТЕСТ 39 ++++++++++++++

// ++++++++++++++ ТЕСТ 40 ++++++++++++++

// ++++++++++++++ ТЕСТ 41 ++++++++++++++

// ++++++++++++++ ТЕСТ 42 ++++++++++++++

// ++++++++++++++ ТЕСТ 43 ++++++++++++++

// ++++++++++++++ ТЕСТ 44 ++++++++++++++

// ++++++++++++++ ТЕСТ 45 ++++++++++++++

// ++++++++++++++ ТЕСТ 46 ++++++++++++++

// ++++++++++++++ ТЕСТ 47 ++++++++++++++

// ++++++++++++++ ТЕСТ 48 ++++++++++++++
