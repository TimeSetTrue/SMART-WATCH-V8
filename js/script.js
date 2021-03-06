




    //Валидация и отправка формы

    $(document).ready(function() {
        $('[data-submit]').on('click', function(e) {
            e.preventDefault();
            $(this).parent('form').submit();
        })
        $.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                var re = new RegExp(regexp);
                return this.optional(element) || re.test(value);
            },
            "Please check your input."
        );
    
        // Функция валидации и вывода сообщений
        function valEl(el) {
    
            el.validate({
                rules: {
                    tel: {
                        required: true,
                        regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                    },
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    tel: {
                        required: 'Поле обязательно для заполнения',
                        regex: 'Телефон может содержать символы + - ()'
                    },
                    name: {
                        required: 'Поле обязательно для заполнения',
                    },
                    email: {
                        required: 'Поле обязательно для заполнения',
                        email: 'Неверный формат E-mail'
                    }
                },
    
                // Начинаем проверку id="" формы
                submitHandler: function(form) {
                    $('#loader').fadeIn();
                    var $form = $(form);
                    var $formId = $(form).attr('id');
                    switch ($formId) {
                        // Если у формы id="goToNewPage" - делаем:
                        case 'goToNewPage':
                            $.ajax({
                                    type: 'POST',
                                    url: $form.attr('action'),
                                    data: $form.serialize(),
                                })
                                .always(function(response) {
                                    //ссылка на страницу "спасибо" - редирект
                                    
                                    //отправка целей в Я.Метрику и Google Analytics
                                    ga('send', 'event', 'masterklass7', 'register');
                                    yaCounter27714603.reachGoal('lm17lead');
                                });
                            break;
                        // Если у формы id="popupResult" - делаем:
                        case 'popupResult':
                            $.ajax({
                                    type: 'POST',
                                    url: $form.attr('action'),
                                    data: $form.serialize(),
                                })
                                .always(function(response) {
                                    setTimeout(function() {
                                        $('#loader').fadeOut();
                                    }, 800);
                                    setTimeout(function() {
                                        $('#overlay').fadeIn();
                                        $form.trigger('reset');
                                        //строки для остлеживания целей в Я.Метрике и Google Analytics
                                    }, 1100);
                                    $('#overlay').on('click', function(e) {
                                        $(this).fadeOut();
                                    });
    
                                });
                            break;
                    }
                    return false;
                }
            })
        }
    
        // Запускаем механизм валидации форм, если у них есть класс .js-form
        $('.js-form').each(function() {
            valEl($(this));
        });
        
    });













function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });


    $(document).ready(function(){
        $("#scroll").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1700);
        });
    });








