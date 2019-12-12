$(document).ready(function() {
    var carousel = $('.carousel-main').slick({
        arrows:false
    });
    $('.carousel-slide-arrows-prev').on('click',function (e) {
        e.preventDefault();
        carousel.slick('slickPrev');
        $('.carousel-but-list-item--active').removeClass('carousel-but-list-item--active').prev().addClass('carousel-but-list-item--active');
    });
    $('.carousel-slide-arrows-next').on('click',function (e) {
        e.preventDefault();
        carousel.slick('slickNext');
        $('.carousel-but-list-item--active').removeClass('carousel-but-list-item--active').next().addClass('carousel-but-list-item--active');

    });
    $('.carousel-but-list-item').on('click',function (e) {
        $(this).addClass('carousel-but-list-item--active');
        $(this).siblings().removeClass('carousel-but-list-item--active');
        slideIndex = $(this).index();
        console.log(slideIndex);
        carousel.slick( 'slickGoTo',parseInt(slideIndex) );
    });
    $('.faq-item__title').on('click',function (e) {
        $(this).siblings('.faq-item__text').toggleClass('faq-item__text--active');

    });
    $("[data-fancybox]").fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });
    //паралакс
    // var scene = document.getElementById('scene');
    // var parallax = new Parallax(scene);
    var carouselNews = $('.news-list').slick({
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
    var carouselTokens = $('.tokens-top-list').slick({
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    var carouselProblems = $('.problems-list').slick({
        speed: 300,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
    $('.problems-arrows-prev').on('click',function (e) {
        e.preventDefault();
        carouselProblems.slick('slickPrev');
    });
    $('.problems-arrows-next').on('click',function (e) {
        e.preventDefault();
        carouselProblems.slick('slickNext');
    });
    if(document.documentElement.clientWidth < 1024) {
        $('.news-page-list').slick({
            speed: 300,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    }

    // счетчик начало
    function updater(d, h, m, s) {
        var baseTime = new Date(2017, 7, 30);

        function update() {
            var cur = new Date();
            // сколько осталось миллисекунд
            var diff =  baseTime - cur ;
            // сколько миллисекунд до конца секунды
            var millis = diff % 1000;
            diff = Math.floor(diff/1000);
            // сколько секунд до конца минуты
            var sec = diff % 60;
            if(sec < 10) sec = "0"+sec;
            diff = Math.floor(diff/60);
            // сколько минут до конца часа
            var min = diff % 60;
            if(min < 10) min = "0"+min;
            diff = Math.floor(diff/60);
            // сколько часов до конца дня
            var hours = diff % 24;
            if(hours < 10) hours = "0"+hours;
            var days = Math.floor(diff / 24);
            d.innerHTML = days;
            h.innerHTML = hours;
            m.innerHTML = min;
            s.innerHTML = sec;
            setTimeout(update, millis);
        }
        setTimeout(update, 0);
    }

    updater(document.getElementById("days"),
        document.getElementById("hours"), document.getElementById("minutes"),
        document.getElementById("seconds"));
    // счетчик конец

    // gprahics start
    AmCharts.makeChart( "chartdiv", {
        "type": "serial",
        "theme": "none",
        // "titles": [
        //     {
        //         "id": "Title-1",
        //         "size": 15,
        //         "text": "Размер рынка (млн. $)"
        //     }
        // ],
        "dataProvider": [ {
            "country": "2016",
            "visits": 2025
        }, {
            "country": "2017",
            "visits": 1882
        }, {
            "country": "2018",
            "visits": 1809
        }, {
            "country": "2019",
            "visits": 1322
        }, {
            "country": "2020",
            "visits": 1122
        }, {
            "country": "2021",
            "visits": 1114
        }, {
            "country": "2022",
            "visits": 984
        } ],
        "valueAxes": [ {
            "gridColor": "rgba(0,0,0,0)",
            "gridAlpha": 0.2,
            "dashLength": 0
        } ],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [ {
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "visits"
        } ],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
        },
        "export": {
            "enabled": false
        }
    } );
    $('#chart').on('click',function (e) {
        // $(this).addClass('graphic-col-but-item__link--active');
        // $(this).siblings().removeClass('graphic-col-but-item__link--active');
        e.preventDefault()
    AmCharts.makeChart( "chartdiv", {
        "type": "serial",
        "theme": "none",
        "dataProvider": [ {
            "country": "2016",
            "visits": 2025
        }, {
            "country": "2017",
            "visits": 1882
        }, {
            "country": "2018",
            "visits": 1809
        }, {
            "country": "2019",
            "visits": 1322
        }, {
            "country": "2020",
            "visits": 1122
        }, {
            "country": "2021",
            "visits": 1114
        }, {
            "country": "2022",
            "visits": 984
        } ],
        "valueAxes": [ {
            "gridColor": "rgba(0,0,0,0)",
            "gridAlpha": 0.2,
            "dashLength": 0
        } ],
        "gridAboveGraphs": true,
        "startDuration": 1,
        "graphs": [ {
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillAlphas": 0.8,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "visits"
        } ],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "gridAlpha": 0,
            "tickPosition": "start",
            "tickLength": 20
        },
        "export": {
            "enabled": false
        }
    } );
    } );
    $('#chart1').on('click',function (e) {
        e.preventDefault()
        AmCharts.makeChart( "chartdiv", {
            "type": "serial",
            "theme": "none",
            "dataProvider": [ {
                "country": "2016",
                "visits": 1025
            }, {
                "country": "2017",
                "visits": 1082
            }, {
                "country": "2018",
                "visits": 1809
            }, {
                "country": "2019",
                "visits": 1322
            }, {
                "country": "2020",
                "visits": 1122
            }, {
                "country": "2021",
                "visits": 1114
            }, {
                "country": "2022",
                "visits": 984
            } ],
            "valueAxes": [ {
                "gridColor": "rgba(0,0,0,0)",
                "gridAlpha": 0.2,
                "dashLength": 0
            } ],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [ {
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            } ],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20
            },
            "export": {
                "enabled": false
            }
        } );
    });
    $('#chart2').on('click',function (e) {
        e.preventDefault()
        AmCharts.makeChart( "chartdiv", {
            "type": "serial",
            "theme": "none",
            "dataProvider": [ {
                "country": "2016",
                "visits": 300
            }, {
                "country": "2017",
                "visits": 1082
            }, {
                "country": "2018",
                "visits": 1809
            }, {
                "country": "2019",
                "visits": 1322
            }, {
                "country": "2020",
                "visits": 300
            }, {
                "country": "2021",
                "visits": 1114
            }, {
                "country": "2022",
                "visits": 984
            } ],
            "valueAxes": [ {
                "gridColor": "rgba(0,0,0,0)",
                "gridAlpha": 0.2,
                "dashLength": 0
            } ],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [ {
                "balloonText": "[[category]]: <b>[[value]]</b>",
                "fillAlphas": 0.8,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            } ],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20
            },
            "export": {
                "enabled": false
            }
        } );
    });
    // graphics end


    var chart = AmCharts.makeChart( "chartdiv1", {
        "type": "pie",
        "theme": "light",
        "legend":{
        "position":"right",
        "marginRight":100,
        "autoMargins":false
        },
        "dataProvider": [ {
            "title": "New",
            "value": 4852
        }, {
            "title": "Returning",
            "value": 9899
        } ],
        "titleField": "title",
        "valueField": "value",
        "labelRadius": 5,

        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "",
        "export": {
            "enabled": false
        }
    } );

    var chart = AmCharts.makeChart( "chartdiv2", {
        "type": "pie",
        "theme": "light",
        "legend":{
            "position":"right",
            "marginRight":100,
            "autoMargins":false
        },
        "dataProvider": [ {
            "title": "New",
            "value": 500
        }, {
            "title": "Returning",
            "value": 500
        },{
            "title": "lol",
            "value": 300
        },{
            "title": "atata",
            "value": 100
        } ],
        "titleField": "title",
        "valueField": "value",
        "labelRadius": 5,

        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "",
        "export": {
            "enabled": false
        }
    } );
});
