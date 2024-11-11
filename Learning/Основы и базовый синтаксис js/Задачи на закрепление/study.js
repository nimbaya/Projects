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

functionNameAndAge("Никита", "35");
