'use strict';

Gri.module({
  name: 'right-side-container',
  ieVersion: null,
  $el: $('.right-side-container'),
  container: '.right-side-container',
  fn: function () {
    this.$el.height($(window).height() - 120);
  }
});
