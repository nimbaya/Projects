/*
1. Создание массива
*/

const funcCreateArray = function () {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  array.forEach((element) => {
    console.log(element);
  });
};

/*
2. Изменение массива
*/

const funcChangeArray = function () {
  let array = [1, 2, 3, 4, 5];
  array[2] = 10;
  array.forEach((element) => {
    console.log(element);
  });
};

/*
3. Длина массива
*/

const funcLengthArray = function (array) {
  console.log(array.length);
};

/*
4. Доступ к элементам
*/

const funcElementSize = function () {
  let array = [10, 20, 30, 40, 50];
  console.log(array[array.length - 1]);
};

/*
5. Добавление и удаление элементов
*/

const funcAddAndDeleteArray = function () {
  let array = [1, 2, 3];
  array.push(4);
  array.shift();
  console.log(array);
};

/*
6. Чётные числа
*/

const funcCheatNumbers = function () {
  array.forEach((element) => {
    if (element % 2 === 0) {
      console.log(element);
    }
  });
};

/*
7. Удвоение значений
*/

const funcNewArrayDouble = function () {
  let array = [1, 2, 3, 4, 5];
  let newArray = array.map((element) => element * 2);
  console.log(newArray);
};

/*
8. Сумма элементов
*/

const funcSumElements = function () {
  console.log(array.reduce((acc, element) => acc + element, 0));
};

/*
9. Подсчёт слов
*/

const funcAccString = function () {
  let array = ["apple", "banana", "apple", "orange", "banana", "apple"];
  const map = new Map();
  array.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  });
  console.log(map);
};

/*
10. Поиск максимального значения
*/

const funcMaxNumbersArray = function (array) {
  let max = Math.max(...array);
  console.log(max);
};

/*
11. Поиск элемента
*/

const funcSearchElem = function () {
  let array = [1, 2, 3, 4, 5];
  let value = array.findIndex((num) => num === 3);
  console.log(array[value]);
};

/*
12. Нахождение первого отрицательного числа
*/

const funcArrayElementSearch = function () {
  let array = [1, 2, -3, 4, -5];
  let result = array.find((element) => element < 0);
  console.log(result);
};

/*
12. Сортировка по возрастанию
*/

const funcSortArrayNum = function () {
  let array = [1, 10, 3, 2, 15];
  array.sort((a, b) => a - b);
  console.log(array);
};

/*
12. Сортировка строк
*/

const funcSortArrayStr = function () {
  let array = ["banana", "apple", "cherry", "date"];
  array.sort((a, b) => a.localeCompare(b));
  console.log(array);
};

/*
13. Удаление дубликатов
*/

const funcDeleteDubleArray = function () {
  let array = [1, 2, 2, 3, 4, 4, 5, 5, 5];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i + 1, 1);
      i--;
    }
  }
  console.log(array);
};

funcCreateArray();
funcChangeArray();
funcLengthArray((array = [1, 2, 3]));
funcElementSize();
funcAddAndDeleteArray();
funcCheatNumbers((array = [1, 2, 3, 4, 5, 6]));
funcNewArrayDouble();
funcSumElements((array = [1, 2, 3, 4, 5]));
funcAccString();
funcMaxNumbersArray((array = [1, 2, 32, 4, 5]));
funcSearchElem();
funcArrayElementSearch();
funcSortArrayNum();
funcSortArrayStr();
funcDeleteDubleArray();
