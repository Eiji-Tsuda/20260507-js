$(function () {
    $(window).scroll(function() {
        $("p").html("scroll:" + $(window).scrollTop() + "px");
    });
});