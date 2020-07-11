$(document).ready(function () {

    $('.hamburger').on('click', function(){
        $('.bar1').toggleClass('bar1-opened');
        $('.bar2').toggleClass('bar2-opened');
        $('.hamburger').toggleClass('hamburger-fixed');
        $('.responsive-menu').toggleClass('responsive-menu-open');
    })
});