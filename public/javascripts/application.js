// Put your application scripts here



//
$(document).ready(function() {
    $('nav.main-menu li').click(function(){
        $('nav.main-menu li').removeClass('active');
        $(this).addClass('active');
    });


});
