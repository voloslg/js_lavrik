// this - сылка на обект на котором произошло событие
// Closure
// Замыкание - использование переменной обьявленной выше. Внутрення ф-ция видит переменные внешней ф-ции.

// let item = document.querySelector(".items .item");

// item.onclick = function() {
//   console.log("click");
//   activeItem();
// };

// item.onclick = activeItem; // Функция сслыется на событие.

// function activeItem() {
//   this.classList.toggle("item-active");
//   console.log("activeItem", this);
// }
// =====================================================

// Использование контекста
window.onload = function() {
  var items = document.querySelectorAll(".items .item");

  for (let i = 0; i < items.length; i++) {
    items[i].onclick = activeItem;
  }

  function activeItem() {
    this.classList.toggle("item-active");
  }
};
//======================================================
