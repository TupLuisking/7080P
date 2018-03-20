console.log("Script Initialized");

//$("#nav").localScroll();

$(window).scroll(function(){
                 
    var wScroll = $(this).scrollTop();

    console.log(wScroll);
});

//var navHeight = 110;

//function navTo(element) {
//    
//    clearInterval(this);
//    
//    console.log(element);
//    
//    $('html, body').animate({
//        scrollTop: $(element.getAttribute("href")).offset().top - navHeight
//    }, 750);
//}