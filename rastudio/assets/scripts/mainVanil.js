function sliderInitialize(limiter) {
    if (limiter === undefined){
        limiter = document.querySelector(limiter);
    }
    var slider = tns({
        container: '.portfolio-main',
        items: 3,
        nav: true,
        controls:false,
        mode: 'gallery',
        animateIn: 'jello',
        animateOut: 'rollOut',
        speed: 1000
    });
}
sliderInitialize();