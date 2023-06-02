// ++++++++++++++ ТЕСТ 1 ++++++++++++++

/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

console.log(apartment); */

// ++++++++++++++ ТЕСТ 2 ++++++++++++++

/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

console.log(apartment); */

// ++++++++++++++ ТЕСТ 3 ++++++++++++++

/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

console.log(aptRating);
console.log(aptDescr);
console.log(aptPrice);
console.log(aptTags); */

// ++++++++++++++ ТЕСТ 4 ++++++++++++++

/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];

console.log(ownerName);
console.log(ownerPhone);
console.log(ownerEmail);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag); */

// ++++++++++++++ ТЕСТ 5 ++++++++++++++

/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"]; */

// ++++++++++++++ ТЕСТ 6 ++++++++++++++

/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted"); */

// ++++++++++++++ ТЕСТ 7 ++++++++++++++

/* const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = "Jamaica";
apartment.location.city = "Kingston";

console.log(apartment); */

// ++++++++++++++ ТЕСТ 8 ++++++++++++++

/* const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product); */

// ++++++++++++++ ТЕСТ 9 ++++++++++++++

/* const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
}; */

// ++++++++++++++ ТЕСТ 10 ++++++++++++++

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values); */

// ++++++++++++++ ТЕСТ 11 ++++++++++++++

/* const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
}

console.log(keys);
console.log(values); */

// ++++++++++++++ ТЕСТ 12 ++++++++++++++

/* function countProps(object) {
  let propCount = 0;

  propCount = Object.keys(object).length;

  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); */

// ++++++++++++++ ТЕСТ 13 ++++++++++++++

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (let key of keys) {
  values.push(apartment[key]);
}
console.log(values); */

// ++++++++++++++ ТЕСТ 14 ++++++++++++++

/* function countProps(object) {
  let propCount = 0;

  const keys = Object.keys(object);
  // for (const key of keys) {
  propCount = keys.length;
  // }

  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); */

// ++++++++++++++ ТЕСТ 15 ++++++++++++++

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment); */

// ++++++++++++++ ТЕСТ 16 ++++++++++++++

/* function countTotalSalary(salaries) {
  let totalSalary = 0;

  salaries = Object.values(salaries);

  for (const salary of salaries) {
    totalSalary += salary;
  }

  return totalSalary;
}

console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); */

// ++++++++++++++ ТЕСТ 17 ++++++++++++++

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors); */

// ++++++++++++++ ТЕСТ 18 ++++++++++++++

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}
console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine")); */

// ++++++++++++++ ТЕСТ 19 ++++++++++++++

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const productArray = [];

  for (const product of products) {
    for (const key of Object.keys(product)) {
      if (key === propName) {
        productArray.push(product[key]);
      }
    }
  }

  return productArray;
}
console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category")); */

// ++++++++++++++ ТЕСТ 20 ++++++++++++++

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  const cost = 0;

  for (const product of products) {
    // console.log(Object.values(product));
    for (const key of Object.values(product)) {
      if (key === productName) {
        return product.price * product.quantity;
      }
    }
  }
  return cost;
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Scanner")); */

// ++++++++++++++ ТЕСТ 21 ++++++++++++++

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature); */

// ++++++++++++++ ТЕСТ 22 ++++++++++++++

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday,
  today,
  tomorrow,
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);
console.log(icon); */

// ++++++++++++++ ТЕСТ 23 ++++++++++++++

/* const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

console.log(meanTemperature); */

// ++++++++++++++ ТЕСТ 24 ++++++++++++++

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

console.log(hexColors);
console.log(rgbColors); */

// ++++++++++++++ ТЕСТ 25 ++++++++++++++

/* const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

console.log(todayIcon);
console.log(tomorrowIcon); */

// ++++++++++++++ ТЕСТ 26 ++++++++++++++

/* function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
console.log(
  calculateMeanTemperature({
    today: { low: 10, high: 20 },
    tomorrow: { low: 20, high: 30 },
  })
); */

// ++++++++++++++ ТЕСТ 27 ++++++++++++++

/* const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore);
console.log(worstScore); */

// ++++++++++++++ ТЕСТ 28 ++++++++++++++

/* const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(allScores);
console.log(bestScore);
console.log(worstScore); */

// ++++++++++++++ ТЕСТ 29 ++++++++++++++

/* const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };

console.log(finalSettings); */

// ++++++++++++++ ТЕСТ 30 ++++++++++++++

/* function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

  const newObject = {
    completed,
    category,
    priority,
  };

  const newData = { ...newObject, ...data };

  return newData;
}

console.log(makeTask({}));
console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
console.log(makeTask({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" })); */

// ++++++++++++++ ТЕСТ 31 ++++++++++++++

/* function add(...args) {
  let totalArgsResult = 0;
  console.log(args);
  for (const arg of args) {
    totalArgsResult += arg;
  }
  return totalArgsResult;
}
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36)); */

// ++++++++++++++ ТЕСТ 32 ++++++++++++++

/* function addOverNum(firstArg, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstArg) {
      total += arg;
    }
  }

  return total;
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); */

// ++++++++++++++ ТЕСТ 33 ++++++++++++++

/* function findMatches(firstArgs, ...otherArgs) {
  const matches = [];

  for (const firstArg of firstArgs) {
    // console.log(`firstArg - ${firstArg}`);
    for (const otherArg of otherArgs) {
      if (firstArg === otherArg) {
        matches.push(firstArg);
      }
    }
  }
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); */

// ++++++++++++++ ТЕСТ 34 ++++++++++++++

/* const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

console.log(bookShelf.getBooks());
console.log(bookShelf.addBook("Haze"));
console.log(bookShelf.removeBook("Red sunset"));
console.log(bookShelf.updateBook("Sands of dune", "Dune")); */

// ++++++++++++++ ТЕСТ 35 ++++++++++++++

/* const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    for (const book of this.books) {
      if (book === oldName) {
        this.books.splice(this.books.indexOf(book), 1, newName);
      }
    }
    return this.books;
  },
};

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune")); */

// ++++++++++++++ ТЕСТ 36 ++++++++++++++

/* const atTheOldToad = {
  potions: [],
}; */

// ++++++++++++++ ТЕСТ 37 ++++++++++++++

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  getPotions() {
    return this.potions;
  },
}; */

// ++++++++++++++ ТЕСТ 38 ++++++++++++++

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    this.potions.push(potionName);
    return this.potions;
  },
};

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion")); */

// ++++++++++++++ ТЕСТ 39 ++++++++++++++

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i]) {
        // console.log(potionName);
        this.potions.splice(i, 1);
      }
    }
    return this.potions;
  },
};
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.removePotion("Speed potion")); */

// ++++++++++++++ ТЕСТ 40 ++++++++++++++

/* const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    for (const potion of this.potions) {
      if (potion === oldName) {
        this.potions.splice(this.potions.indexOf(potion), 1, newName);
      }
    }
    return this.potions;
  },
};

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility")); */

// ++++++++++++++ ТЕСТ 41 ++++++++++++++

/* const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    console.log(this.potions);
  },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        return this.potions;
      }
    }
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      let potion = this.potions[i];
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
    return this.potions;
  },
};

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")); */
