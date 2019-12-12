function update_all(limiter) {
    if (limiter === undefined){
        limiter = $(document)
    }
    update_carousel(limiter);
}
update_all();
function update_carousel(limiter){
    if (limiter === undefined){
        limiter = $(document)
    }
    limiter.find('.main-block-top-left-block-carousel').each(function() {
        if (this.dataset.carousel === undefined){
            this.setAttribute('data-carousel', Math.floor(Math.random() * 100000000));

            var slickTop = $(this).find('.main-block-top-left-block-carousel-top').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '[data-carousel=' + this.dataset.carousel + '] .main-block-top-left-block-carousel-bottom'
            });
            $(this).data('slickTop', slickTop);
            var slickBot = $(this).find('.main-block-top-left-block-carousel-bottom').slick({
                infinite: true,
                slidesToShow: 7,
                slidesToScroll: 1,
                vertical: true,
                arrows:false,
                verticalSwiping:true,
                asNavFor: '[data-carousel=' + this.dataset.carousel + '] .main-block-top-left-block-carousel-top',
                dots: false,
                focusOnSelect: true
            });
            $(this).data('slickBot', slickBot);
        } else {
            console.log($(this).data('slickTop'), $(this).data('slickBot'))
        }
    });
}


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
