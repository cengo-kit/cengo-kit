'use strict';

CNG.module({
  name: 'hero',
  ieVersion: null,
  $el: $('.hero'),
  container: '.hero',
  fn: function () {
    windowResizeController();
    $(window).resize(windowResizeController);

    function windowResizeController() {
      var windowH = $(window).height();
      $('.hero').height(windowH);
    }
  }
});
