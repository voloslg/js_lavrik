// let items = document.querySelectorAll(".items .item");
// items.forEach(element => {
//   element.addEventListener("click", function() {
//     console.log(this);
//     this.style.border = "1px solid red";
//   });
// });

let items = document.querySelectorAll(".items .item");
let dataPrice = document.querySelector(".value");

for (var i = 0; i < items.length; i++) {
  items[i].onclick = function() {
    this.classList.toggle("item-active");

    calcPrice();
  };
}

function calcPrice() {
  let price = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains("item-active")) {
      price += parseInt(items[i].getAttribute("data-price"));
    }
  }
  dataPrice.innerHTML = price;
}
