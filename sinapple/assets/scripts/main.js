
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function update_carousel(limiter){
    if (limiter === undefined){
        limiter = $(document)
    }
    limiter.find('[data-slider]').each(function () {
        if ($(this).data('slider') !== ''){
            $(this).slick('unslick');
        }
        if ($(this).is(':visible')){
            var sliderOptions = $(this).attr('data-slider-options');
            var sliderOptionsObj = isJson(sliderOptions) ? JSON.parse(sliderOptions) : {};
            var slider = $(this).slick(sliderOptionsObj);
            var parentSlider = $(this).parent(),
                sliderPrev = parentSlider.find('[data-slider-prev]'),
                sliderNext = parentSlider.find('[data-slider-next]');
            sliderPrev.on('click',function (e) {
                e.preventDefault();
                slider.slick('slickPrev');
            });
            sliderNext.on('click',function (e) {
                e.preventDefault();
                slider.slick('slickNext');
            });
            $(this).data('slider', slider);
        }
    });
}
update_carousel();

function update_all(limiter) {
    if (limiter === undefined){
        limiter = $(document)
    }
    update_carousels(limiter);
}
update_all();
function update_carousels(limiter){
    if (limiter === undefined){
        limiter = $(document)
    }
    limiter.find('.item-slider').each(function() {
        if (this.dataset.carousel === undefined){
            this.setAttribute('data-carousel', Math.floor(Math.random() * 100000000));

            var slickTop = $(this).find('.item-slider-right').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '[data-carousel=' + this.dataset.carousel + '] .item-slider-left'
            });
            $(this).data('slickTop', slickTop);
            var slickBot = $(this).find('.item-slider-left').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: true,
                arrows:false,
                verticalSwiping:true,
                asNavFor: '[data-carousel=' + this.dataset.carousel + '] .item-slider-right',
                dots: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }
                ]
            });
            $(this).data('slickBot', slickBot);
        } else {
            console.log($(this).data('slickTop'), $(this).data('slickBot'))
        }
    });
}
function tabsMain() {
   $(document).on('click', '[data-tab-link]:not(.active)', function() {
       $(this)
           .addClass('active').siblings().removeClass('active')
           .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
       if ($(this).parents('.tabs').find('.tabs-top-mob__title').length !== 0){
           var title = $(this).text();
           $(this).parents('.tabs').find('.tabs-top-mob__title').text(title);
           $(this).parents('.tabs').find('.tabs-top-mob').toggleClass('active');
           // $(this).parents('.tabs').find('.tabs-top-mob-bot').slideToggle();
           if ($('.tabs-top-mob').hasClass('active')){

           }
       } else {
           console.log('asd');
       }

   });
}


