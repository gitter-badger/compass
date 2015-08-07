// Put your application scripts here


$(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active").css("z-index:-1;");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
