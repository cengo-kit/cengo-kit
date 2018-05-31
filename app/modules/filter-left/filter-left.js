'use strict';

CNG.module({
  name: 'filter-left',
  ieVersion: null,
  $el: $('.filter-left'),
  container: '.filter-left',
  fn: function () {

    const $this = this.$el;

    $this.find('a').on('click', function () {
      if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
      } else {
        $(this).parent().addClass('active');
      }
    });

  }
});
