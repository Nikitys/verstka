function tabs(limiter) {
    limiter.on('click', '[data-tab-link]:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
}
function carouselReviews(){
    var carousel = $('.reviews-slider').slick();
    $(document).on('click', '.reviews-slider-controls-prev', function(){
        carousel.slick('slickPrev');
        return false;
    });
    $(document).on('click', '.reviews-slider-controls-next', function(){
        carousel.slick('slickNext');
        return false;
    });
}
function tabsImg(){
    $(document).on('mouseenter','[data-link]', function () {
       var itemLink = $(this).attr('data-link'),
           siblingsItem = $(document).find('[data-item="'+itemLink+'"]').siblings();
       $(document).find('[data-item="'+itemLink+'"]').addClass('active bounceIn');
       siblingsItem.each(function () {
          $(this).removeClass('active');
       });
       $(document).find('.cls-2').each(function () {
           $(this).removeClass('active');
       })
       if($(this).find('.cls-2').length !== 0){
          $(this).find('.cls-2').addClass('active');
       }
    });
    $(document).on('click','[data-link]', function () {
        console.log('click')
        return false;
    })
}
function update_all(limiter) {
    if (limiter === undefined){
        limiter = $(document)
    }
    tabs(limiter);
    carouselReviews();
    tabsImg();
    menu();
    $(document).find('[name="phone"]').mask('+7 (999) 999-99-99')
}
function menu(){
    var menu = $('.header-nav'),
        menuBut = $('.hamburger');
    $(document).on('click', menuBut, function () {
        menuBut.toggleClass('is-active');
        menu.toggleClass('active fadeInRight');
    });
    $(window).on('scroll', function () {
        menu.removeClass('active');
        menuBut.removeClass('is-active');
    });
}

update_all();
