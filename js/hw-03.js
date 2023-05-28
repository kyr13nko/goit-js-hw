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
