// Put your application scripts here


$(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$("nav a").click(function(){
    // изменяем класс самой ссылки
    $(this).addClass("active");
    // и ничего не делаем дальше (дабы не было перехода по ссылки)
});
