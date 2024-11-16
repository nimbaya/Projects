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

funcCreateArray();
funcChangeArray();
funcLengthArray((array = [1, 2, 3]));
funcElementSize();
funcAddAndDeleteArray();
