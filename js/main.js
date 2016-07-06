/*http://callmenick.com/post/expanding-search-bar-using-css-transitions*/
(function($) {
    "use strict";

    var $navbar = $(".nav"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    //scroll top 0 sticky
    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 590) {
            $navbar.addClass("sticky");
        } else {
            $navbar.removeClass("sticky");  
        }
    });

    
    //Smart Scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    /* VIDEO OPTIONS*/
    $('#header').vidbg({
        'mp4': 'videos/bg-vid.MP4',
        /*'webm': 'path/to/video.webm',
            'poster': 'path/to/fallback-image.png',*/
    }, {
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        resizing: true,
        overlay: false,
        overlayColor: '#000',
        overlayAlpha: '0.3',


    });      

})(jQuery, undefined);

$(".menu").click(function(){
    $("#nav").toggleClass("open");
});

new WOW().init();