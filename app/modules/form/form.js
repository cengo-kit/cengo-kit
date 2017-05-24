Gri.module({
  name: 'form',
  ieVersion: null,
  $el: $('form'),
  container: window,
  state:'load',
  fn: function () {
    //Defaults
    var GRECAPTCHA_SECRET_KEY = "6Lc6IAMTAAAAAHZEKw6hTGPhpDDlABLWu2_b_rKM";
    $.validationEngineLanguage.allRules["tcNo"] = {
      // UK zip codes
      "func": function(field, rules, i, options){
        var value = field.val();
        var isEleven = /^[0-9]{11}$/.test(value);
        var totalX = 0;
        for (var i = 0; i < 10; i++) {
          totalX += Number(value.substr(i, 1));
        }
        var isRuleX = totalX % 10 == value.substr(10,1);
        var totalY1 = 0;
        var totalY2 = 0;
        for (var i = 0; i < 10; i+=2) {
          totalY1 += Number(value.substr(i, 1));
        }
        for (var i = 1; i < 10; i+=2) {
          totalY2 += Number(value.substr(i, 1));
        }
        var isRuleY = ((totalY1 * 7) - totalY2) % 10 == value.substr(9,0);
        return isEleven && isRuleX && isRuleY;
      },
      "alertText": "* Geçersiz TC No"
    };
    $.validationEngineLanguage.allRules["phone"] = {
      // UK zip codes
      "regex": /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
      "alertText": "* Yanlış telefon numarası"
    };
    //Mask Phone
    $('input[mask]').each(function (index, item) {
      $(item).mask($(item).attr('mask'));
    });
    //Validations
    this.$el.each(function(index,item){
      if($(item).find('.grecaptcha').length>0){
        //Set ReCaptcha
        var recaptchaEl = $(item).find('.grecaptcha').attr("data-sitekey", GRECAPTCHA_SECRET_KEY)[0];
        grecaptcha.render( recaptchaEl, {
          sitekey: GRECAPTCHA_SECRET_KEY
        });
      }
      //Check file upload
      var sendByAjax = $(item).find('input[type=file]').length > 0;
      $(item).validationEngine('attach', {
        autoHidePrompt: true,
        autoHideDelay: 3000,
        validationEventTrigger: 'submit',// Validate on Submit
        onValidationComplete: function(form, status){
          if(status) {
            if(sendByAjax){
              this.onValidationComplete = null;
              form.submit();
            }else{
              var _data = $(item).serialize();
              $.ajax({type: 'post',
                url: '/form/',
                data: _data,
                success: function (msg) {
                  if(msg == "Güvenlik kodunu kontrol ediniz."){
                    $(window).trigger('modal-error',{title:"Hata",text: msg.toString()})
                  }else{
                    $(window).trigger('modal-success',{title:"Başarılı",text: msg.toString()})
                  }
                },error: function (msg) {
                  $(window).trigger('modal-error',{title:"Hata",text: msg.toString()})
                }
              });
              grecaptcha.reset(index)
            }
          }
        }
      });
    });
  }
});
Gri.module({
  name: 'form',
  ieVersion: null,
  $el: $('form').not('.no-validation'),
  container: window,
  fn: function () {
    const GRECAPTCHA_SECRET_KEY = "6Lc6IAMTAAAAAHZEKw6hTGPhpDDlABLWu2_b_rKM";
    $.validationEngineLanguage.allRules["tcNo"] = {
      // UK zip codes
      "func": function (field, rules, i, options) {
        const value = field.val();
        const isEleven = /^[0-9]{11}$/.test(value);
        let totalX = 0;
        for (let i = 0; i < 10; i++) {
          totalX += Number(value.substr(i, 1));
        }
        const isRuleX = totalX % 10 == value.substr(10, 1);
        let totalY1 = 0;
        let totalY2 = 0;
        for (let i = 0; i < 10; i += 2) {
          totalY1 += Number(value.substr(i, 1));
        }
        for (let i = 1; i < 10; i += 2) {
          totalY2 += Number(value.substr(i, 1));
        }
        const isRuleY = ((totalY1 * 7) - totalY2) % 10 == value.substr(9, 0);
        return isEleven && isRuleX && isRuleY;
      },
      "alertText": "* Geçersiz TC No"
    };
    $.validationEngineLanguage.allRules["phone"] = {
      // UK zip codes
      "regex": /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
      "alertText": "* Yanlış telefon numarası"
    };
    $('input[mask]').each(function (index, item) {
      $(item).mask($(item).attr('mask'));
    });
    this.$el.each(function (index, item) {
      if ($(item).find('.grecaptcha').length > 0) {
        const recaptchaEl = $(item).find('.grecaptcha').attr("data-sitekey", GRECAPTCHA_SECRET_KEY)[0];
        grecaptcha.render(recaptchaEl, {
          sitekey: GRECAPTCHA_SECRET_KEY
        });
      }
      $(item).validationEngine('attach', {
        autoHidePrompt: true,
        autoHideDelay: 3000,
        validationEventTrigger: 'submit',// Validate on Submit
        onValidationComplete: function (form, status) {
          if (status) {
            $(window).trigger('modal-error', {title: "Gönderiliyor...", text: 'Lütfen Bekleyiniz.'});
            $(item).ajaxSubmit({
              success: function (msg) {
                if ($(item).find('[name="Message2"]').val() === msg) {
                  $(window).trigger('modal-success', {title: "Başarılı", text: msg.toString()})
                  $(item).find('[type="text"], [type="email"], [type="tel"], textarea').val('');
                } else {
                  $(window).trigger('modal-error', {title: "Hata", text: msg.toString()})
                }
              }, error: function (msg) {
                $(window).trigger('modal-error', {title: "Hata", text: msg.toString()})
              }
            });
            if ($(item).find('.grecaptcha, .g-recaptcha').length > 0) {
              grecaptcha.reset($(item).find('.grecaptcha, .g-recaptcha')[0])
            }
          }
        }
      });
    });
  }
});
