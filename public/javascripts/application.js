// Put your application scripts here


$(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active").css("z-index:-1;");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

//
$(document).ready(function() {
    window.wiselinks = new Wiselinks($('main'));

    $(document).off('page:loading').on('page:loading', function(event, $target, render, url) {



        //$target.animate({
        //transform: 'translateY(600px)'}, 1000);
        //$('main').show("slide", { direction: "left" }, 500);
        return console.log("Loading: " + url + " to " + $target.selector + " within '" + render + "'");
    });
    $(document).off('page:redirected').on('page:redirected', function(event, $target, render, url) {


        return console.log("Redirected to: " + url);
    });
    $(document).off('page:always').on('page:always', function(event, xhr, settings) {

        if (window.location.pathname == '/')
            $('main').addClass('contacts').removeClass('price');
        //.removeClass('pt-page-moveToLeft').addClass('pt-page-moveToLeft pt-page-moveFromLeft');
        else
            $('main').addClass('price').removeClass('contacts')
        //.removeClass('pt-page-moveToLeft pt-page-moveFromLeft').addClass('pt-page-moveToLeft');


        $('main').css({'opacity':0}).animate({'opacity': '1'},500);

        return console.log("Wiselinks page loading completed");
    });
    $(document).off('page:done').on('page:done', function(event, $target, status, url, data) {
        return console.log("Wiselinks status: '" + status + "'");
    });
    return $(document).off('page:fail').on('page:fail', function(event, $target, status, url, error, code) {
        return console.log("Wiselinks status: '" + status + "'");
    });


     //for Yandex metrics & Google analitics

    $(document).off('page:done').on('page:done', function(event, $target, status, url, data) {
        _gaq.push(['_trackPageview', url]);
        return _metrika.hit(url);
    });


});

