// Variable Delcaration
var dropdownOpen = 0;
var dropdownHeight = "0";

// Header Navigation
function showNav() {
    if (dropdownOpen === 0) {
        document.getElementById("dropdown").style.top = "50px";
        for (i = 0; i < document.getElementById("dropdown").childElementCount; i++) {
            document.getElementById("dropdown").children[i].tabIndex = "0";
        }
        dropdownOpen = 1;
    } else {
        document.getElementById("dropdown").style.top = dropdownHeight + "px";
        for (i = 0; i < document.getElementById("dropdown").childElementCount; i++) {
            document.getElementById("dropdown").children[i].tabIndex = "-1";
        }
        dropdownOpen = 0;
    }
}
function autoCloseNav(event) {
    if (event.target !== document.getElementById("main-nav") && event.target !== document.getElementById("dropdown") && event.target !== document.getElementById("dropdownToggle")) {
        if (dropdownOpen === 1) {
            showNav();
        }
    }
    toggleOutlines(event);
}

// Responisive Web
function resizeElementsCommon() {
    if (window.innerWidth < 291) {
        dropdownHeight = "-260";
    } else if (window.innerWidth < 300) {
        dropdownHeight = "-210";
    } else if (window.innerWidth < 350) {
        dropdownHeight = "-160";
    } else if (window.innerWidth < 424) {
        dropdownHeight = "-150";
    } else if (window.innerWidth < 673) {
        dropdownHeight = "-100";
    } else {
        dropdownHeight = "-50";
    }
    if (dropdownOpen === 0) {
        document.getElementById("dropdown").style.top = dropdownHeight + "px";
    }
    document.getElementById("dropdown").style.transition = "top 0.5s ease-in-out";  
}

// Accessibility
function toggleOutlines(event) {
    if (event.code === "Tab" || event.code === "Escape") {
        document.body.classList.remove("using-mouse");
        document.body.classList.add("using-keyboard");
        document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
    } else if (event.code === "Enter") {
        if (document.activeElement === document.getElementById("dropdownToggle")) {
            document.getElementById("dropdownToggle").click();
        }
        document.body.classList.remove("using-mouse");
        document.body.classList.add("using-keyboard");
        document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth";
    } else {
        document.body.classList.add("using-mouse");
        document.body.classList.remove("using-keyboard");
        document.getElementsByTagName("html")[0].style.scrollBehavior = "auto";
    }
}

// Event Listeners
window.addEventListener("load", resizeElementsCommon);
window.addEventListener("resize", resizeElementsCommon);
window.addEventListener("click", autoCloseNav, event);
window.addEventListener("keydown", toggleOutlines, event);