function marginForAbsolute(){
    if ($('.container-margin').length !== 0){
        var marginLeftContainer = $('.container-margin').offset().left;
        $('.index-slider .slick-dots').css('left',marginLeftContainer);
        $(window).on('resize', function () {
            var marginLeftContainer = $('.container-margin').offset().left;
            $('.index-slider .slick-dots').css('left',marginLeftContainer);
        });
    }
}
$(document).ready(function(){

    $('.index-slider-main').mousemove(function(e){
        var pos = $(this).offset();
        var elem_left = pos.left;
        var Xinner = e.pageX - elem_left;
        if (Xinner > $(window).width()/2){
            $(this).removeClass('left')
            $(this).addClass('right');
        } else {
            $(this).removeClass('right')
            $(this).addClass('left');
        }
    });
    $(document).on('click', '.index-slider-main', function () {
        if($(this).hasClass('left')){
            $('.index-slider').slick('slickPrev');
        } else {
            $('.index-slider').slick('slickNext');
        }
    });
    $(document).on('mouseover', '.cat-item', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $(document).on('click', '.header-left-mob', function () {
        $('.nav-mob').toggleClass('active');
        return false;
    });
    $(document).on('click', '.nav-mob-close', function () {
        $('.nav-mob').removeClass('active');
        return false;
    });
    $(document).on('click', '.tabs-top-mob', function () {
        $(this).toggleClass('active');
        $(this).siblings('.tabs-top-mob-bot').slideToggle();
        return false;
    });
    $(document).on('click', '[data-but]', function () {
       var link = $(this).attr('data-but');
        $(document).find('.'+link).addClass('active');
       console.log();
    });
    $(document).on('click', '.catalog-fltr-top__img', function () {
        console.log('asd');
       $(this).parents('.active').removeClass('active')
    });
    $(document).on('click', '.header-left-phone--mob', function () {
       $('.header-bot').slideToggle();
       return false;
    });
    //LK
    $(document).on('click', '.history-top-left-button', function () {
       $(this).toggleClass('active');
       $(this).parents('.history-item').find('.history-main').slideToggle();
       $(this).parents('.history-item').find('.history-top-right__col').toggleClass('no-active');
       return false;
    });
    $(document).on('click','.nav-item__arrow', function () {

       // var itemsSiblings = $(this).parents('.nav-item-block').siblings('.nav-item-block');
       // itemsSiblings.each(function(){
       //     $(this).find('.nav-item-wrap').slideUp();
       // });
       $(this).parents('.nav-item-block').find('.nav-item-wrap').slideToggle();
       $(this).toggleClass('active');
       return false;
    });
    sliderPrices();
    marginForAbsolute();
    accordeon();
    tabsMain();
    plusMinus();
    dropdownMenuWidthStart();
    dropdownMenuWidthResize();

});
function sliderPrices() {
    if (document.querySelector('.catalog-fltr-slider-main') !== null){
        var keypressSlider = document.querySelector('.catalog-fltr-slider-main');
        var input0 = document.querySelector('.catalog-fltr-slider__input--ot');
        var input1 = document.querySelector('.catalog-fltr-slider__input--do');
        var inputs = [input0, input1];

        noUiSlider.create(keypressSlider, {
            start: [300, 4500],
            connect: true,
            direction: 'ltr',
            tooltips: [false, wNumb({ decimals: 1 })],
            range: {
                'min': [30],
                'max': 15550
            }
        });

        keypressSlider.noUiSlider.on('update', function( values, handle ) {
            inputs[handle].value = values[handle];
        });
    }
}
function accordeon(){
    $(document).on('click', '.acc__but', function () {
        $(this).toggleClass('toggled');
        $(this).parents('[data-accordeon-item]').find('.acc__bot').slideToggle();
    })
}

function plusMinus() {
    $(document).on('click', '.plus-minus__plus', function () {
        var input = $(this).parents('.plus-minus').find('input'),
            inputValue = input.val();
        inputValue++;
        input.val(inputValue);
    });
    $(document).on('click', '.plus-minus__minus', function () {
        var input = $(this).parents('.plus-minus').find('input'),
            inputValue = input.val();
        if (inputValue <= 0){
        } else {
            inputValue--;
            input.val(inputValue);
        }
    });
}
// выпадающее меню
function dropdownMenuWidthResize(){
    var navBlocks = $('.nav-item-wrap');
    $(window).on('resize', function (e) {
        var leftPart = Math.round(($(window).width() - $('.container').width())/2);
        if($(window).width() > 1200){
            navBlocks.each(function () {
                $(this).css("left", -leftPart);
            });
        }
        navBlocks.each(function () {
           $(this).css("width",$(window).width());
            $(this).css("left", -leftPart);
        });
    });
}
function dropdownMenuWidthStart(){
    var navBlocks = $('.nav-item-wrap');
    var leftPart = Math.round(($(window).width() - $('.container').width())/2);
    if($(window).width() > 1200){
        navBlocks.each(function () {
            $(this).css("left", -leftPart);
        });
    }
    console.log('Start')
    navBlocks.each(function () {
        $(this).css("width",$(window).width());
        $(this).css("left", -leftPart);
    });
}
