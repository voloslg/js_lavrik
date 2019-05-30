// Плавное открытие/закрытие списка

$(function() {
  let q = $(".question");

  q.on("click", function() {
    console.log($(this));
    $(this)
      .next()
      .slideToggle(400);
  });
});
