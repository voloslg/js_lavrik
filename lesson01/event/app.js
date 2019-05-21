// let items = document.querySelectorAll(".items .item");
// items.forEach(element => {
//   element.addEventListener("click", function() {
//     console.log(this);
//     this.style.border = "1px solid red";
//   });
// });

var items = document.querySelectorAll(".items .item");

for (var i = 0; i < items.length; i++) {
  items[i].onclick = function() {
    this.classList.toggle("item-active");
  };
}
