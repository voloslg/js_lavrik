window.onload = function() {
  let btn = document.querySelector('input[type="button"]');
  btn.onclick = function() {
    console.log("click");
    ajaxGet();
  };
};

// GET request
function ajaxGet() {
  let urlGet = "https://jsonplaceholder.typicode.com/posts";
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    console.log(request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
      let myip = document.querySelector("#myip");
      myip.innerHTML = request.responseText;
    }
  };

  // request.open(method, url);
  request.open("GET", urlGet);
  request.send();
}

/* 
0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
1	OPENED	Метод open() был вызван.
2	HEADERS_RECEIVED	Метод send() был вызван, доступны заголовки (headers) и статус.
3	LOADING	Загрузка; responseText содержит частичные данные.
4	DONE	Операция полностью завершена.
*/
