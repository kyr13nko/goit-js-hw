// ============== МОДУЛЬ 1 ==============
//   Змінні та типи. Розгалуження. Цикли.


// ++++++++++++++ ТЕСТ 1 ++++++++++++++

/* const productName = "Droid";
console.log(productName); // 'Droid'
const pricePerItem = 2000;
console.log(pricePerItem); // 2000 */


// ++++++++++++++ ТЕСТ 2 ++++++++++++++

/* let productName = "Droid";
let pricePerItem = 2000;

pricePerItem = 3500;
productName = "Repair droid";

console.log(`${productName}: ${pricePerItem}`); */


// ++++++++++++++ ТЕСТ 3 ++++++++++++++

/* const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false; */


// ++++++++++++++ ТЕСТ 4 ++++++++++++++

/* const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;

console.log(totalPrice); */


// ++++++++++++++ ТЕСТ 5 ++++++++++++++

/* const productName = "Droid";
const pricePerItem = 3500;

const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

console.log(message); */

// ++++++++++++++ ТЕСТ 6 ++++++++++++++

/* const orderedQuantity = 6;
const pricePerDroid = 800;
const deliveryFee = 50;
const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

console.log(message); */

// ++++++++++++++ ТЕСТ 7 ++++++++++++++

/* function sayHi() {
    console.log("Hello, this is my first function!");
}
sayHi(); */


// ++++++++++++++ ТЕСТ 8 ++++++++++++++

/* function add(a, b, c) {
    console.log("Addition result equals", a + b + c);
  }
  
  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15); */


// ++++++++++++++ ТЕСТ 9 ++++++++++++++

/* function add(a, b, c) {
    return a + b + c;
  }
  
  add(2, 5, 8); // 15
  
  console.log(add(15, 27, 10));
  console.log(add(10, 20, 30));
  console.log(add(5, 10, 15)); */


// ++++++++++++++ ТЕСТ 10 ++++++++++++++

/* function makeMessage (name, price) {
    const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
}

// makeMessage("Radar", 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

const message1 = makeMessage('Radar', 6150);
console.log(message1); 

const message2 = makeMessage('Scanner', 3500);
console.log(message2);

const message3 = makeMessage('Reactor', 8000);
console.log(message3); 

const message4 = makeMessage('Engine', 4070);
console.log(message4); */


// ++++++++++++++ ТЕСТ 11 ++++++++++++++

/* function calculateTotalPrice (orderedQuantity, pricePerItem) {
        const totalPrice = orderedQuantity * pricePerItem;  
    return totalPrice;
  };
  
  calculateTotalPrice(5, 100);
  calculateTotalPrice(8, 60);
  calculateTotalPrice(3, 400);
  calculateTotalPrice(1, 3500);
  calculateTotalPrice(12, 70); */


// ++++++++++++++ ТЕСТ 12 ++++++++++++++

/* function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    let message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    return message;
}

makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200); */


// ++++++++++++++ ТЕСТ 13 ++++++++++++++

/* function isAdult(age) {
  const passed = age >= 18;
  return passed;
}

isAdult(20);
isAdult(14);
isAdult(8);
isAdult(37); */


// ++++++++++++++ ТЕСТ 14 ++++++++++++++

/* function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = SAVED_PASSWORD === password;
  return isMatch;
}
isValidPassword("mangodab3st")
isValidPassword("kiwirul3z");
isValidPassword("jqueryismyjam"); */


// ++++++++++++++ ТЕСТ 15 ++++++++++++++

/* function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38); */


// ++++++++++++++ ТЕСТ 16 ++++++++++++++

/* function checkStorage(available, ordered) {
  let message;
if (ordered >= available) {
  message = "Not enough goods in stock!";
} else {
  message = "Order is processed, our manager will contact you.";
}
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180); */


// ++++++++++++++ ТЕСТ 17 ++++++++++++++

/* let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10; */


// ++++++++++++++ ТЕСТ 18 ++++++++++++++

