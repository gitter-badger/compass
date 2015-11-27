// Put your application scripts here
//}


$(document).ready(function() {

    $(window).bind( 'hashchange', function(e) {
        var anchor = document.location.hash;
        if( anchor === '#price' ) {
            $('nav.main-menu li:first-child').addClass('active');
            $('nav.main-menu li:last-child').removeClass('active');
        }else if ( anchor === '#contacts' ) {
            $('nav.main-menu li:last-child').addClass('active');
            $('nav.main-menu li:first-child').removeClass('active');
        }
        console.log(anchor);
    });
});

////
//
//$('nav.main-menu li').click(function(){
//   $('nav.main-menu li').removeClass('active');
//   $(this).addClass('active');
//});
//$('.pt-page').on('currentPageChange',  function() {
//
//   alert('pageCHANGE!')
//
//});
////
//if ( $('.pt-page-2.pt-page-current') ) {
//   $('nav.main-menu li:last-child').addClass('active').trigger("currentPageChange");
//}
//else{
//   $('nav.main-menu li:first-child').removeClass('active');
//
//}

//
//if ( $('.pt-page-2.pt-page-current').length ) {
//   $('nav.main-menu li').addClass('active');
//}
//else{
//   //$('nav.main-menu li').removeClass('active');
//}
