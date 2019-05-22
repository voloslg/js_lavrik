let prev = document.querySelector("input[value='prev']");
let next = document.querySelector("input[value='next']");
let images = document.querySelectorAll("#slider .photos img");

let i = 0;

next.addEventListener("click", () => {
  return btnClick.call(images);
});

function btnClick() {
  this[i].style.display = "none";
  i++;
  if (i >= images.length) {
    i = 0;
  }
  this[i].style.display = "block";
}
//=====================================================
// Через Замыкание
next.onclick = function() {
  images[i].style.display = "none";
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = "block";
};
//=====================================================

// prev.onclick = function() {
//   images[i].style.display = "none";
//   i--;
//   if (i < 0) {
//     i = images.length - 1;
//   }
//   images[i].style.display = "block";
// };
