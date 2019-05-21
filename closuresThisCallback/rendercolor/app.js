// Render color

window.onload = function() {
  var items = document.querySelectorAll(".items .item");

  for (let i = 0; i < items.length; i++) {
    items[i].onclick = activeItem;
  }

  function activeItem() {
    this.classList.toggle("item-active");
  }

  setInterval(function() {
    let rand = mtRand(0, items.length - 1);

    // console.log(rand);
    activeItem.call(items[rand]); // вызывает в контексте items[rand]
  }, 500);

  function mtRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
  }
};
