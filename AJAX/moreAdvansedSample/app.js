window.onload = function() {
  const urlGet = "https://jsonplaceholder.typicode.com/posts";

  let btn = document.querySelector('input[type="button"]');
  btn.onclick = function() {
    ajaxGet(urlGet, function(data) {
      console.log(data);
    });

    ajaxGet(urlGet, function(data) {
      let myip = document.querySelector("#myip");
      myip.innerHTML = data;
    });
  };
};

// GET request
function ajaxGet(urlGet, callback) {
  let f_callback = callback || function(data) {};
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    console.log(request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      request.responseText;
      f_callback(request.status);
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
