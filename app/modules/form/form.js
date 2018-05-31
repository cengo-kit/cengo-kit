CNG.module({
  name: 'form',
  ieVersion: null,
  $el: $('form').not('.no-validation'),
  container: window,
  fn: function () {
    const GRECAPTCHA_SECRET_KEY = "6Lc6IAMTAAAAAHZEKw6hTGPhpDDlABLWu2_b_rKM";
    this.methods();

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

      $(item).validate({
        rules: {
          'email': {
            required: true,
            validEmail: true
          },
          filemust: {
            required: true,
            filemust: true
          },
          phone: {
            required: true,
            phone: true
          },
          onlyletter: {
            required: true,
            lettersonly: true
          }
        },
        submitHandler: function (form, status) {
          if (status) {
            $(window).trigger('modal-error', {title: "Gönderiliyor...", text: 'Lütfen Bekleyiniz.'});

            $(item).ajaxSubmit({
              data: $(item).serialize(),
              success: function (msg) {
                if ($(item).find('[name="Message2"]').val() === msg) {

                  $(window).trigger('modal-success', {title: "Başarılı", text: msg.toString()});
                  $(item).find('[type="text"], [type="email"], [type="tel"], textarea').val('');

                } else {
                  $(window).trigger('modal-error', {title: "Hata", text: msg.toString()})
                }
              },
              error: function (msg) {
                $(window).trigger('modal-error', {title: "Hata", text: msg.toString()});
              }
            });

            if ($(item).find('.grecaptcha, .g-recaptcha').length > 0) {
              grecaptcha.reset($(item).find('.grecaptcha, .g-recaptcha')[0])
            }
          }
        }
      });
    });
  },
  methods: function(){
    /*
    * E-posta format doğrulama
    * Bu event'in custom mesaj için önce 'data-rule-email="true"' yapılmalı.
    * Custom mesaj 'data-msg-email="Custom message"' şeklinde tanımlanabilir.
    */
    $.validator.addMethod("validEmail", function(value, element){
      let pattern = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);

      return pattern.test(value);
    }, "Geçerli bir e-posta adresi yazınız.");

    /*
    * Telefon format doğrulama
    * Bu event'in custom mesaj için önce 'data-rule-phone="true"' yapılmalı.
    * Custom mesaj 'data-msg-phone="Custom message"' şeklinde tanımlanabilir.
    */
    $.validator.addMethod("phone", function(value, element){
      return this.optional(element) || /[0-9\-\(\)\s]+/.test(value);
    }, "Telefon formatı geçersiz");

    /*
    * File input için custom kontrol
    * Bu event'in custom mesaj için önce 'data-rule-filemust="true"' yapılmalı.
    * Custom mesaj 'data-msg-filemust="Custom message"' şeklinde tanımlanabilir.
    */
    $.validator.addMethod("filemust", function(value, element){
      let string_ext, requiredExtList, splitValue, filename, splitFileName, extension;

      // input'a tanımlanmış uzantı listesi. Örn: data-ext="doc|docx|pdf"
      string_ext = $(element).attr('data-ext') || "doc|docx|pdf";

      // Tanımlanmış uzantı listesi array'a çevrilir.
      requiredExtList = (string_ext != undefined && string_ext != null ? string_ext.split('\|') : []);

      // Input'tan gelen dosya yolu, dosya adını almak için split edilir.
      splitValue = value.toString().split("\\");

      // Dosya yolu, dosya adını almak için split edilir.
      filename = splitValue[ splitValue.length - 1 ];

      // Dosya adı, dosya uzantısını almak için split edilir.
      splitFileName = filename.split(".");

      // Dosya uzantısı alınıyor
      extension = splitFileName[ splitFileName.length - 1 ];

      // Seçilen dosyanın uzantısı, uzantı listesinde varsa doğrulama işlemi tamamlanır.
      return $.inArray( extension, requiredExtList ) > -1;
    }, "Geçersiz dosya türü" );

    /*
    * Ã„Â°nputlar için yalnızca harf kontrolü
    * Bu event'in custom mesaj için önce 'data-rule-lettersonly="true"' yapılmalı.
    * Custom mesaj 'data-msg-lettersonly="Custom message"' şeklinde tanımlanabilir.
    */
    $.validator.addMethod("lettersonly", function(value, element) {
      return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Rakam girilemez. Sadece harf olmalı.");
  }
});