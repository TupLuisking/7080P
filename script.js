console.log("Script Initialized");

window.onload = function() {
    
   console.log("WINDOW LOADED"); 
}

$(window).scroll(function(){
                 
    var wScroll = $(this).scrollTop();

    console.log(wScroll);
});

var navHeight = 110;

function navTo(element) {
    
    clearInterval(this);
    
    console.log(element);
    
    $('html, body').animate({
        scrollTop: $(element.getAttribute("href")).offset().top - navHeight
    }, 750);
}

var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    
    showSlide(slideIndex += n);
}

function showSlide(n) {
    
    console.log("Changing slide");
    
    var i;
    var x = document.getElementsByClassName("slideshow");
    
    if(n > x.length)
        slideIndex = 1;
    
    if(n < 1)
        slideIndex = x.length;
    
    for(i = 0; i < x.length; i++)
        x[i].style.display = "none";
    
    x[slideIndex-1].style.display = "block";
}

function showDayInfo() {
    
    var dayInfo = document.getElementById("dayinfo");
    dayInfo.style.maxWidth = "100%";
}

function hideDayInfo() {
    
    var dayInfo = document.getElementById("dayinfo");
    dayInfo.style.maxWidth = "0";
}