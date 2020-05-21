var popupOpen = false;
var tempsquare;
var templeft;
var temptop;
var popupTransitionHeight;
var popupTransitionWidth;
var popuptranition = document.getElementById("pop-up-transition");
var popup = document.getElementById("pop-up");
var canOpenPopup = true;
var locationImagePath;
var locationName;
var locationDescription;
var locationImageAlt;

function displayInfo(mapLocation) {
    if (canOpenPopup === true) {
        canOpenPopup = false;
        tempsquare = document.getElementById(mapLocation);
        templeft = tempsquare.getBoundingClientRect().left;
        temptop = tempsquare.getBoundingClientRect().top;
        popuptranition.style.left = templeft + "px";
        popuptranition.style.top = temptop + "px";
        popuptranition.style.zIndex = "100";
        setTimeout(function () {
            popuptranition.style.opacity = "1";
            setTimeout(function () {
                popuptranition.style.transition = "height 1s, width 1s, top 1s, left 1s, opacity 0.5s";
                popuptranition.style.left = "10vw";
                popuptranition.style.top = "10vh";
                popuptranition.style.height = "80vh";
                popuptranition.style.width = "80vw";
                setTimeout(function () {
                    setInfo(mapLocation);
                    popup.style.zIndex = "200";
                    popup.style.opacity = "1";
                    document.body.style.overflow = "hidden";
                }, 1000);
            }, 10);
        }, 10);
    }
}

function closeInfo() {
    popup.style.opacity = "0";
    setTimeout(function () {
        popup.style.zIndex = "-1";
        templeft = tempsquare.getBoundingClientRect().left;
        temptop = tempsquare.getBoundingClientRect().top;
        popuptranition.style.left = templeft + "px";
        popuptranition.style.top = temptop + "px";
        popuptranition.style.height = popupTransitionHeight;
        popuptranition.style.width = popupTransitionWidth;
        setTimeout(function () {
            popuptranition.style.opacity = "0";
            setTimeout(function () {
                popuptranition.style.zIndex = "-1";
                popuptranition.style.transition = "";
                setTimeout(function () {
                    canOpenPopup = true;
                    document.body.style.overflow = "auto";
                }, 10);
            }, 500);
        }, 1000);
    }, 500);
}

function setInfo(mapLocation) {
    switch (mapLocation) {
        case "indonesia":
            locationImagePath = "./images/indonesia.jpg";
            locationImageAlt = "Coffee Plantation in Indonesia";
            locationName = "Indonesia";
            locationDescription = "Lorem ipsum...";
            break;
        case "brazil":
            locationImagePath = "./images/brazil.jpg";
            locationImageAlt = "Coffee Plantation in Brazil";
            locationName = "Brazil";
            locationDescription = "Lorem ipsum...";
            break;
        case "vietnam":
            locationImagePath = "./images/vietnam.jpg";
            locationImageAlt = "Coffee Plantation in Vietnam";
            locationName = "Vietnam";
            locationDescription = "Lorem ipsum...";
            break;
        case "colombia":
            locationImagePath = "./images/colombia.jpg";
            locationImageAlt = "Coffee Plantation in Colombia";
            locationName = "Colombia";
            locationDescription = "Lorem ipsum...";
            break;
    }
    document.getElementById("locationImage").src = locationImagePath;
    document.getElementById("locationImage").alt = locationImageAlt;
    document.getElementById("locationName").innerHTML = locationName;
    document.getElementById("locationDescription").innerHTML = locationDescription;
}


// Responisve Web
function resizeElementsGrounds() {
    if (window.innerWidth < 768) {
        popupTransitionWidth = "3vw";
        popupTransitionHeight = "3vw";
        for (i = 0; i < document.getElementsByClassName("map-location").length; i++) {
            document.getElementsByClassName("map-location")[i].style.width = "3vw";
            document.getElementsByClassName("map-location")[i].style.height = "3vw";
        }
    } else if (window.innerWidth < 992) {
        popupTransitionWidth = "25px";
        popupTransitionHeight = "25px";
        for (i = 0; i < document.getElementsByClassName("map-location").length; i++) {
            document.getElementsByClassName("map-location")[i].style.width = "25px";
            document.getElementsByClassName("map-location")[i].style.height = "25px";
        }
    } else if (window.innerWidth < 1200) {
        popupTransitionWidth = "33px";
        popupTransitionHeight = "33px";
        for (i = 0; i < document.getElementsByClassName("map-location").length; i++) {
            document.getElementsByClassName("map-location")[i].style.width = "33px";
            document.getElementsByClassName("map-location")[i].style.height = "33px";
        }
    } else {
        popupTransitionWidth = "40px";
        popupTransitionHeight = "40px";
        for (i = 0; i < document.getElementsByClassName("map-location").length; i++) {
            document.getElementsByClassName("map-location")[i].style.width = "40px";
            document.getElementsByClassName("map-location")[i].style.height = "40px";
        }
    }
    popuptranition.style.width = popupTransitionWidth;
    popuptranition.style.height = popupTransitionHeight;
}

// Event Listeners
window.addEventListener("resize", resizeElementsGrounds);
window.addEventListener("load", resizeElementsGrounds);
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeInfo();
    }
});