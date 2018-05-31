'use strict';

CNG.module({
  name: 'header',
  ieVersion: null,
  $el: $('.header'),
  container: '.header',
  fn: function () {

    // --- Variables
    const $this = this.$el;
    let $menuButton = $this.find('.header-left .menu');
    let $menuButtonText = $this.find('.header-left .menu .text');
    let $menu = $this.find('.header-menu');
    let $menuCategories = $menu.find('.header-menu-categories');
    let $menuBackButton = $menu.find('.header-menu-categories .subPage-back');
    // -- Variables End

    // --- Run
    if ($this.hasClass('header-black')) {
      $('body').addClass('subpage');
    } else {
      $('body').removeClass('subpage');
    }

    $menuCategories.find('> ul > li').each((index, item) => {
      if($(item).find('.subPage').length > 0) {
        $(item).addClass('hasSubPage');
        $(item).find('a').attr('href', 'javascript:;');
      }
    });

    resizeController();
    $(window).on('resize', resizeController);
    // --- Run End

    // --- Functions
    function resizeController() {
      let windowH = $(window).height();

      $(window).on('scroll', function () {
        // subpage degilse ve menu acik degilse
        if(!$('body').hasClass('subpage') && !$menuButton.hasClass('active')) {
          if ($('html, body').scrollTop() + $this.outerHeight() > windowH) {
            $this.addClass('header-black');
          } else {
            $this.removeClass('header-black');
          }
        }
      });
    } // -- Resize Function End!
    // --- Functions End

    // --- Events
    $menuButton.on('click', function () { // menu acildiginda
      let _this = $(this);

      if(_this.hasClass('active')) {
        _this.removeClass('active');
        $menuButtonText.text('MENU');
        $this.removeClass('header-black');
        $('body').removeClass('lock');
        $menu.removeClass('active');
      } else {
        _this.addClass('active');
        $menuButtonText.text('KAPAT');
        $this.addClass('header-black');
        $('body').addClass('lock');
        $menu.addClass('active');
      }
    });

    $menuCategories.find('> ul > li > a').on('click', function () { // menu subpage
      let _this = $(this);
      if(_this.parent().hasClass('hasSubPage')) {
        _this.parent().addClass('active');
        _this.next().addClass('active');
      }
    });

    $menuBackButton.on('click', function () { // menu geri butonu
      $(this).parent().removeClass('active');
      $menuCategories.find('li').removeClass('active');
    });
    // --- Events End

  }
});
