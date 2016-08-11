Gri Cengo Kit
===================


Baslangic
-------------

    git clone https://github.com/gricreative/gri-cengo-kit project-name
    npm install
    bower install
  
Taskler
-------------

  Projeyi development olarak ayaga kaldirir ve tarayicinizda acar.

    gulp serve

   Projeyi production olarak ayaga kaldirir ve tarayicinizda acar.

    gulp serve:dist
    
  Projeyi development olarak ayaga kaldirir ve tarayicinizda acar.

    gulp serve

  Proje assetlerini cms pathine otomatik atar.

    gulp serve:cms

  
Generatorlar
-------------

  Projeniz icin otomatik modul olusturur. Jade, scss ve js dosyalarini klasorde barindirir.

    gulp cengo -m modul-ismi
    
  Projeniz icin otomatik gerekli sablonda sayfa (jade) dosyasi olusturur.

    gulp cengo -p sayfa-ismi


Javascript Mimarisi
-------------
####name
Modulun ismini belirtir

    name: 'navigasyon modulu'

####ieVersion
Internet explorer versiyonuna gore modulu calistirma kontrolu yapar. 

    ieVersion: '>9' veya  ieVersion: '<10' veya ieVersion: '9'

####$el
Modul icin atanmis elementtir. Sayfa yer aliyorsa  element modul calismaktadir yoksa modul yuklenmez.

    $el:$('form')

####state
Modulu state atar. Ve bu state te calismasini saglar.

    state:'load resize ready' -> Burada 3 tane state bu modul calisacaktir.

####container
Modulun state'inin atilmasi gereken elementi belirtir. container atanmamis ise $el elementine state atanacaktir.

    container:'.homepage-container'



