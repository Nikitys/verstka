$(document).ready(function() {
    $('.gallary-main-right--carousel').slick({
        dots: true
    });
    $('.popup-news-left-carousel').slick({
        dots: true
    });
    $(document).on('click', '.popup-close', function(e){
        e.preventDefault();
        $.fancybox.close();
    });
    $(document).on('click', '.gallary-header-menu', function(e){
        $('.main-navigation').addClass('main-navigation--active');
        e.preventDefault();
    });
    $(document).on('click', '.main-navigation-close', function(e){
        $('.main-navigation').removeClass('main-navigation--active');
        e.preventDefault();
    });
    $(document).mouseup(function (e) {
        var container = $(".main-navigation");
        if (container.has(e.target).length === 0){
            container.removeClass('main-navigation--active');
        }
    });
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1500);
        $('.main-navigation').removeClass('main-navigation--active');
        return false;
    });
});
