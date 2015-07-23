// Content
/*
* 1. Menu Animation
*
*
* */

$(document).ready(function(){
    /////////////////////
    /*1.Menu Animation*/
    ////////////////////
    $('#menu').mouseover(function(){
        $('.content').toggleClass('rotate');
    });
    $('#menu').mouseout(function(){
        $('.content').removeClass('rotate');
    });
    $('#menu').click(function(){
        $('.content').addClass('rotate');
    });
    $('#menu').click(function(){
        $('.content').removeClass('rotate');
    });
});


