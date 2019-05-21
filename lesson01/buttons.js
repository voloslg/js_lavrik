// querySelector - single element
// querySelectorAll - array of DOM elements

// Работа c одним событием на разных объектах
let buttons = document.querySelectorAll(".actions input"); // Node List (array)
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener("click", btnClick);
}

// Передача параметров
function btnClick(e) {
  // this - ссылка элемент DOM
  // console.log(this);
  // console.log(e.target.value);
  // let name = this.getAttribute("data-price");
  let name = this.getAttribute("name");
  if (name === "save") {
    console.log(name, "1");
  }
  if (name === "delete") {
    console.log(name, "2");
  }
}
