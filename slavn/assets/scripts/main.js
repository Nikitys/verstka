
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

(function($) {
    $(function() {
        $('.tabs__caption').on('click', '[data-tab-link]:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);
function tabsToggle(side,target) {
    var thisActive = target.closest('div.tabs').find('div.tabs__content.active');
    var tabsContentItems = target.closest('div.tabs').find('div.tabs__content');
    var next;
    if (side === 1){
        if (thisActive.next().length == 0){
            next = $(tabsContentItems[0]);
        } else {
            next = thisActive.next();
        }
        thisActive.removeClass('active');
        next.addClass('active');
        $('.tabs-top-mob-text').html(next.attr('data-name'));
    } else if (side === 2){
        if (thisActive.prev().length == 0){
            next = $(tabsContentItems[tabsContentItems.length -1]);
        } else {
            next = thisActive.prev();
        }
        thisActive.removeClass('active');
        next.addClass('active');
        $('.tabs-top-mob-text').html(next.attr('data-name'));
    }
}

function initMap(){
    var myMap = new ymaps.Map("map", {
        center: [59.7801,29.9878],
        zoom: 14
    });
    var myPlacemark = new ymaps.Placemark([59.7779,29.9899], {
        hintContent: 'Иннола Парк',
        balloonContent: 'Коттеджный поселок  "Иннола Парк"'
    },{
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/pin.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38]
    });

    myMap.geoObjects.add(myPlacemark);
}
$(document).ready(function() {
    $(document).on('click', '.popup-close', function () {
        $.fancybox.close();
        return false;
    });
    $(document).on('click', '.tabs-top-mob-but--next', function () {
        tabsToggle(1, $(this));
    });
    $(document).on('click', '.tabs-top-mob-but--prev', function () {
        tabsToggle(2, $(this));
    });
    dragTabsMobile();

    $('.phone').mask('+7(999)-999-99-99');
    ymaps.ready(initMap);

});


function dragTabsMobile() {
    var box1 = document.querySelector('.tabs-top-mob');
    var startx = 0;

    box1.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0];
        startx = parseInt(touchobj.clientX);
        e.preventDefault();
        return startx;
    }, false);

    box1.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0];
        if (startx > touchobj.clientX){
            tabsToggle(2, $(this));
        } else if (startx < touchobj.clientX){
            tabsToggle(1, $(this));
        }
        e.preventDefault();
    }, false);
}


