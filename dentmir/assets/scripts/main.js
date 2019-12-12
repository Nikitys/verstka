$(document).ready(function() {
    $(document).on('click', '.zub', function () {
        $(this).toggleClass('zub-active');
        var info = $(this).attr('data-number');
        if ($(this).hasClass('zub-active')){
            $('.zub-main-right-form-zubs__text').append('<span id="'+ info +'"><i>, </i>'  + info + '</span>');

        } else {
            $('.zub-main-right-form-zubs__text').find('#'+ info).remove();
        }
    });
    $(".form-phone").mask("+7(999) 999-9999");
    $('.slider-left-carousel').slick({
        arrows: false,
        dots: true
    });
});