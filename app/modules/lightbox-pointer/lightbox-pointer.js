'use strict';

Gri.module({
  name: 'lightbox-pointer',
  ieVersion: null,
  $el: $('.lightbox-pointer'),
  container: '.lightbox-pointer',
  fn: function () {

    $(window).on('lightbox', function (event, data) {

      var status = data.status;

      if ( !($('.lightbox-container').length > 0) ) {
        var offSetLeftPercentage = $('.lightbox-pointer').offset().left / $(window).width() * 100;
        var text = data.text;

        if(status == 1){
          status = "tick";
        }
        if(status == 2){
          status = "close";
        }
        var htmlContainer = `<div class="lightbox-container"> <div class="lightbox-container-inner"> <div class="lightbox-container-inner-box"><div class="icon-container"> <div class="icon-${status}"></div> </div> <div class="text-container"> <span>${text}</span> </div></div> </div> </div>`;
        console.log($(htmlContainer));
        var cDump = $(htmlContainer).css('left',offSetLeftPercentage + "%").css('width',offSetLeftPercentage + "%").hide();
        if(offSetLeftPercentage == 0){
          cDump.css('width',"100%").hide();
        }
        $('body').prepend(cDump);
        $('.lightbox-container').fadeIn();

      }

      if(status == 0){
        $('.lightbox-container').fadeOut()
      }


      $('.lightbox-container').on('click',function(){
        $('.lightbox-container').fadeOut()
        setTimeout(function(){
          $('.lightbox-container').remove();
        },1000)
      });



    });



  }
});
