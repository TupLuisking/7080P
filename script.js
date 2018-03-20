console.log("Script Initialized");

window.onload = function() {
    
   console.log("WINDOW LOADED"); 
}

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