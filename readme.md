Cengo Kit
===================


Başlangıç
-------------

    git clone https://github.com/cengo-kit/cengo-kit project-name
    npm install && bower install
  
Taskler
-------------

  Projeyi development olarak ayağa kaldırır ve tarayıcınızda açar.

    gulp serve

  Projeyi production olarak ayağa kaldırır ve tarayıcınızda açar.

    gulp serve:dist

  Proje assetlerini cms pathine otomatik atar.

    gulp serve:cms

  
Generatorlar
-------------

  Projeniz için otomatik modül oluşturur. Jade, scss ve js dosyalarını klasörde barındırır.

    gulp cengo -m modul-ismi
  
  Modülleri çoklu oluşturmak için txt dosyasını kullanabilirsiniz.
    
    gulp cengo -ms multi-modules.txt
    
  Projeniz için otomatik gerekli şablonda sayfa (jade) dosyası oluşturur.

    gulp cengo -p sayfa-ismi


Javascript Mimarisi
-------------
#### name ####
Modülün ismini belirtir

    name: 'navigasyon modulu'

#### ieVersion ####
Internet Explorer versiyonuna göre modülü çalıştırma kontrolü yapar. 

    ieVersion: '>9' veya  ieVersion: '<10' veya ieVersion: '9'

#### $el ####
Modül için atanmış elementtir. Sayfa yer alıyorsa element modül çalışmaktadır yoksa modül yüklenmez.

    $el:$('form')

#### state ####
Modülü state atar ve bu state'te çalışmasını sağlar.

    state:'load resize ready' -> Burada 3 tane state bu modul calisacaktir.

#### container ####
Modülün state'inin atılması gereken elementi belirtir. container atanmamiş ise $el elementine state atanacaktir.

    container:'.homepage-container'

#### chain ####
Modülleri birbirlerine bağlar ve yazılan modülün önce çalışmasını bekler

    chain:'homepage-container'

Css Mimarisi
-------------

#### mixin ####
_mixins.scss dosyasının içine bourbon harici custom mixinlerinizi yazabilirisiniz.

    @mixin cover-background($img-uri) {
        background: url($img-uri) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    } 

#### _hacks ####
_hacks.scss dosyası her tarayıcıya ayrı kod yazmak için oluşturuldu.

    @include [Mixin_Name]( 'selector', (property: value) )
    Example:
    @include only_ie9( '.my_element', (color: red) )
    // ----------------------
    @include only_ff28_above( '.my_element', (
        background-color: green,
        display: flex,
        margin: 2em
    ))
    // ----------------------
    @include ie9((
      background-color: green
    ));
