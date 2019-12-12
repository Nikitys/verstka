$(document).ready(function() {
    $('.content-index,.portfolio-list').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(document).on('click', '.header-nav__item--mob-nav', function(e){
        e.preventDefault();
        $('.header-mob-menu').toggleClass('header-mob-menu--active animated bounceInDown');
        $(this).toggleClass('header-nav__item--mob-nav--active');
    });
    $("[data-fancybox]").fancybox();
});
