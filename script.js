console.log("Script Initialized");

window.onload = function() {
    
    console.log("WINDOW LOADED");
}

$(window).scroll(function(){
                 
    var wScroll = $(this).scrollTop();
    var height = $(document).height();
    var navend = $('#navend').offset().top - 25;
    
    var aboutnavbar = document.getElementById("aboutnavcontainer");
    
//    var scrollindicator = document.getElementById("scrollindicator");
//
//    scrollindicator.style.transform = "translateY(" + ((wScroll/height)*200) + "vh)";
//  
    
    if(navend != null) {
        
        if(wScroll >= navend) {

            showClingyNav();
            
//            if(aboutnavbar != null) {
//                
//                aboutnavbar.style.width = "15vw";
//                aboutnavbar.style.minWidth = "175px";
//                aboutnavbar.style.height = "auto";
//            }
        } else {

            hideClingyNav();
            
//            if(aboutnavbar != null) {
//                
//                aboutnavbar.style.width = "0";
//                aboutnavbar.style.minWidth = "0";
//                aboutnavbar.style.height = "0";
//            }
        }
    }
    
    var commposts = document.getElementsByClassName("commpost");
    
    for(var i = 0; i < commposts.length; i++) {
        
        if(wScroll >= commposts[i].offsetTop - 575) {
            
            commposts[i].style.opacity = "1";
        }
    }
    
    var basetop = 375;
    var scrolltop;
    
    if(wScroll < navend) {
        
        aboutnavbar.style.top = (basetop - wScroll) + "px";    
    } else {
        
//        aboutnavbar.style.top = (basetop - wScroll) + "px";
    }
    
    if(aboutnavbar != null) {
        
        var sections = document.getElementsByClassName("section");
        var currentsectionindex = 0;
        
        for(var i = 0; i < sections.length; i++) {
            
            if(wScroll > sections[i].offsetTop)
                currentsectionindex = i;
        }
        
        var anavitems = document.getElementsByClassName("anavitem");
        
        for(var i = 0; i < anavitems.length; i++) {
            
            anavitems[i].style.color = "#060707";
        }
        
        anavitems[currentsectionindex].style.color = "#fcb040";
    }
    
//    console.log("scroll: " + wScroll);
//    console.log("navend: " + navend);
});

// CLINGY NAV 

function showClingyNav() {
    
    document.getElementById("nav").style.transform = "translateY(0)";
}

function hideClingyNav() {
    
    document.getElementById("nav").style.transform = "translateY(-100%)";
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

var navHeight = 69;

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
        nowShowingDiv.style.height = "40vw";
    } else {
        
        nsarrow.style.display = "none";
        
        nowShowingDiv.style.borderWidth = "0px";
        nowShowingDiv.style.borderColor = "rgba(255,255,255,0)";
        nowShowingDiv.style.height = "0";
    }
}

// CALENDAR

var dateDates = [
    "6 Maynila sa mga Kuko ng Liwanag",
    "11 Batch '81",
    "14 Kung Mangarap Ka't Magising",
    "24 Kakabakaba Ka Ba?"
];

var dateColors = [
    "#a8dac7",
    "#fcb040",
    "#a8dac7",
    "#fcb040"
];

var dayTimes = [
    "10:30 PM",
    "7:30 PM",
    "2:30 PM",
    "6:00 PM"
];

var dayVenues = [
    "Cinema Centenario",
    "Cinema Centenario",
    "Cinema Centenario",
    "Cinema Centenario"
];

var dayEntries = [
    "PHP200 per ticket",
    "PHP200 per ticket",
    "PHP200 per ticket",
    "PHP200 per ticket"
];

var currentIndex = -1;

function showDayInfo(i) {
    
    console.log(currentIndex + ":" + i);
    
    if(currentIndex == i) {
        
        currentIndex = -1;
        hideDayInfo();
    } else {
        
        currentIndex = i;

        var dayInfo = document.getElementById("dayinfo");
        var dayinfodate = document.getElementById("dayinfodate");
        var dayinfotime = document.getElementById("dayinfotime");
        var dayinfovenue = document.getElementById("dayinfovenue");
        var dayinfoentry = document.getElementById("dayinfoentry");
        dayInfo.style.opacity = "1";
        dayinfodate.innerHTML = dateDates[i];
        dayinfodate.style.background = dateColors[i];
        
        dayinfotime.innerHTML = dayTimes[i];
        dayinfovenue.innerHTML = dayVenues[i];
        dayinfoentry.innerHTML = dayEntries[i];
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

// SHOW MODAL

function showImageModal(element) {

    var imagemodal = document.getElementById("imagemodal");
    var imagemodalimg = document.getElementById("imgmodalimg");
    
    var srcsplit = element.src.split("/");
    
    changeDirImg(imagemodalimg, srcsplit[srcsplit.length - 1]);
    imagemodal.style.transform = "translateY(0)";
}

function hideImageModal() {
    
    imagemodal.style.transform = "translateY(-100vh)";
}