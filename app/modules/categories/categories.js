'use strict';

CNG.module({
  name: 'categories',
  ieVersion: null,
  $el: $('.categories'),
  container: '.categories',
  fn: function () {

    const $this = this.$el;
    let $catBlock = $this.find('.categories-carouselClass');

    resizeController();
    $(window).on('resize', resizeController);

    function resizeController() {
      let windowW = $(window).width();

      if(windowW > 576) {
        $catBlock.owlCarousel('destroy');
        $catBlock.removeClass('owl-carousel');
      } else {
        $catBlock.addClass('owl-carousel');
        $catBlock.owlCarousel({
          margin: 15,
          responsive: {
            0: {
              items: 1
            },
            500: {
              items: 3
            }
          }
        });
      }
    }

  }
});
