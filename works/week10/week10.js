// Задание 1
// Напишите функцию firstFunction, которая будет выводить в консоль переменную first.
let first = 8;

function firstFunction() {
  console.log(first);
}

firstFunction();

// Задание 2
// Напишите функцию sum, которая принимает два параметра a и b, складывает их и выводит в консоль результат.
function sum(a, b) {
  console.log(a + b);
}

sum(5, 3);

// Задание 3
// Напишите функцию multiply, которая принимает два параметра x и y, перемножает их и выводит в консоль результат.
function multiply(x, y) {
  console.log(x * y);
}

multiply(4, 2);

// Задание 4
// Напишите функцию greet, которая принимает один параметр firstName и выводит в консоль приветствие с этим именем.
function greet(firstName) {
  console.log(`Привет, ${firstName}!`);
}

greet('Alice');

// Задание 5
// Напишите функцию calculateArea, которая принимает два параметра width и height, вычисляет площадь прямоугольника и выводит в консоль результат.
function calculateArea(width, height) {
  console.log(width * height);
}

calculateArea(6, 4);

// Задание 6
// Напишите функцию printMessage(), которая принимает один параметр message и выводит его в консоль. Если параметр не передан, используйте значение по умолчанию: "Сообщение отсутствует".
function printMessage(message = 'Сообщение отсутствует') {
  console.log(message);
}

printMessage('Привет!');
printMessage();

// Задание 7
// Напишите функцию secondFunction, которая принимает два параметра: c и d, и выводит в консоль их сумму. Если значения параметров не переданы, используйте значения по умолчанию: c = 5 и d = 10.
function secondFunction(c = 5, d = 10) {
  console.log(c + d);
}

secondFunction(); // Выведет 15
secondFunction(2, 3); // Выведет 5

// Задание 8
// Напишите функцию thirdFunction, которая принимает два параметра: f и g, и выводит в консоль их произведение. Если ни одно значение не передано, используйте значения по умолчанию: f = 2 и g = 3.
function thirdFunction(f = 2, g = 3) {
  console.log(f * g);
}

thirdFunction(); // Выведет 6
thirdFunction(4, 5); // Выведет 20

// Задание 9
// Напишите функцию приветствия (название придумайте самостоятельно), которая принимает один параметр guestName и возвращает приветствие в формате "Привет, {guestName}!". Если параметр не передан, используйте значение по умолчанию: "Гость". Чтобы увидеть результат в консоли, вызовите функцию внутри console.log.
function sayHello(guestName = 'Гость') {
  return `Привет, ${guestName}!`;
}

console.log(sayHello('Иван'));
console.log(sayHello());

// Задание 10
// Создайте функцию calculateDifference с помощью Function Expression и правильно используйте её, чтобы вычесть два числа и вывести результат в консоль.
const calculateDifference = function(a, b) {
  return a - b;
};

console.log(calculateDifference(5, 3)); // Выведет 2

// Задание 11
// Напишите функцию calculateProduct с помощью Function Expression, которая будет принимать два параметра. Функция должна перемножить значения и вывести результат в консоль.
const calculateProduct = function(a, b) {
  return a * b;
};

console.log(calculateProduct(5, 3)); // Выведет 15

// Задание 12
// Напишите стрелочную функцию calculateSquare, которая будет принимать один параметр num. Внутри функции объявите локальную переменную result и присвойте ей значение, равное квадрату числа num. Затем верните значение переменной result из функции.
const calculateSquare = (num) => {
  const result = num * num;
  return result;
};

console.log(calculateSquare(5)); // Выведет 25

// Задание 13
// Напишите стрелочную функцию sayThree, которая будет выводить в консоль сообщение "Три!"
const sayThree = () => {
  console.log('Три!');
};

sayThree();

// Задание 14
// Напишите функцию findAnimal, которая будет выводить в консоль значения переменных cat и rabbit. Переменная cat объявлена внутри функции, а переменная rabbit объявлена во внешней области видимости.
let rabbit = 'Кролик';

function findAnimal() {
  let cat = 'Кот';
  console.log(cat);
  console.log(rabbit);
}

findAnimal();

// Задание 15
// Допишите программу, которая вычисляет сколько лет прошло с летней олимпиады в Токио, Япония.
const currentYear = new Date().getFullYear();
const lastOlympicsYear = 2021;

function calculateYearsSinceLastOlympics(currentYear, lastOlympicsYear) {
  return currentYear - lastOlympicsYear;
}

console.log('С момента летней олимпиады в Токио прошло ' + calculateYearsSinceLastOlympics(currentYear, lastOlympicsYear) + ' года');

// Задание 16
// Напишите программу, которая вычисляет возраст пользователя на основе его года рождения, будет выводить результат в консоль.
const friendYearOfBirth = 1985;

function calculateAge(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

console.log('Моему другу сейчас ' + calculateAge(friendYearOfBirth) + ' лет');

// Задание 17
// Напишите функцию которая принимает ваш год рождения и возвращает ваш возраст.
function getMyAge(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

console.log(getMyAge(1990));

// Задание 18
// Напишите функцию, которая должна возводить число в заданную степень. Результат должен выводить в консоль в формате: console.log("Результат: " + result);
function power(base, exponent) {
  const result = Math.pow(base, exponent);
  console.log('Результат: ' + result);
}

power(2, 3);