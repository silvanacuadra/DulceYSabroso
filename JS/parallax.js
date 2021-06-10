$(document).ready(function () {

    $(window).scroll(function () {
        let windowWidth = $(window).width();

        if (windowWidth > 800) {
            let scroll = $(window).scrollTop();

            $("header .title").css({
                "transform": "translate(0px, " + scroll / 2 + "%)"
            })

            $(".about-me article").css({
                "transform": "translate(0px, -" + scroll / 2 + "%)"
            });
        }
    });

    $(window).resize(function(){
        let windowWidth = $(window).width();

        if(windowWidth < 800) {
            $(".about-me article").css({
                "transform": "translate(0px, 0px)"
            });

            $("header .title").css({
                "transform": "translate(0px, 0px)"
            })           
        }
    })
});