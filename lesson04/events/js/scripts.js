let links = document.querySelectorAll('a[target="_blank"]');

// Подтверждение переходя по ссылке

for (let i = 0; i < links.length; i++) {
  links[i].onclick = confirmAway;
}

function confirmAway(e) {
  if (!confirm("Перейти")) {
    return false;
  }
  // alert("Перейти?");
  // prompt
  // confirm
  // return false; // ОТМЕНА СТАНДАРТНОГО ДЕЙСТВИЯ БРАУЗЕРА
}

var images = document.querySelectorAll(".gallery img");

for (var i = 0; i < images.length; i++) {
  images[i].onclick = stopMove;
  images[i].onmousedown = stopMove;
  images[i].oncontextmenu = stopMove;
}

function stopMove(e) {
  // alert("hello");

  return false;
}
