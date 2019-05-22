let btnPrev = document.querySelector("input[value=prev]");
let btnNext = document.querySelector("input[value=next]");
let images = document.querySelectorAll("#gallery .photos img");

let i = 0;

// btnPrev.onclick = function() {
//   images[i].className = "";
//   i--;
//   if (i < 0) {
//     i = images.length - 1;
//   }
//   images[i].className = "showed";
// };

btnNext.onclick = function() {
  images[i].className = "";
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].className = "showed";
};
