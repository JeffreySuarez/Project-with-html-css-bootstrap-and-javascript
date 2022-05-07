/*-----------------------------------
INICIAMOS WOW------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/


// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300, // Integer. How fast to complete the scroll in milliseconds
    speedAsDuration: true,
    offset: 60, // Integer. How far to offset the scrolling anchor location in pixels
    
});




/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
 $(window).scroll(function () {

    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        nav.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
    }
});