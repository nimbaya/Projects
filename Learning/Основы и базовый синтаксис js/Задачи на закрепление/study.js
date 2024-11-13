/*
Функция нахождения четного и нечетного элемента
*/

const ifelse = function (num) {
  if (num % 2 === 0) {
    console.log(`Четные: ${num}`);
  } else {
    console.log(`Нечетные: ${num}`);
  }
};

/*
 1. Задача на работу с переменными и типами данных
*/

const functionNameAndAge = function (name, age) {
  age = Number(age);
  if (isNaN(age)) {
    console.log(`${name}, введен некорректный возраст`);
    return;
  }
  if (age < 18) {
    console.log(`${name}, вы слишком молоды`);
  } else if (age >= 18 && age <= 65) {
    console.log(`${name}, вы в самом расцвете сил`);
  } else {
    console.log(`${name}, время думать о покое`);
  }
};

/*
2. Задача на условия и циклы
*/

const funcForAndWhile = function (cycle) {
  let i = 0;
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  switch (cycle) {
    case "for":
      for (i = 0; i < numbers.length; i++) {
        ifelse(numbers[i]);
      }
      break;
    case "while":
      while (i < numbers.length) {
        ifelse(numbers[i]);
        i++;
      }
      break;
    case "for of":
      for (i of numbers) {
        ifelse(numbers[i]);
      }
      break;
    case "for in":
      for (i in numbers) {
        ifelse(numbers[i]);
      }
      break;
    case "forEach":
      numbers.forEach((i) => {
        ifelse(i);
      });
      break;
    default:
      console.log("Неккоректный ввод");
      break;
  }
};

/*
3. Задача на работу с функциями
*/

const funcArifmNumbers = function (a, b) {
  let sum = a + b;
  let result = sum / 2;
  return ifelse(result);
};

/*
4. Задача на массивы и циклы
*/

const funcArrayNumbers = function (length, max) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * max));
  }
  for (let value of array) {
    console.log(`Удвоенный : ${value * 2} || Обычный: ${value}`);
  }
};

/*
5. Задача на объекты
*/

const funcObjBook = function () {
  let books = [
    {
      name: "Мертвые души",
      author: "Гоголь",
      year: 1842,
    },
    {
      name: "Преступление и наказание",
      author: "Достоевский",
      year: 1842,
    },
    {
      name: "Война и мир",
      author: "Толстой",
      year: 1869,
    },
  ];
  books.forEach((book) => {
    console.log(
      `Название: ${book.name}, Автор: ${book.author}, Год: ${book.year}`
    );
  });
};

/* 
6. Задача на строковые методы
*/

const funcPalindrom = function (str) {
  let mas = str.toLowerCase().split("");
  let string = mas.reverse().join("");
  if (str.toLowerCase() === string) {
    console.log(`Строка ${str} является полиндромом`);
  } else {
    console.log(`Строка ${str} не является полиндромом`);
  }
};

/* 
7. Задача на использование Map
*/

const funcMap = function () {
  const map = new Map();
  map.set("Alice", 25);
  map.set("Bob", 30);
  map.set("Jim", 18);
  if (map.has("Alice")) {
    map.delete("Bob");
  }
  map.forEach((value, key) => {
    console.log(`Список людей: ${key} => ${value} лет`);
  });
};

/* 
8. Задача на использование Set
*/

const funcSet = function () {
  const set = new Set([1,2,3,3,2,4,5,6]);
  set.forEach((value)=>{
    console.log(value);
  })
};

functionNameAndAge("Никита", "35");
funcForAndWhile("for");
funcArifmNumbers(5, 3);
funcArrayNumbers(5, 100);
funcObjBook();
funcPalindrom("казак");
funcMap();
funcSet();
