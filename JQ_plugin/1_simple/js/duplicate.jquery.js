(function($) {
  $.fn.duplicate = function(settings) {
    //  тут внитри this - это объект jQuery, а не елемент "DOM"

    var defaults = {
      d: " ",
      cnt: 2
    };

    var options = $.extend(defaults, settings);

    this.each(function() {
      var elem = $(this); // ссылка на DOM
      var text = elem.html();
      var out = "";

      for (var i = 0; i < options.cnt; i++) {
        out += text;

        // add delimiter
        if (i < options.cnt - 1) {
          out += options.d;
        }
      }

      elem.html(out);
    });

    return this;
  };
})(jQuery);

// Jqury plugin wrapper
// (function($) {})(jQuery);

// (function ($) {
//     $.fn.duplicate = function () {
//         this.each(function(){})
// return this;
//     };
// })(jQuery);
