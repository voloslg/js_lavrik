// Uses jQuery plugin bez

$(function() {
  $(".faq .ask").on("click", function() {
    $(this)
      .next()
      .slideToggle({
        duration: 1000,
        easing: $.bez([0.51, 1.92, 0.43, -0.98])
      });
  });
});
