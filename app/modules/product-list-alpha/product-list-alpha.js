'use strict';

CNG.module({
  name: 'product-list-alpha',
  ieVersion: null,
  $el: $('.product-list-alpha'),
  container: '.product-list-alpha',
  fn: function () {

    const $this = this.$el;
    let $productType = $this.find('.product-list-alpha-item');
    let $productContent = $this.find('.product-list-alpha-content');
    let $productContentInner = $this.find('.product-list-alpha-content-inner');

    $productContentInner.owlCarousel({
      items: 2,
      loop: false,
      margin: 30,
      responsive: {
        600: {
          items: 3
        }
      }
    });

    $productType.find('a').on('click', function () {
      let _this = $(this);
      $productType.find('li').removeClass('active');
      _this.parent().addClass('active');
      let dataTypeName = _this.data('type');
      $productContentInner.removeClass('active');
      $this.find('.'+ dataTypeName).addClass('active');
    });

  }
});
