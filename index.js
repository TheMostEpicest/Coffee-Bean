// Local Storage
function storage(divName) {
    localStorage.setItem("desiredTab", divName);
}

// Responsive Web
function resizeElementsMain() {
    if (window.innerWidth < 992) {
        document.getElementsByClassName("product-quickview")[0].style.paddingTop = "40px";
        document.getElementsByClassName("product-quickview")[0].style.paddingBottom = "40px";
        document.getElementById("owner-img").style.margin = "0 auto";
        document.getElementById("owner-h1").parentElement.style.paddingLeft = "0px";
        document.getElementById("owner-img").parentElement.style.paddingRight = "0px";
    } else {
        document.getElementsByClassName("product-quickview")[0].style.paddingTop = "140px";
        document.getElementsByClassName("product-quickview")[0].style.paddingBottom = "140px";
        document.getElementById("owner-img").style.margin = "0 auto 0 0";
        document.getElementById("owner-h1").parentElement.style.paddingLeft = "15px";
        document.getElementById("owner-img").parentElement.style.paddingRight = "15px";
    }
}

// Event Listeners
window.addEventListener("load", resizeElementsMain);
window.addEventListener("resize", resizeElementsMain);