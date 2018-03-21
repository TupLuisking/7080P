console.log("Script Initialized");

window.onload = function() {
    
    console.log("WINDOW LOADED");
    
    setTimeout(setHighlight, 50);
}

function setHighlight() {
    
    var id = document.body.id.trim();
    var items;
    
    if(id === "directors") {
        
        items = document.getElementsByClassName("navdir");
    } else if(id === "minifests") {
        
        items = document.getElementsByClassName("navmini");
    }
    
    console.log(items);
    
    for(var i = 0; i < items.length; i++) {
            
        items[i].style.fontWeight = "bolder";
        items[i].style.fontSize = "1.5em";
    }
}

$(window).scroll(function(){
                 
    var wScroll = $(this).scrollTop();
    var height = $(document).height();
    var navend = $('#navend').offset().top - 45;
    
//    var scrollindicator = document.getElementById("scrollindicator");
//
//    scrollindicator.style.transform = "translateY(" + ((wScroll/height)*200) + "vh)";
//    
    if(wScroll > navend) {

        showClingyNav();
    } else {
        
        hideClingyNav();
    }
    
    console.log("scroll: " + wScroll);
    console.log("navend: " + navend);
});

// CLINGY NAV 

function showClingyNav() {
    
    document.getElementById("nav").style.top = "0";
}

function hideClingyNav() {
    
    document.getElementById("nav").style.top = "-2000px";
}

// NAVIGATION

var navHeight = 110;

function navToSection(id) {
    
    console.log("bruh");
    
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top - navHeight
    }, 750);
}

function navTo(element) {
    
    clearInterval(this);
    
    var href = element.getAttribute("href");
    var hrefsplit = href.split("#");
    
    console.log(hrefsplit);
    
    
//    $('html, body').animate({
//        scrollTop: $(element.getAttribute("href")).offset().top - navHeight
//    }, 750);
    
    $('html, body').animate({
        scrollTop: $(window.location.hash).offset().top - navHeight
    }, 750);
}

// SLIDES

//var slideIndex = 1;
//showSlide(slideIndex);
//
//function plusSlide(n) {
//    
//    showSlide(slideIndex += n);
//}
//
//function showSlide(n) {
//    
//    console.log("Changing slide");
//    
//    var i;
//    var x = document.getElementsByClassName("slideshow");
//    
//    if(n > x.length)
//        slideIndex = 1;
//    
//    if(n < 1)
//        slideIndex = x.length;
//    
//    for(i = 0; i < x.length; i++)
//        x[i].style.display = "none";
//    
//    if(x.length > 0)
//        x[slideIndex-1].style.display = "block";
//}

// CALENDAR

var filmNames = [
    "Black Panther",
    "Pink Panther",
    "Your Mum",
    "9+10"];
var filmDescs = [
    "It's a black version of Pink Panther",
    "I't a pink version of Black Panther",  
    "Got big gay",
    "TWENY-WAN"];

var currentIndex = -1;

function showDayInfo(i) {
    
    console.log(currentIndex + ":" + i);
    
    if(currentIndex == i) {
        
        currentIndex = -1;
        hideDayInfo();
    } else {
        
        currentIndex = i;
        document.getElementById("dayinfoname").innerHTML = filmNames[currentIndex];
        document.getElementById("dayinfodesc").innerHTML = filmDescs[currentIndex];

        var dayInfo = document.getElementById("dayinfo");
        dayInfo.style.opacity = "1";
    }
    
}

function hideDayInfo() {
    
    console.log("hiding days");
    
    var dayInfo = document.getElementById("dayinfo");
    dayInfo.style.opacity = "0";
}

// CHANGEIMAGE

function changeDirImg(element, imgname) {
    
    console.log("Changing pic of " + element);
    
    element.src = "/images/" + imgname;
}