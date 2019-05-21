// Анонимая ц-ция, но ее можно вызвать по событию.
window.onload = function(event) {
  // console.log(event);
  // document.body.onclick = function(e) {
  //   console.log(e);
  // };
};

// Function call
let cat = {};
cat.run = function() {};
cat.run();

// Обработчик события это изначально пустой массив
// Event Listener
// Listener 1
document.body.addEventListener("click", function() {
  console.log(3);
});

// Listener 2
document.body.addEventListener("click", function() {
  console.log(5);
});

// Listener 3
document.body.addEventListener("contextmenu", listener); // правая кнопка мыши

function listener(e) {
  console.log("Listener");
}
