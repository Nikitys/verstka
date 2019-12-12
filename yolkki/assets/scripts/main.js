$(document).ready(function () {
    var mainCarousel = $('.main').slick({
        infinite: true,
        dots: true,
        arrows: false
    });
    // карусели
    var carouselScreen2 = $('.screen2-main--slider').slick({
        infinite: true,
        draggable: false
    });

    var carouselScreen3 = $('.screen3-main--slider').slick({
        infinite: true,
        arrows: false
    });
    $(document).on('click', '.screen3-main-item-desc-arrows__left', function (e) {
        e.preventDefault();
        carouselScreen3.slick('slickPrev');
    })
    $(document).on('click', '.screen3-main-item-desc-arrows__right', function (e) {
        e.preventDefault();
        carouselScreen3.slick('slickNext');
    })
    var carouselScreen6 = $('.screen6-main--slider').slick({
        infinite: true,
        arrows: false
    });
    $(document).on('click', '.screen6-main-item-desc-arrows__left', function (e) {
        e.preventDefault();
        carouselScreen6.slick('slickPrev');
    })
    $(document).on('click', '.screen6-main-item-desc-arrows__right', function (e) {
        e.preventDefault();
        carouselScreen6.slick('slickNext');
    })
    var carouselScreen7 = $('.screen7-main--slider').slick({
        infinite: true,
        arrows: false
    });
    $(document).on('click', '.screen7-main-item-desc-arrows__left', function (e) {
        e.preventDefault();
        carouselScreen7.slick('slickPrev');
    })
    $(document).on('click', '.screen7-main-item-desc-arrows__right', function (e) {
        e.preventDefault();
        carouselScreen7.slick('slickNext');
    })
    var carouselScreen14 = $('.screen14-main--slider').slick({
        infinite: true,
        slidesToShow: 5,
        draggable: false,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1444,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              }
            }
          ]
    });
    $(document).on('click', '.screen14-main-arr__left', function (e) {
        e.preventDefault();
        carouselScreen14.slick('slickPrev');
    })
    $(document).on('click', '.screen14-main-arr__right', function (e) {
        e.preventDefault();
        carouselScreen14.slick('slickNext');
    })
    var carouselScreen15 = $('.screen15-main--slider').slick({
        infinite: true,
        slidesToShow: 5,
        draggable: false,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1444,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2
              }
            }
          ]
    });
    // menu
    $(document).on('click', '.nav-open', function (e) {
        $('.nav').addClass('nav--active')
    })
    $(document).on('click', '.nav-close', function (e) {
        $('.nav').removeClass('nav--active')
    })
    $(document).on('click', '.nav-main a', function (e) {
        slideIndex = $(this).index();
        mainCarousel.slick('slickGoTo', parseInt(slideIndex));
        $('.nav').removeClass('nav--active')
    });
    $(document).mouseup(function (e) {
        var container = $(".nav");
        if (container.has(e.target).length === 0) {
            container.removeClass('nav--active');
        }
    });
    // pagination
    $(document).on('click', '.controls a', function (e) {
        slideIndex = $(this).index();
        mainCarousel.slick('slickGoTo', parseInt(slideIndex));
        $(this).addClass('controls-item--active');
        $(this).siblings().removeClass('controls-item--active');
    });
    // tabs
    var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function (i) {
        if (i !== 0)
            $(this).hide(0);
    });
    tabs.on('click', '.tabs-nav a', function (e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs-nav a', tabs).removeClass('screen5-top-list__item--active');
        $(this).addClass('screen5-top-list__item--active');
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });

    var tabs1 = $('#tabs1');
    $('.tabs-content > div', tabs1).each(function (i) {
        if (i !== 0)
            $(this).hide(0);
    });
    tabs1.on('click', '.tabs-nav a', function (e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs-nav a', tabs1).removeClass('screen5-top-list__item--active');
        $(this).addClass('screen5-top-list__item--active');
        $('.tabs-content > div', tabs1).hide(0);
        $(tabId).show();
    });

    var tabs2 = $('#tabs2');
    $('.tabs-content > div', tabs2).each(function (i) {
        if (i !== 0)
            $(this).hide(0);
    });
    tabs2.on('click', '.tabs-nav a', function (e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs-nav a', tabs2).removeClass('screen12-main-top-left-link--active');
        $(this).addClass('screen12-main-top-left-link--active');
        $('.tabs-content > div', tabs2).hide(0);
        $(tabId).show();
    });
    $('[data-fancybox]').fancybox({});
    $(document).on('click', '.popup__close', function (e) {
        e.preventDefault();
        $.fancybox.close();
    })

    // документы
     $(document).on('click', '.screen16-main-item-top', function(){
        $(this).siblings('.screen16-main-item-desc').slideToggle(300);
        $(this).toggleClass('screen16-main-item-top--active');
        $(this).parent().siblings().find('.screen16-main-item-desc').slideUp(300);
        $(this).parents('.screen16-main-block').siblings().find('.screen16-main-item-desc').slideUp(300);
        $(this).parent().siblings().find('.screen16-main-item-top').removeClass('screen16-main-item-top--active');
        $(this).parents('.screen16-main-block').siblings().find('.screen16-main-item-top').removeClass('screen16-main-item-top--active');
     });

     $(function() {  
        // $(".screen9-main-list-item").niceScroll({
        //     cursorcolor: "#4A90E2"
        // });
    });
    

    // var price = $('#price').val(),
    //     firstMoney = $('#vsnos').val(),
    //     time = $('#time').val(),
    //     pS = 0.1035/12,
    //     sK = price - firstMoney,
    //     kP = time * 12,
    //     totalPriceAll = 0;

    // totalPriceAll = sK * (pS +(pS / (Math.pow((1+pS),kP) - 1)));
    // console.log(totalPriceAll);
    // $('.popup3-top-item').

    // var pS = 0.1035/12,
    // sK = this.price - this.firstMoney,
    // kP = this.time * 12,
    // totalPriceAll = 0;

    // totalPriceAll = sK * (pS +(pS / (Math.pow((1+pS),kP) - 1)));
    // return (Math.round(totalPriceAll))+" ₽";
    ymaps.ready(init);
    function init(){ 
        myMap = new ymaps.Map("screen5-infra-map", {
            center: [60.1285,30.3360],
            zoom: 11
        }); 
        myPlacemark = new ymaps.Placemark([60.1285,30.3360], {
            hintContent: 'Москва!',
            preset: 'islands#redGlyphIcon',
            balloonContent: 'Столица России',
            iconGlyph: 'run',
            iconGlyphColor: 'red'
        });
        
        myMap.geoObjects.add(myPlacemark);
    }
    var hint = $('.screen5-tooltip');
    $('.infra_label').on({
        mouseenter: function(){
            var tool = $(this).attr('data-labelname');
            hint.text(tool).show();
        },
        mouseleave: function(){
            hint.hide();
        },
        mousemove: function(e){
            hint.css({top: e.pageY - 80, left: e.pageX - 110});
        }
    });
});

$(window).on('load', function () {
    var $preloader = $('.preloader'),
        $spinner   = $preloader.find('.preloader-img');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    
});