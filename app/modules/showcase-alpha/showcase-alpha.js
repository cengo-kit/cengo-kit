'use strict';

Gri.module({
  name: 'showcase-alpha',
  ieVersion: null,
  $el: $('.showcase-alpha'),
  container: '.showcase-alpha',
  fn: function () {
    this.$el.height($(window).height());
    this.$el.find("img.scale").imageScale();
  }
});
