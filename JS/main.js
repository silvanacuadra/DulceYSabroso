$(document).ready(function () {

    // EFECTO EN EL MENÚ

    $(".menu-nav a").each(function (index) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 1500 + (index * 500));
    });


    // EFECTO HEADER

    if($(window).width() > 800 ){
        $("header .title").css({
            "opacity": 0,
            "marginTop": 0
        });
    
        $("header .title").animate({
            opacity: 1,
            marginTop: "-52px"
        }, 2000);
    } else {
        $("header .title").css({
            "opacity": 0
        });
    
        $("header .title").animate({
            opacity: 1
        }, 2000);
    }

    $(window).resize(function(){
        let windowWidth = $(window).width();

        if(windowWidth < 800) {
            $("header .title").css({
                "marginTop": "80px"
            });
        }
    })



});

