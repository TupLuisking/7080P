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
    
    if(items.length > 0) {
        
        for(var i = 0; i < items.length; i++) {

            items[i].style.fontWeight = "bolder";
            items[i].style.fontSize = "1.5em";
        }   
    }
}

$(window).scroll(function(){
                 
    var wScroll = $(this).scrollTop();
    var height = $(document).height();
    var navend = $('#navend').offset().top - 25;
    
//    var scrollindicator = document.getElementById("scrollindicator");
//
//    scrollindicator.style.transform = "translateY(" + ((wScroll/height)*200) + "vh)";
//    
    if(wScroll > navend) {

        showClingyNav();
    } else {
        
        hideClingyNav();
    }
    
//    console.log("scroll: " + wScroll);
//    console.log("navend: " + navend);
});

// CLINGY NAV 

function showClingyNav() {
    
    document.getElementById("nav").style.top = "0";
}

function hideClingyNav() {
    
    document.getElementById("nav").style.top = "-200%";
}

// SECTION NAVIGATION 

document.onkeydown = checkKey;

var currentSectionIndex = -1;
var sections = document.getElementsByClassName("section");

function checkKey(e) {
    
    e = e || window.event;

    if (e.keyCode == '38') {
        goToSection(-1);
    }
    else if (e.keyCode == '40') {
        goToSection(1);
    }

}

function goToSection(i) {
    
    currentSectionIndex += i;
    
    if(currentSectionIndex < 0)
        currentSectionIndex = sections.length-1;
    else if(currentSectionIndex >= sections.length)
        currentSectionIndex = 0;
    
    navToSectionClass(sections[currentSectionIndex]);
}

// NAVIGATION

var navHeight = 90;

function navToSection(id) {
    
    console.log("bruh");
    
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top - navHeight
    }, 750);
}

function navToSectionClass(element) {
    
    console.log("bruh");
    
    $('html, body').animate({
        scrollTop: $(element).offset().top - navHeight
    }, 750);
}

function navTo(element) {
    
    clearInterval(this);
    
    console.log(element);
    
    $('html, body').animate({
        scrollTop: $(element.getAttribute("href")).offset().top - navHeight
    }, 750);
}

function navTo(element, sectionNumber) {
    
    currentSectionIndex = sectionNumber;
    console.log("current section number: " + currentSectionIndex);
    
    clearInterval(this);
    
    $('html, body').animate({
        scrollTop: $(element.getAttribute("href")).offset().top - navHeight
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

// NOW SHOWING INFO

var nowShowingIndex = -1;
var nowShowingDiv = document.getElementById("minifilminfo");
var nowShowingName = document.getElementById("minifilminfoname");  
var nowShowingDets = document.getElementById("minifilminfodets");   
var nsarrow = document.getElementById("minifilmarrow");
var minifilms = document.getElementsByClassName("minifilm");

var nsnames = [
    "1",
    "2",
    "3",
    "4",
    "5"
];

var nsdetails = [
    "Hello :)",
    "Hello :)",
    "Hello :)",
    "Hello :)",
    "Hello :)"
];

function showNowShowingInfo(i) {
    
    console.log("SHOWING NOW SHOWING");
    
    if(nowShowingIndex == i)
        nowShowingIndex = -1;
    else
        nowShowingIndex = i;
    
    for(var x = 0; x < minifilms.length; x++)
        minifilms[x].style.border = "none";
    
    if(nowShowingIndex != -1) {
        
        nowShowingName.innerHTML = nsnames[i];
        nowShowingDets.innerHTML = nsdetails[i];
        
        nsarrow.style.display = "block";
        nsarrow.style.left = (minifilms[i].offsetLeft + minifilms[i].offsetWidth/2) + "px";
        minifilms[i].style.border = "3px solid #efefef";
        
        nowShowingDiv.style.borderWidth = "3px";
        nowShowingDiv.style.borderColor = "#efefef";
        nowShowingDiv.style.maxHeight = "200px";
    } else {
        
        nsarrow.style.display = "none";
        
        nowShowingDiv.style.borderWidth = "0px";
        nowShowingDiv.style.borderColor = "rgba(255,255,255,0)";
        nowShowingDiv.style.maxHeight = "0";
    }
}

// CALENDAR

var filmNames = [
    "Black Panther",
    "Pink Panther",
    "Your Mum",
    "9+10"];
var filmDescs = [
    "It's a black version of Pink Panther",
    "It's a pink version of Black Panther",  
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
    
//    console.log("Changing pic of " + element);
    
    element.src = "/images/" + imgname;
}