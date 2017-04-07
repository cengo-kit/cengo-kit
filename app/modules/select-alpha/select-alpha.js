'use strict';

Gri.module({
  name: 'select-alpha',
  ieVersion: null,
  $el: $('.select-alpha'),
  container: '.select-alpha',
  fn: function () {
      this.$el.find('select').selectpicker({
        style: 'btn-default',
        size: 4
      });
  }
});
