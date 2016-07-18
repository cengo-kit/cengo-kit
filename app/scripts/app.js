'use strict';
var Gri = {
  // Runtime da tum moduller buraya atanir.
  modules: [],
  _module: null,
  valid: true,
  _debug: eval(Cookies.get('debug')),
  time:console.time('document load time')
};
var V = {

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
    if (is.string(container) || is.object(container)) {
      $(container).bind(state, fn.bind(this._module));
    } else {
      $($el).bind(state, fn.bind(this._module));
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
  var moduleSize = this.modules.length;
  for(var i = moduleSize; i > -1;i--){
    //Set _module
    this._module = this.modules[0];

    //Element sayfada yoksa modul run edilmez

    //Gerekli oncelik siralariyla filitreleri calistiyoruz.
    if(this.checkIEVersion().chain() && this._module.$el.length != 0){
      this.debug('%cModul %c' + this._module.name + ' %cBaslatildi');
      this.setEvent()
        .run();
    }

    //Gerekli islemlerden gecen 0'inci modulu siliyoruz
    delete this.modules[0];

    //Clone array witouth undefined
    var tmpArr = [];
    for(var x = 0; x < this.modules.length; x++){
      if(!is.undefined(this.modules[x]) && !is.null(this.modules[x])){
        tmpArr.push(this.modules[x]);
      }
    }
    this.modules = tmpArr;
    //Re-set loop size
    moduleSize = this.modules.length;
  }

  //Remove modules to prevent global injection
  delete this.modules;
  if(eval(Cookies.get('debug'))){console.timeEnd('document load time');}
};

/*
 Modulu calistirir.
 */
Gri.run = function () {
  var name = this._module.name;
  var fn = this._module.fn;
  var state = this._module.state;


  if (!is.string(state) || state.indexOf('ready') > -1) {
    fn.call(this._module);
  }

  if (this.debug()) {
    Gri.debug('%cModul %c' + name + ' %c yuklendi.');
  }

  return this;
};

/*
 Birbirine bagli modulleri zincirler
 */
Gri.chain = function(){
  var bool = false;
  //Check if module has chains

  if(!is.string(this._module.chain) || this._module.chain == ''){
    return this;
  }

  var chains = this._module.chain.split(',');
  //Loop chains
  for( var i  in chains){
    //if they exist in queue break and add this module on tail
    if(_.where(this.modules, {'name': chains[i]}).length != 0){
      this.modules.push(this._module);
      bool = true;
      break;
    }
  }
  return bool;
};

/*
 Modullerin yuklenmesini bekler
 */
Gri.moduleQueueChecker = function(){
  var gri = this;
  clearTimeout(this._moduleQueueChecker);
  this._moduleQueueChecker = setTimeout(function(){
    gri.init();
  },1);
};

Gri.debug('%c Gri Cengo Kit %c v0.2%c');
