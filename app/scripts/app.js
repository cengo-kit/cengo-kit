'use strict';
var Gri = {
  // Runtime da tum moduller buraya atanir.
  modules: [],
  _module: null,
  valid: true,
  _debug: Cookies.get('debug')
};

/*
 Module icin ie kontrolu yapar.
 */
Gri.checkIEVersion = function () {
  var _moduleIeVersion = this._module.ieVersion;
  var moduleIeVersion = Number(ieV.replace('<', '').replace('>', ''));
  var uA = navigator.userAgent;
  var ieVersion = null;

  if (uA.indexOf('MSIE 6') >= 0) {
    ieVersion = 6;
  }
  if (uA.indexOf('MSIE 7') >= 0) {
    ieVersion = 7;
  }
  if (document.documentMode) { // as of IE8
    ieVersion = document.documentMode;
  }


  //Ie versiyon kontrolu yapilmis mi kontrolu
  if (is.string(_moduleIeVersion)) {
    this._module.ieVersion = null;
  }

  //Versiyon buyukse degilse valid keyini false eder
  if (!(ieV.indexOf('>') && moduleIeVersion > ieVersion)) {
    this.valid = false
  }

  //Versiyon kucukse degilse valid keyini false eder
  if (!(ieV.indexOf('<') && moduleIeVersion < ieVersion)) {
    this.valid = false
  }

  //Versiyon esit degilse valid keyini false eder
  if (!(ieV.indexOf('=') && moduleIeVersion == ieVersion)) {
    this.valid = false
  }


  return this;
};

/*
 Module icin event atamasi yapar.
 */
Gri.setEvent = function () {
  var $el = this._module.$el;
  var container = this._module.container;
  var state = this._module.state;
  var fn = this._module.fn;

  //State atanmis ise event olarak tanimliyoruz.
  if (is.string(state)) {
    if (is.string(container)) {
      $(container).on(state, fn);
    } else {
      $($el).on(state, fn);
    }
  }
  return this;
};

/*
 Debug modu kontrolu yapar.
 */
Gri.debug = function (parameter) {
  if (is.boolean(parameter)) {
    this._debug = parameter;
    Cookies.set('debug', parameter);
  } else {
    return this._debug;
  }
  if(is.string(parameter)){
    console.log(parameter);
  }
};

/*
 Runtimeda tum moduller bu methodu calistirir
 */
Gri.module = function (module) {
  this.modules.push(module);
};

/*
 Framework icin baslatici fonksiyondur.
 */
Gri.init = function () {
  var gri = this;
  //Tum modulleri document ready de calistirir.
  $.each(this.modules, function (index, module) {
    this._module = module;
    Gri.debug('Modul %c' + name + '%c baslatiliyor.');
    //Gerekli oncelik siralariyla filitreleri calistiyoruz.
    gri.checkIEVersion()
      .setEvent()
      .run();

  });
};

/*
 Modulu calistirir.
 */
Gri.run = function () {
  var name = this._module.name;
  var fn = this._module.fn;
  fn();

  if (this.debug()) {
    Gri.debug('Modul %c' + name + '%c yuklendi.');
  }

  return this;
};

/*
 Document ready de moduller baslatilir.
 */
$(Gri.init);
