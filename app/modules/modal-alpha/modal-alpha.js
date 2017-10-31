CNG.module({
  name: 'modal-alpha',
  ieVersion: null,
  $el: $('.modal-alpha'),
  container: '.modal-alpha',
  fn: function () {

    $('.modal-alpha .icon-close').on('click',function () {
      $('.modal-alpha').modal('hide');
    });

    $(window).on('modal-success', function (event, data) {
      var $html = $($('[tpl="modal-success"]').clone().removeAttr("tpl")).clone();
      $('.modal-alpha .modal-content').html($html);
      if(data){
        $('.modal-alpha .modal-content .text').text(data.text);
        $('.modal-alpha .modal-content .title').text(data.title);
      }
      $('.modal-alpha').modal('show')
    });

    $(window).on('modal-warning', function (event, data) {
      var $html = $($('[tpl="modal-warning"]').clone().removeAttr("tpl")).clone();
      $('.modal-alpha .modal-content').html($html);
      if(data){
        $('.modal-alpha .modal-content .text').text(data.text);
        $('.modal-alpha .modal-content .title').text(data.title);
      }
      $('.modal-alpha').modal('show')
    });

    $(window).on('modal-error', function (event, data) {
      var $html = $($('[tpl="modal-error"]').clone().removeAttr("tpl")).clone();
      $('.modal-alpha .modal-content').html($html);
      if(data){
        $('.modal-alpha .modal-content .text').text(data.text);
        $('.modal-alpha .modal-content .title').text(data.title);
      }
      $('.modal-alpha').modal('show')
    });


    $(window).on('modal-prompt', function (event, data) {
      var $html = $($('[tpl="modal-prompt"]').clone().removeAttr("tpl")).clone();
      $('.modal-alpha .modal-content').html($html);
      if(data){
        $('.modal-alpha .modal-content .text').text(data.text);
        $('.modal-alpha .modal-content .title').text(data.title);
      }
      $('.modal-alpha').modal('show')
    });

    // $(window).trigger('modal-warning',{title:"Hata",text:"Merhaba"})

  }
});
