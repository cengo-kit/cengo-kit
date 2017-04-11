'use strict';

Gri.module({
  name: 'radio-alpha',
  ieVersion: null,
  $el: $('.radio-alpha'),
  container: '.radio-alpha',
  fn: function () {
    this.$el.find('input').iCheck();
  }
});
