'use strict';
var Gri = {
  // Runtime da tum moduller buraya atanir.
  modules: [],
  _module: null,
  valid: true,
  _debug: eval(Cookies.get('debug')),
  time:console.time("document load time")
};

/*
 Module icin ie kontrolu yapar.
 */
Gri.checkIEVersion = function () {
  if(is.null(this._module.ieVersion) || is.undefined(this._module.ieVersion)){
    return this;
  }
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
  } else if(is.string(parameter) && this._debug){
    console.log(parameter, 'background: #222; color: #bada55','background: #222; color: #FFF', 'background: #222; color: #bada55');
  }else{
    return this._debug;
  }
};

/*
 Runtimeda tum moduller bu methodu calistirir
 */
Gri.module = function (module) {
  this.modules.push(module);
  this.moduleQueueChecker()
};

/*
 Framework icin baslatici fonksiyondur.
 */
Gri.init = function () {
  var gri = this;
  //Tum modulleri document ready de calistirir.
  $.each(this.modules, function (index, module) {
    gri._module = module;
    Gri.debug('%cModul %c' + module.name + ' %cBaslatildi');
    //Gerekli oncelik siralariyla filitreleri calistiyoruz.
    gri.checkIEVersion()
      .setEvent()
      .run();
  });
  //Remove modules to prevent global injection
  delete this.modules;
  if(eval(Cookies.get('debug'))){console.timeEnd("document load time");}
};

/*
 Modulu calistirir.
 */
Gri.run = function () {
  var name = this._module.name;
  var fn = this._module.fn;
  var state = this._module.state;
  if (!is.string(state)) {
    fn.call(this._module);
  }

  if (this.debug()) {
    Gri.debug('%cModul %c' + name + ' %c yuklendi.');
  }

  return this;
};

Gri.moduleQueueChecker = function(){
  var gri = this;
  clearTimeout(this._moduleQueueChecker);
  this._moduleQueueChecker = setTimeout(function(){
    gri.init();
  },1);
};

Gri.debug("%c Gri Cengo Kit %c v0.1%c");
