'use strict';

CNG.module({
  name: 'utils',
  ieVersion: null,
  $el: $('[c-helper]'),
  container: window,
  fn: function () {

    var helpersFn = this.helpers;

    this.$el.each(function (index, item) {
      var helpers = $(item).attr('c-helper').split(';');
      $.each(helpers,function (_index,_item) {
        var keyValue = _item.split(':');
        var key = keyValue[0];
        var value = keyValue[1];
        helpersFn(key,value,item);
      });
    });
  },
  helpers:function (key, value, element) {

    value = eval(value);
    //Margins
    if(key == "mrT"){
      $(element).css('margin-top',value);
    }
    if(key == "mrB"){
      $(element).css('margin-bottom',value);
    }
    if(key == "mrL"){
      $(element).css('margin-left',value);
    }
    if(key == "mrR"){
      $(element).css('margin-right',value);
    }

    //Paddings
    if(key == "pdT"){
      $(element).css('padding-top',value);
    }
    if(key == "pdB"){
      $(element).css('padding-bottom',value);
    }
    if(key == "pdL"){
      $(element).css('padding-left',value);
    }
    if(key == "pdR"){
      $(element).css('padding-right',value);
    }

  }
});
