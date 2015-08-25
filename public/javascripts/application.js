// Put your application scripts here


$(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active").css("z-index:-1;");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


//
//$('.main-menu li a ').on('ajax:success', function(event, xhr, status, error) {
//    // insert the failure message inside the "#account_settings" element
//    console.log(xhr)
//    $(".main-menu li").html(xhr.responseText)
//});
//
//$('.main-menu a').on('ajax:error', function(event, xhr, status, error) {
//    // insert the failure message inside the "#account_settings" element
//    console.log(error)
//});

//
//$(document).ready(function() {
//    window.wiselinks = new Wiselinks($('main'));

    //var contacts_page = $(".page.contacts");
    //
    //ymaps.ready(function() {
    //
    //    var $map =  $('#map');
    //    console.log("map loading");
    //
    //    if (contacts_page) {
    //        $map.fadeIn();
    //        console.log("map show");
    //
    //    }
    //    else
    //        {
    //            $map.fadeOut();
    //            console.log("map hide");
    //
    //    }
    //
    //
    //});

    //$(document).off('page:loading').on('page:loading', function(event, $target, render, url) {
    //    return console.log("Loading: " + url + " to " + $target.selector + " within '" + render + "'");
    //});
    //$(document).off('page:redirected').on('page:redirected', function(event, $target, render, url) {
    //
    //    return console.log("Redirected to: " + url);
    //
    //});
    //$(document).off('page:always').on('page:always', function(event, xhr, settings) {
    //    return console.log("Wiselinks page loading completed");
    //});
    //$(document).off('page:done').on('page:done', function(event, $target, status, url, data) {
    //    //$('main').removeClass("contacts");
    //
    //    return console.log("Wiselinks status: '" + status + "'");
    //});
    //return $(document).off('page:fail').on('page:fail', function(event, $target, status, url, error, code) {
    //    return console.log("Wiselinks status: '" + status + "'");
    //});
     //
     //
     //for Yandex metrics & Google analitics

    //$(document).off('page:done').on('page:done', function(event, $target, status, url, data) {
    //    _gaq.push(['_trackPageview', url]);
    //    return _metrika.hit(url);
    //});

//});
