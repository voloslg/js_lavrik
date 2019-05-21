window.onload = function() {
  let div = document.querySelector(".items .item");
  let timer = new Timer(60, div);

  // // отрабатывает в контексте Window
  // setInterval(function() {
  //   timer.tick(); // Видит переменную из-за замыкания
  // }, 1000);

  // отрабатывает в контексте Window
  setInterval(() => {
    return timer.tick(); // Видит переменную из-за замыкания
  }, 1000);

  function Timer(time, elem) {
    this.time = time;
    this.elem = elem;

    this.tick = function() {
      this.time--;
      this.elem.innerHTML = this.time;
    };
  }
};
