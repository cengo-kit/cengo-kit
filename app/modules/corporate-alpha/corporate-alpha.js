'use strict';

Gri.module({
  name: 'corporate-alpha',
  ieVersion: null,
  $el: $('.corporate-alpha'),
  container: '.corporate-alpha',
  fn: function () {
    $('.corporate-alpha').hide();
    $('.corporate-select select').on('change', function () {
      if ($(this).val() == "k") {
        $('.corporate-alpha').show();
      } else {
        $('.corporate-alpha').hide();
      }
    });
  }
});

