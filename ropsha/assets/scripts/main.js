$(document).ready(function () {

    $(document).on('click', '.menu--mob', function (e) {
        $('.menu-desc').slideToggle();
        $(this).find('.hamburger').toggleClass('is-active');
        e.preventDefault();
    })
    $('.gal-main-top').slick({
        infinite: true,
        asNavFor: '.gal-main-bot',
        fade: true,
        draggable:false
    });
    $('.gal-main-bot').slick({
        infinite: true,
        slidesToShow: 10,
        asNavFor: '.gal-main-top',
        focusOnSelect: true,
        draggable:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 10
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 5
                }
            }
        ]
    });
    $('.popup-main-form__input--phone').mask('+7(000)000-0000');


    // ползунки
    function count_payment(){
        var price = parseInt($('#page-uch-bot-right-item-block-input1').attr('data-max')),
            payment_string = $('#page-uch-bot-right-item-block-input1').val(),
            period_string = $('#page-uch-bot-right-item-block-input2').val(),
            payment = parseInt(payment_string.replace(/\D/g, '')),
            period = parseInt(period_string.replace(/\D/g, '')),
            per_month = parseInt((price - payment)/period),
            per_day = parseInt(per_month/31);

        // var data = JSON.parse($('.reservation-info').attr('data-formdata'));
        //
        // data.payment = payment;
        // data.period = period;
        // data.per_month = per_month;

        // $('.reservation-info').attr('data-formdata', JSON.stringify(data));

        $('.pay-per-month').html(per_month.toLocaleString('ru'));
        $('.pay-per-day').html(per_day.toLocaleString('ru'));
    }
    var sliderFormat = document.getElementById('page-uch-bot-right-item-block-slide1'),
        inputFormat = document.getElementById('page-uch-bot-right-item-block-input1'),
        sliderFormat1 = document.getElementById('page-uch-bot-right-item-block-slide2'),
        inputFormat1 = document.getElementById('page-uch-bot-right-item-block-input2');

    var max_price = parseInt($('#page-uch-bot-right-item-block-input1').attr('data-max')),
        min_price = parseInt($('#page-uch-bot-right-item-block-input1').attr('data-min'));

    noUiSlider.create(sliderFormat, {
        start: [ max_price/2 ],
        step: 1000,
        range: {
            'min': [ min_price ],
            'max': [ max_price ],
        },
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            postfix: ' руб.',
        })
    });

    sliderFormat.noUiSlider.on('update', function( values, handle ) {
        inputFormat.value = values[handle];
        count_payment();
    });

    inputFormat.addEventListener('change', function(){
        sliderFormat.noUiSlider.set(this.value);
    });

    noUiSlider.create(sliderFormat1, {
        start: [ 12 ],
        step: 1,
        range: {
            'min': [ 1 ],
            'max': [ 12 ]
        },
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            postfix: ' месяцев',
        })
    });

    sliderFormat1.noUiSlider.on('update', function( values, handle ) {
        inputFormat1.value = values[handle];
        count_payment();
    });

    inputFormat1.addEventListener('change', function(){
        sliderFormat1.noUiSlider.set(this.value);
    });

});