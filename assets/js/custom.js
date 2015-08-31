/**
 * Created by raphaelsoul on 2015/8/31.
 */

$(document).ready(function(){
    $("#sidebar").hover(function(){
        //$("#sidebar").css("left","0px");
        $("#sidebar").animate({left:'0px'});
        $("#PostArea").css({"transform":"rotateY(45deg) perspective(600px)","transition":"transform 1s ease 0s"});
    },function(){
        //$("#sidebar").css("left","-160px");
        $("#sidebar").animate({left:'-260px'});
        $("#PostArea").css({"transform":"rotateY(0deg) perspective(0px)","transition":"transform 1s ease 0s"});
        //,"transform-origin":"100% 50% 0%"
    });
});