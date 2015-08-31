/**
 * Created by raphaelsoul on 2015/8/31.
 */

$(document).ready(function(){
    $("#sidebar").hover(function(){
        //$("#sidebar").css("left","0px");
        $("#sidebar").animate({left:'0px'});
        $("#PostArea").css({"transform":"rotateY(40deg)","transition":"transform 1s ease 0s"})
    },function(){
        //$("#sidebar").css("left","-160px");
        $("#sidebar").animate({left:'-160px'});
        $("#PostArea").css({"transform":"rotateY(0deg)","transition":"transform 1s ease 0s"})
        //,"transform-origin":"100% 50% 0%"
    });
});