// Підносимо введене число до введеного степеню

/* let base = prompt('Введіть число');
base = Number(base);
console.log('Число:', base);

let power = prompt('Введіть степінь');
power = Number(power);
console.log('Степінь:', power);

const result = base ** power;

console.log('Результат:', result);
console.log('Тип:', typeof result); */




// Рандомайзер

/* let min = prompt('Введіть мінімальне число');
min = Number(min);

let max = prompt('Введіть максимальне число');
max = Number(max);

//  const max = 43;
// const min = 76;

const result = Math.round(Math.random() * (max - min) + min);

console.log(`Рандомне число від ${min} до ${max}:`);
console.log(result); */




// Рандомний бекграунд сторінки

/* const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const max = colors. length - 1;
const min = 0;
const index = Math.round(Math. random() * (max - min) + min);
const color = colors [index];
console. log(color);
document.body.style.backgroundColor = color; */




// Приводить до норм вигляду імя і прізвище з великої букви

/* let firstName = 'hryhoRii';
let lastName = 'kYRiiENKo';

// let firstName = prompt('Введіть імя');
// let lastName = prompt('Введіть прізвище');

firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

const fullName = `${firstName} ${lastName}`;

console.log(fullName); */



// Пошук в стрічці методом includes()

/* const blackListedWord1 = 'спам'; 
const blackListedWord2 = 'розпродаж';

const string1 = 'Привіт! Я Принц Абдул і я пропоную тобі міліон! це не спам'; 
const string2 = 'Найбільшний РОЗПРОДАЖ на цьому тижні. не пропустіть!';
const string3 = 'Рекламна компанія #fatlivesmatter іфсПаМ';

const normalizedString1 = string1.toLowerCase();
const normalizedString2 = string2.toLowerCase();
const normalizedString3 = string3.toLowerCase();


console.log(normalizedString1.includes(blackListedWord1));
console.log(normalizedString1.includes(blackListedWord2));

console.log(normalizedString2.includes(blackListedWord1));
console.log(normalizedString2.includes(blackListedWord2));

console.log(normalizedString3.includes(blackListedWord1));
console.log(normalizedString3.includes(blackListedWord2)); */

