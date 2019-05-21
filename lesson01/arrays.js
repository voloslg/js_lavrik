// Arrays
// Массив - нумеррованный
// Объект - ассоциативный

let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// У объектов нет length!!!!!!!!!!!!!!
let capitals = {
  usa: "Vashigton",
  canada: "Ottawa",
  gb: "London"
};
// console.log(capitals.usa);
// console.log(capitals["usa"]);

for (let key in capitals) {
  console.log(`${key}: ${capitals[key]}`);
}

// Не выводить массив через FOR IN, FOR OF - эти циклы для объектов!!!!!!
