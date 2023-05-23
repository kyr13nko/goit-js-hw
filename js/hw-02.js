// ++++++++++++++ ТЕСТ 1 ++++++++++++++

/* function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }

  return "You are a minor";
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38)); */

// ++++++++++++++ ТЕСТ 2 ++++++++++++++

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam")); */

// ++++++++++++++ ТЕСТ 3 ++++++++++++++

/* function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  }

  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }

  return "The order is accepted, our manager will contact you";
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0)); */

// ++++++++++++++ ТЕСТ 4 ++++++++++++++

/* const fruits = ["apple", "plum", "pear", "orange"];

console.log(fruits); */

// ++++++++++++++ ТЕСТ 5 ++++++++++++++

/* const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3]; */

// ++++++++++++++ ТЕСТ 6 ++++++++++++++

/* const fruits = ["apple", "plum", "pear", "orange"];

fruits[1] = "peach";
fruits[3] = "banana"; */

// ++++++++++++++ ТЕСТ 7 ++++++++++++++

/* const fruits = ["apple", "peach", "pear", "banana"];

const fruitsArrayLength = fruits.length; */

// ++++++++++++++ ТЕСТ 8 ++++++++++++++

/* const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex]; */

// ++++++++++++++ ТЕСТ 9 ++++++++++++++

/* function getExtremeElements(array) {
  const newArray = [];
  newArray.push(array[0], array[array.length - 1]);
  return newArray;
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); */

// ++++++++++++++ ТЕСТ 10 ++++++++++++++

/* function splitMessage(message, delimiter) {
  let words;

  words = message.split(delimiter);

  return words;
}
console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_")); */

// ++++++++++++++ ТЕСТ 11 ++++++++++++++

/* function calculateEngravingPrice(message, pricePerWord) {
  let price;
  price = message.split(" ").length * pricePerWord;
  return price;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20)); */

// ++++++++++++++ ТЕСТ 12 ++++++++++++++

/* function makeStringFromArray(array, delimiter) {
  let string;
  string = array.join(delimiter);
  return string;
}

console.log(
  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
);
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_")); */

// ++++++++++++++ ТЕСТ 13 ++++++++++++++

/* function slugify(title) {
  let slug;

  slug = title.toLowerCase().split(" ").join("-");
  return slug;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); */

// ++++++++++++++ ТЕСТ 14 ++++++++++++++

/* const fruits = ["apple", "plum", "pear", "orange", "banana"];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(2, 5); */

// ++++++++++++++ ТЕСТ 15 ++++++++++++++

/* const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients); */

// ++++++++++++++ ТЕСТ 16 ++++++++++++++

/* function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray).slice(0, maxLength);

  return newArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); */

// ++++++++++++++ ТЕСТ 17 ++++++++++++++

/* const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
} */

// ++++++++++++++ ТЕСТ 18 ++++++++++++++

/* function calculateTotal(number) {
  let total = 0;
  for (let i = 1; i <= number; i += 1) {
    total += i;
  }
  return total;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24)); */

// ++++++++++++++ ТЕСТ 19 ++++++++++++++

/* const fruits = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
} */

// ++++++++++++++ ТЕСТ 20 ++++++++++++++

/* function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); */

// ++++++++++++++ ТЕСТ 21 ++++++++++++++

/* function findLongestWord(string) {
  // Розділити рядок на окремі слова за допомогою пробілу як роздільника
  const words = string.split(" ");

  // Змінна для зберігання найдовшого слова
  let longestWord = "";

  // Пройтися по кожному слову і знайти найдовше
  for (let i = 0; i < words.length; i += 1) {
    const currentWord = words[i];

    // Порівняти довжину поточного слова з найдовшим словом
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  // Повернути найдовше слово
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you")); */

// ++++++++++++++ ТЕСТ 22 ++++++++++++++

/* function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34)); */

// ++++++++++++++ ТЕСТ 23 ++++++++++++++

/* function filterArray(numbers, value) {
  let newArray = [];
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20)); */

// ++++++++++++++ ТЕСТ 24 ++++++++++++++

/* function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit);
}
console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple")); */

// ++++++++++++++ ТЕСТ 25 ++++++++++++++

/* function getCommonElements(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); */

// ++++++++++++++ ТЕСТ 26 ++++++++++++++

/* function calculateTotalPrice(order) {
  let total = 0;

  //   for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }

  for (const item of order) {
    total += item;
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([])); */

// ++++++++++++++ ТЕСТ 27 ++++++++++++++

/* function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20)); */

// ++++++++++++++ ТЕСТ 28 ++++++++++++++

/* const a = 3 % 3; // 0
console.log(a);
const b = 4 % 3; // 1
console.log(b);
const c = 11 % 8; // 3
console.log(c);
const d = 12 % 7; // 5
console.log(d);
const e = 8 % 6; // 2
console.log(e); */

// ++++++++++++++ ТЕСТ 29 ++++++++++++++

/* function getEvenNumbers(start, end) {
  const newArray = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }
  return newArray;
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7)); */

// ++++++++++++++ ТЕСТ 30 ++++++++++++++

/* const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log(
  `Перше число між ${start} і ${end} яке ділиться без остачі на 5: ${number}`
); */

// ++++++++++++++ ТЕСТ 31 ++++++++++++++

/* function findNumber(start, end, divisor) {
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7)); */

// ++++++++++++++ ТЕСТ 32 ++++++++++++++

/* function includes(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(includes([1, 2, 3, 4, 5], 3)); // повертає true
console.log(includes([1, 2, 3, 4, 5], 17)); // повертає false
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // повертає true
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")); // повертає false
console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // повертає true
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // повертає false */
