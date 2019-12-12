function update_all(limiter) {
    if (limiter === undefined){
        limiter = $(document)
    }
    commandSlider();
    sliderWidthPaginationNumber();
}
$(document).ready(function () {
    update_all();
});
function sliderWidthPaginationNumber(){
    var slider = $('.slider-main-inn').slick({
        arrows:false
    });
    var slideItems = $('.slider-main-item')
    slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(document).find('.slider-main-controls-count__tec').html(nextSlide+1);
    });
    $(document).on('click', '.slider-main-controls-prev', function (e) {
        slider.slick('slickPrev');
        e.preventDefault();
    });
    $(document).on('click', '.slider-main-controls-next', function (e) {
        slider.slick('slickNext');
        e.preventDefault();
    });
    $(document).find('.slider-main-controls-count__max').html(slider.length);
}
function commandSlider(){
    var slider = $('.command-list-slider').slick({
        dots: false,
        arrows:false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(document).on('click', '.command-arrow-prev', function (e) {
       slider.slick('slickPrev');
       e.preventDefault();
    });
    $(document).on('click', '.command-arrow-next', function (e) {
        slider.slick('slickNext');
        e.preventDefault();
    });
}
$(document).on('click', '.faq-item-top-toggle', function(){
    $(this).toggleClass('active');
    $(this).parents('.faq-item').find('.faq-item__text').slideToggle();
    $(this).parents('.faq-item').toggleClass('active');
    return false;
});


(function($) {
    $(function() {
        $('.tabs__caption').on('click', '[data-tab-link]:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        return false;
        });
    });
})(jQuery);

