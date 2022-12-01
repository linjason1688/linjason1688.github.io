var carouselElements = document.getElementsByClassName("carouselElements");

//var activeTimerElements = window.setInterval(carouselImg ,5000);
var activeTimerElements = window.setInterval(carouselImg ,10000);

function initialRotalElements() {
    activeTimerElements = 0;
    document.getElementById("slideShow").style.backgroundImage = "url(image/"+activeTimerElements+".jpg)";
}

function carouselImg() {
    activeTimerElements++;

    if (activeTimerElements >= carouselElements.length -1) {
        activeTimerElements = 0;
    }

    document.getElementById("slideShow").style.backgroundImage = "url(image/"+activeTimerElements+".jpg)";
    
}

function prev() {
    activeTimerElements--;

    // if (activeTimerElements <= carouselElements.length - 1) {
    //     activeTimerElements = 0;
    // }

    if (activeTimerElements < 0) {
        activeTimerElements = carouselElements.length - 1;
    }

    //document.getElementById("slideShow").style.backgroundImage = "url(/image/"+activeTimerElements+".jpg)";
    document.getElementById("slideShow").style.backgroundImage = "url(image/"+activeTimerElements+").jpg";
}

function next() {
    activeTimerElements++;

    // if (activeTimerElements >= carouselElements.length -1) {
    //     activeTimerElements = 0;
    // }

    if (activeTimerElements >= carouselElements.length -1) {
        //activeTimerElements = carouselElements.length - 1;
        activeTimerElements = 0;
        //activeTimerElements++;
    }

    //document.getElementById("slideShow").style.backgroundImage = "url(/image/"+activeTimerElements+".jpg)";
    document.getElementById("slideShow").style.backgroundImage = "url(image/"+activeTimerElements+").jpg";
}