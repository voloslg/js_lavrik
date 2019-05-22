// У любого объекта есть:
// Свойства
// Методы
// События

let text = document.getElementById("text");
text = document.querySelector("#text");

text.onclick = function() {
  // this ссылается на text (на текущий объект)
  this.innerHTML = "Hello!";
  this.className = "text-class";
  // Стили
  this.style.color = "red";
  this.style.fontSize = "30px";
};
console.log(text.style);
