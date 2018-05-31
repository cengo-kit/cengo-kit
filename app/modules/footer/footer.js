'use strict';

CNG.module({
  name: 'footer',
  ieVersion: null,
  $el: $('.footer'),
  container: '.footer',
  fn: function () {

    const $this = this.$el;
    let $newsletter = $this.find('.footer-newsletter');

    $newsletter.find('input').on('focus', function () {
      if ($(this).val() === '') {
        $(this).attr('placeholder', '');
      }
    });

    $newsletter.find('input').on('blur', function () {
      if ($(this).val() === '') {
        $(this).attr('placeholder', $(this).data('placeholder'));
      }
    });

  }
});
