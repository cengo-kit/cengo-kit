Gri.module({
  name: 'form',
  ieVersion: null,
  $el: $('form'),
  container: 'form',
  fn: function () {

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


    //Validations
    this.$el.each(function(index,item){
      $(item).validationEngine();
    })
  }
});
