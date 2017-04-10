'use strict';

Gri.module({
  name: 'checkbox-beta',
  ieVersion: null,
  $el: $('.checkbox-beta'),
  container: '.checkbox-beta',
  fn: function () {
    this.$el.find('input').iCheck();
  }
});
