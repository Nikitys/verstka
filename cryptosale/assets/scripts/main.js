
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
            console.log(isJson(sliderOptions));
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
            // update_all($(this).parents('.tabs'));
        });

        // $(document).on('click', '.all-next', function(){
        //     $('[data-slider]').each(function(){
        //         var slider = $(this).data('slider');
        //         slider.slick('slickNext');
        //     });
        //     return false;
        // })
    });
})(jQuery);


(function($){
    function floatLabel(inputType){
        $(inputType).each(function(){
            var $this = $(this);
            $this.focus(function(){
                $this.next().addClass("active");
            });
            $this.keyup(function(){
                $this.next().addClass("active");
            });
            $this.blur(function(){
                if($this.val() === '' || $this.val() === 'blank'){
                    $this.next().removeClass();
                }
            });
        });
    }
    floatLabel(".floatLabel");
})(jQuery);
$(document).ready(function(){
    // var navbar =  $('.edit-main-left');  // navigation block
    // var wrapper = $('.edit-main');        // may be: navbar.parent();
    //
    // $(window).scroll(function(){
    //     var nsc = $(document).scrollTop();
    //     var bp1 = wrapper.offset().top;
    //     var bp2 = bp1 + wrapper.outerHeight()-$(window).height();
    //
    //     if (nsc>bp1) {
    //         navbar.addClass('fixed');
    //     } else {
    //         navbar.removeClass('fixed');
    //     }
    //     // if (nsc>bp2) { navbar.css('top', bp2-nsc); }
    //     // else { navbar.css('top', '0'); }
    // });
    $(".edit-main-left-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 300);
    });
    $(document).on('click', '.settings-main-item__link', function () {
        $(this).parents('.settings-main-item').find('.settings-main-item-edit').slideToggle();
    })
    $(document).on('click', '.popup-head-close', function () {
       $.fancybox.close();
       return false;
    });
    $('.input-date').datetimepicker();
    $('.input-select').SumoSelect();
    $(document).on('click', '.header-mob-menu-link', function () {
        $('.header-mob-menu-main').addClass('active');
    });
    $(document).on('click', '.header-mob-menu-left', function () {
        $('.header-mob-menu-main').removeClass('active');
    })
});




