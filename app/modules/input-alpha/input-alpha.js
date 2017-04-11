'use strict';

Gri.module({
  name: 'input-alpha',
  ieVersion: null,
  $el: $('.input-alpha'),
  container: '.input-alpha',
  fn: function () {
      this.$el.find('input').change(function () {
        if($(this).val().length>0){
          $(this).addClass('filled');
        }else{
          $(this).removeClass('filled');
        }
      });
  }
});

