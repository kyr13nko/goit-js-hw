/* let user = {
    firstName: 'Hryhorii',
    lastName: 'Kyriienko',
    age: 32,
    sex: 'male',
    work: true
}

delete user.age;

console.log(user); */

/* function getLargestExpressionResultOfThree(a, b) {
    
    if (((a + b) > (a - b)) && ((a + b) > (a * b))) {
        return (a + b);
    }

    if (((a - b) > (a + b)) && ((a - b) > (a * b))) {
        return (a - b);
    }
    
    if (((a * b) > (a - b)) && ((a * b) > (a + b))) {
        return (a * b);
    }
} 

getLargestExpressionResultOfThree(5, 5);

console.log(); */

/* function getLargestExpressionResult(a, b) {
  let result = a + b;

  if ((a - b) > result) {
    result = a - b;
  }

  if ((a * b) > result) {
    result = a * b;
    }
    
    if ((a / b) > result) {
        result = a / b;
}

  return result;
}
getLargestExpressionResult(25, 25); */

/* function getDrinks(numberOfGuests) {
  if (numberOfGuests === 0) {
    return 0;
  } else {
    let numberOfPortions = 0;

    for (let i = 1; i <= numberOfGuests; i += 1) {
      numberOfPortions += i;
    }
    return numberOfPortions;
  }
}

console.log(getDrinks(3)); */

/* function getDrinksWithStep(numberOfGuests, step) {
  let sum = 0;

  for (let i = 0; i <= numberOfGuests; i += step) {
    sum += i;
    // console.log(i);
  }
  return sum;
}

console.log(getDrinksWithStep(6, 3)); */

/* function calculateProfit(amount, percent, period) {
  let profit = 0;

  for (let i = 0; i <= period; i += 1) {
    console.log(i);
    profit = amount + amount * (percent / 100);
    profit += profit;
  }
  return profit;
} */

/* function calculateProfit(amount, percent, period) {
  // debugger;
  let result = amount;
  for (let i = 1; i <= period; i++) {
    result += result * (percent / 100);
  }
  return result - amount;
}

console.log("1st: ", calculateProfit(1000, 5, 1)); // 50
console.log("2nd: ", calculateProfit(12500, 3, 12)); // 5322 */

/* function countMs(text) {
  // write code here
  let count = "";
  for (const letter of text) {
    if (letter.toLocaleLowerCase() === "m") {
      count += letter;
    }
  }
  return count.length;
}
console.log(countMs("docuMmMent")); */

/* function removeVowels(doc) {
  let result = "";
  for (const letter of doc) {
    // if (!"aeiouy".includes(letter.toLocaleLowerCase())){
      //   result += letter;
      // }
      if (
        letter.toLocaleLowerCase() !== "a" &&
        letter.toLocaleLowerCase() !== "e" &&
        letter.toLocaleLowerCase() !== "i" &&
        letter.toLocaleLowerCase() !== "o" &&
        letter.toLocaleLowerCase() !== "u" &&
        letter.toLocaleLowerCase() !== "y"
      ) {
        result += letter;
      }
  }
  return result;
}

console.log(removeVowels("document")); // 'dcmnt'
console.log(removeVowels("I like my boss")); // ' lk m bss'
console.log(removeVowels("350 euro")); // '350 r' */
