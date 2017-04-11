'use strict';

Gri.module({
  name: 'checkbox-alpha',
  ieVersion: null,
  $el: $('.checkbox-alpha'),
  container: '.checkbox-alpha',
  fn: function () {
    this.$el.find('input').iCheck();
  }
});
