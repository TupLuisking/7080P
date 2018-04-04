console.log("Script Initialized");

window.onload = function() {
    
    console.log("WINDOW LOADED");
    
    var basetop = 315;
    var aboutnavbar = document.getElementById("aboutnavcontainer");
    var abouthref = window.location.href.split("#")[1];
    
    if(abouthref != null && aboutnavbar != null) {
        
        aboutnavbar.style.top = 75 + "px";   
    } else if(aboutnavbar != null && abouthref == null) {
        
        aboutnavbar.style.top = basetop + "px";
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
        
        if(wScroll >= commposts[i].offsetTop - 650) {
            
            commposts[i].style.opacity = "1";
        }
    }
    
    adjustAboutNav(navend, wScroll);
    adjustTOC(navend, wScroll);
    
//    console.log("scroll: " + wScroll);
//    console.log("navend: " + navend);
});

function adjustAboutNav(navend, wScroll) {
    
    var basetop = 315;
    var scrolltop;
    
    var aboutnavbar = document.getElementById("aboutnavcontainer");
    
    if(aboutnavbar == null)
        return;
    
    if(wScroll < navend) {
        
        scrolltop = basetop - wScroll;
        aboutnavbar.style.top = (scrolltop)+ "px";    
    } else {
        
        aboutnavbar.style.top = "75px";
    }
    
    if(aboutnavbar != null) {
        
        var sections = document.getElementsByClassName("section");
        var currentsectionindex = 0;
        
        for(var i = 0; i < sections.length; i++) {
            
            if(wScroll > sections[i].offsetTop)
                currentsectionindex = i;
        }
        
        var anavitems = document.getElementsByClassName("anavitem");
        
        console.log("Current About Section Index: " + currentsectionindex);
        
        for(var i = 0; i < anavitems.length; i++) {
            
            if(i == currentsectionindex) {
                
//                console.log(i + ": Orange!");
                anavitems[currentsectionindex].style.color = "#fcb040";
            } else {                
                
//                console.log(i + ": Black");
                anavitems[i].style.color = "#060707";
            }
        }
    }
}

function adjustTOC(navend, wScroll) {
    
    var toc = document.getElementsByClassName("toc")[0];
    
    if(toc != null) {
        
        if(wScroll < navend) {
            
            toc.style.top = (290 - wScroll) + "px";       
        } else {
            
            toc.style.top = "85px";
        }
    }
}

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
    "6",
    "11",
    "14",
    "24"
];

var dateTitles = [
    "Maynila sa mga Kuko ng Liwanag",
    "Batch '81",
    "Kung Mangarap Ka't Magising",
    "Kakabakaba Ka Ba?"
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
        var dayinfoday = document.getElementById("dayinfoday");
        var dayinfofilm = document.getElementById("dayinfofilm");
        var dayinfotime = document.getElementById("dayinfotime");
        var dayinfovenue = document.getElementById("dayinfovenue");
        var dayinfoentry = document.getElementById("dayinfoentry");
        dayInfo.style.opacity = "1";
        dayinfoday.innerHTML = dateDates[i];
        dayinfoday.style.background = dateColors[i];
        dayinfofilm.innerHTML = dateTitles[i];
        dayinfofilm.style.background = dateColors[i];
        
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

    var image = document.getElementById("imgmodalimg");
    var imgzoomed = document.getElementById("imgzoom");
    image.src = element.src;
    imgzoomed.src = element.src;
    
    imagemodal.style.transform = "translateY(0)";
    
    var imgmodaldl = document.getElementById("imgmodaldl");
    imgmodaldl.href = element.src;
}

function hideImageModal() {
    
    imagemodal.style.transform = "translateY(calc(-100vh - 50%))";
}

// TOC

function showTOC() {
    
    var toc = document.getElementsByClassName("toccontent")[0];
    
    toc.style.transform = "scale(1)";
}

function hideTOC() {
    
    var toc = document.getElementsByClassName("toccontent")[0];
    
    toc.style.transform = "scale(0)";
}

// FILM VOTING

var filmyes = 10;
var filmno = 4;

var voted = false;

function showFilmResults(yes, no) {
    
    if(voted)
        return;
    
    voted = true;
    
    var filmyes = Math.floor(Math.random() * 100) + 1;
    var filmno = Math.floor(filmyes/(2+Math.floor((Math.random() * 5) + 1)));
    
    console.log(filmyes + ":" + filmno);
    
    filmyes += yes;
    filmno += no;
    
    var votemeters = document.getElementsByClassName("votemeter");

    var yesmeter = votemeters[0];
    var nometer = votemeters[1];
    
    var yespercent = (filmyes / (filmyes + filmno));
    var nopercent = 1 - yespercent;

//    console.log(yespercent + ":" + nopercent);
    
    yesmeter.style.width = (100*yespercent) + "%";    
    nometer.style.width = (100*nopercent) + "%";
    
    yespercent = Math.floor(yespercent * 100);
    nopercent = 100-yespercent;
    
    yesmeter.innerHTML = yespercent + "%";
    nometer.innerHTML = nopercent + "%";
    
    yesmeter.style.background = "#df3e3f";
    nometer.style.background = "#df3e3f";
}

// FILM TRAILER

function showFilmTrailer(ytlink) {
    
    var filmcontainer = document.getElementById("filmtrailercontainer");
    
    filmcontainer.style.transform = "translateY(0)";
}

function hideFilmTrailer() {
    
    var filmcontainer = document.getElementById("filmtrailercontainer");
    
    filmcontainer.style.transform = "translateY(-100%)";
}

// STICKER ZOOM 

function zoomArea(event) {
    
    event = event || window.event;
    
    var image = document.getElementById("imgmodalimg");
    var imgzoomed = document.getElementById("imgzoom");
    imgzoomed.src = image.src;
    
    var pageX = event.clientX;
    var pageY = event.clientY;
    
    if (pageX === undefined) {
        pageX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    
    var viewportOffset = image.getBoundingClientRect();
    
    var imgx = viewportOffset.left;
    var imgwidth = image.width;
    var imgy = viewportOffset.top;
    var imgheight = image.height;
    
    console.log("x: " + imgx);
    console.log("width: "  + imgheight);
    
    var xpercent = (pageX - imgx)/imgwidth;
    xpercent -= 0.5;
    
    var ypercent = (pageY - imgy)/imgheight;
    ypercent -= 0.5;
    
    console.log("X%: " + xpercent * 100 + "%");
    console.log("Y%: " + ypercent * 100 + "%");
    
    var zoomfactor = 2;
    
    imgzoomed.style.transform = "scale(" + zoomfactor + ") " + 
        "translate(" + 
        xpercent * -50 + "%, " +
        ypercent * -50 + "%"
        + ")";
}