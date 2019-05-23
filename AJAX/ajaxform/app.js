window.onload = function() {
  let btn = document.querySelector("#send");
  let inp_email = document.querySelector("input[name='email']");
  let inp_name = document.querySelector("input[name='name']");
  let inp_phone = document.querySelector("input[name='phone']");

  btn.onclick = function() {
    let params = `Name: ${inp_name.value}, Email: ${inp_email.value}, Phone: ${
      inp_phone.value
    }`;
    console.log(params);
    ajaxPost(params);
  };
};

// GET request
function ajaxPost(params) {
  let urlPost = "https://jsonplaceholder.typicode.com/posts";
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    console.log(request.readyState);
    if (request.readyState === 4) {
      console.log("request.responseText", request.responseText);
      let result = document.querySelector("#result");
      result.innerHTML = "Form has been send";
    } else {
      let result = document.querySelector("#result");
      result.innerHTML = "Error";
    }
  };

  request.open("POST", urlPost);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(params);
}

/* 
0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
1	OPENED	Метод open() был вызван.
2	HEADERS_RECEIVED	Метод send() был вызван, доступны заголовки (headers) и статус.
3	LOADING	Загрузка; responseText содержит частичные данные.
4	DONE	Операция полностью завершена.
*/