/* function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
const totalPrice = pricePerDroid * orderedQuantity;
    if (customerCredits >= totalPrice) {
      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    } else {
      message = "Insufficient funds!";
    }
  // Change code above this line
  return message;
}
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000)); */


// ++++++++++++++ ТЕСТ 19 ++++++++++++++

/* function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

checkPassword("mangohackzor");
checkPassword(null);
checkPassword("polyhax");
checkPassword("jqueryismyjam"); */


// ++++++++++++++ ТЕСТ 20 ++++++++++++++

/* function checkStorage(available, ordered) {
  let message;
  if (ordered === 0) {
    message = "There are no products in the order!";
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0); */


// ++++++++++++++ ТЕСТ 21 ++++++++++++++

/* function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;

  return isInRange;
}

isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5);
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76); */


// ++++++++++++++ ТЕСТ 22 ++++++++++++++

/* function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';
  
  return canAccessContent;
}

checkIfCanAccessContent("pro");
checkIfCanAccessContent("starter");
checkIfCanAccessContent("vip");
checkIfCanAccessContent("free"); */


// ++++++++++++++ ТЕСТ 23 ++++++++++++++

/* function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; 

  return isNotInRange;
} */


// ++++++++++++++ ТЕСТ 24 ++++++++++++++

/* function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  
if (totalSpent >= 50000) {
  discount = GOLD_DISCOUNT;
} else if (totalSpent >= 20000 && totalSpent < 50000) {
  discount =  SILVER_DISCOUNT;
} else if (totalSpent >= 5000 && totalSpent < 20000) {
  discount =  BRONZE_DISCOUNT;
} else {
  discount = BASE_DISCOUNT;
}
  
  return discount;
}

console.log(getDiscount(137000)); */

// ++++++++++++++ ТЕСТ 25 ++++++++++++++

/* function checkStorage(available, ordered) {
  let message;
  
  message = ordered > available ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';

  
  return message;
}

console.log(checkStorage(20, 25)); */


// ++++++++++++++ ТЕСТ 26 ++++++++++++++

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
  
  return message;
} */


// ++++++++++++++ ТЕСТ 27 ++++++++++++++

/* function getSubscriptionPrice(type) {
  let price;

 switch (type) { 
    case 'starter' :
      price = 0; 
      break;

    case 'professional' :
      price = 20; 
      break;

    case 'organization' :
      price = 50; 
      break;
  }

  return price;
}

console.log(getSubscriptionPrice('professional'));
console.log(getSubscriptionPrice('organization'));
console.log(getSubscriptionPrice('starter')); */


// ++++++++++++++ ТЕСТ 28 ++++++++++++++

/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  switch (password) {
    case null :
      message = "Canceled by user!";
      break;

    case ADMIN_PASSWORD :
      message = "Welcome!";
      break;

    default :
      message = "Access denied, wrong password!";
  }

  return message;
}

console.log(checkPassword('')); */


// ++++++++++++++ ТЕСТ 29 ++++++++++++++

/* function getShippingCost(country) {
  let message;
  let price;

switch (country) {
  case 'China' :
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case 'Chile' :
    price = 250;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case 'Australia' :
    price = 170;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case 'Jamaica' :
    price = 120;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

  default :
    message = 'Sorry, there is no delivery to your country';
}

  return message;
}

console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden')); */



// ++++++++++++++ ТЕСТ 30 ++++++++++++++

/* function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; 
  return message;
}
  console.log(getNameLength("Poly"));
  console.log(getNameLength("Harambe"));
  console.log(getNameLength("Billy"));
  console.log(getNameLength("Joe")); */


// ++++++++++++++ ТЕСТ 31 ++++++++++++++

// ++++++++++++++ ТЕСТ 32 ++++++++++++++

// ++++++++++++++ ТЕСТ 33 ++++++++++++++

// ++++++++++++++ ТЕСТ 34 ++++++++++++++

// ++++++++++++++ ТЕСТ 35 ++++++++++++++

// ++++++++++++++ ТЕСТ 36 ++++++++++++++


