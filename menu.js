// Variable declarations
var openingsize;
var infoWindow = document.getElementById("infoTable");
var infoImage = document.getElementById("itemImage");
var infoName = document.getElementById("itemName");
var infoCalorie = document.getElementById("itemCalorie");
var infoCaffine = document.getElementById("itemCaffine");
var infoDescription = document.getElementById("itemDescription");
var calorie;
var caffine;
var imagePath;
var description;
var allergen;

// Menu Dropdowns
function expandMenu(divName) {
    if (document.getElementById(divName).classList.contains("open") !== true) {
        document.getElementById(divName).children[1].style.height = openingSize + "px";
        document.getElementById(divName).classList.add("open");
        document.getElementById("toggle-arrow-" + divName).style.transform = "rotate(180deg)";
    } else {
        document.getElementById(divName).children[1].style.height = "0px";
        document.getElementById(divName).classList.remove("open");
        document.getElementById("toggle-arrow-" + divName).style.transform = "rotate(0deg)";
    }
}

// Pop-up Display
function displayInfo(item) {
    document.body.style.overflow = "hidden";
    infoWindow.style.opacity = "1";
    infoWindow.style.zIndex = "100";
    switch (item) {
        case "Americano":
            calorie = "10-20 calories";
            caffine = "150-300mg of Caffine";
            imagePath = "./images/hotcoffeepost.png";
            description = "Brewed espresso and water.<br /><small>Sizes: S / M / L</small>";
            allergen = "";
            break;
        case "Cappuccino":
            calorie = "90-150 calories";
            caffine = "75-150mg of Caffine";
            imagePath = "./images/hotcoffeepost.png";
            description = "Brewed espresso, milk foam, and steamed milk.<br /><small>Sizes: S / M / L</small>";
            allergen = " <sup>&#10013;</sup>";
            break;
        case "Espresso":
            calorie = "5-15 calories";
            caffine = "75-225mg of Caffine";
            imagePath = "./images/hotcoffeepost.png";
            description = "Brewed espresso shot.<br /><small>Sizes: 1 shot / 2 shots / 3 shots</small>";
            allergen = "";
            break;
        case "Latte":
            calorie = "150-250 calories";
            caffine = "75-150mg of Caffine";
            imagePath = "./images/hotcoffeepost.png";
            description = "Brewed espresso and steamed milk.<br /><small>Sizes: S / M / L</small>";
            allergen = " <sup>&#10013;</sup>";
            break;
        case "Machiatto":
            calorie = "10-20 calories";
            caffine = "75-225mg of Caffine";
            imagePath = "./images/hotcoffeepost.png";
            description = "Brewed espresso shot and milk foam.<br /><small>Sizes: 1 shot / 2 shots / 3 shots</small>";
            allergen = " <sup>&#10013;</sup>";
            break;
        case "Mocha":
            calorie = "290-450 calories";
            caffine = "95-185mg of Caffine";
            imagePath = "./images/hotcoffeepost.png";
            description = "Brewed espresso, steamed milk, chocolate syrup, and whipped cream.<br /><small>Sizes: S / M / L</small>";
            allergen = " <sup>&#10013;</sup>";
            break;
        case "Iced Americano":
            calorie = "10-15 calories";
            caffine = "150-300mg of Caffine";
            imagePath = "./images/coldcoffeepost.png";
            description = "Brewed espresso, water, and ice.<br /><small>Sizes: S / M / L</small>";
            allergen = "";
            break;
        case "Iced Cappuccino":
            calorie = "90-150 calories";
            caffine = "75-150mg of Caffine";
            imagePath = "./images/coldcoffeepost.png";
            description = "Brewed espresso, milk foam, steamed milk, and ice.<br /><small>Sizes: S / M / L</small>";
            allergen = " <sup>&#10013;</sup>";
            break;
        case "Iced Espresso":
            calorie = "5-15 calories";
            caffine = "75-225mg of Caffine";
            imagePath = "./images/coldcoffeepost.png";
            description = "Brewed espresso shot and ice.<br /><br /><small>Sizes: 1 shot / 2 shots / 3 shots</small>";
            allergen = "";
            break;
        case "Iced Latte":
            calorie = "100-180 calories";
            caffine = "75-225mg of Caffine";
            imagePath = "./images/coldcoffeepost.png";
            description = "Brewed espresso, steamed milk, and ice.<br /><small>Sizes: S / M / L</small>";
            allergen = " <sup>&#10013;</sup>";
            break;
        case "Iced Machiatto":
            calorie = "10-20 calories";
            caffine = "75-225mg of Caffine";
            imagePath = "./images/coldcoffeepost.png";
            description = "Brewed espresso shot, milk foam, and ice.<br /><small>Sizes: 1 shot / 2 shots / 3 shots</small>";
            allergen = " <sup>&#10013;</sup>";
            break;
        case "Iced Mocha":
            calorie = "260-450 calories";
            caffine = "95-265mg of Caffine";
            imagePath = "./images/coldcoffeepost.png";
            description = "Brewed espresso, steamed milk, chocolate syrup, whipped cream, and ice.<br /><small>Sizes: S / M / L</small>";
            allergen = " <sup>&#10013;</sup>";
            break;
        case "Croissant":
            calorie = "260-340 calories";
            caffine = "";
            imagePath = "./images/croissantpost.png";
            description = "<br /><small>Types: Plain / Chocolate</small>";
            allergen = " <sup>&#10045;</sup>";
            break;
        case "Cookie":
            calorie = "210-360 calories";
            caffine = "";
            imagePath = "./images/cookiepost.png";
            description = "<br /><small>Types: Chocolate Chip / Snickerdoodle / M&M<sup>TM</sup></small>";
            allergen = " <sup>&#10045;</sup>";
            break;
        case "Cinnamon Roll":
            calorie = "420 calories";
            caffine = "";
            imagePath = "./images/cinnamonrollpost.png";
            description = "<br /><small>Types: Cinnamon</small>";
            allergen = " <sup>&#10045;</sup>";
            break;
        case "Doughnut":
            calorie = "270-510 calories";
            caffine = "";
            imagePath = "./images/doughnutpost.png";
            description = "<br /><small>Types: Glazed / Chocolate / Apple Fritter</small>";
            allergen = " <sup>&#10045;</sup>";
            break;
        case "Bagel":
            calorie = "100-280 calories";
            caffine = "";
            imagePath = "./images/bagelpost.png";
            description = "<br /><small>Types: Plain / Cinnamon Raisin / Everything</small>";
            allergen = " <sup>&#10013;&#10013;</sup>";
            break;
        case "Muffin":
            calorie = "360-390 calories";
            caffine = "";
            imagePath = "./images/muffinpost.png";
            description = "<br /><small>Types: Chocolate Chip / Blueberry / Lemon Poppyseed</small>";
            allergen = " <sup>&#10045;</sup>";
            break;
    }
    infoName.innerHTML = item + allergen;
    infoCalorie.innerHTML = calorie;
    infoCaffine.innerHTML = caffine;
    infoImage.src = imagePath;
    infoDescription.innerHTML = description;
}
function hideInfo() {
    infoWindow.style.opacity = "0";
    document.body.style.overflow = "scroll";
    setTimeout(function () {infoWindow.style.zIndex = "-1";}, 500);
}

// Responsive Web
function resizeElementsMenu() {
    if (window.innerWidth < 992) {
        openingSize = 900;
        document.getElementById("itemContents").style.marginTop = "0px";
        document.getElementById("itemName").style.fontSize = "45px";
        document.getElementById("itemCalorie").style.fontSize = "15px";
        document.getElementById("itemCaffine").style.fontSize = "15px";
        document.getElementById("itemDescription").style.fontSize = "22.5px";
    } else {
        openingSize = 600;
        document.getElementById("itemContents").style.marginTop = "15vh";
        document.getElementById("itemName").style.fontSize = "60px";
        document.getElementById("itemCalorie").style.fontSize = "20px";
        document.getElementById("itemCaffine").style.fontSize = "20px";
        document.getElementById("itemDescription").style.fontSize = "30px";
    }
    if (document.getElementById("hotDrinks").classList.contains("open") === true) {
        document.getElementById("hotDrinks").children[1].style.height = openingSize + "px";
    }
    if (document.getElementById("coldDrinks").classList.contains("open") === true) {
        document.getElementById("coldDrinks").children[1].style.height = openingSize + "px";
    }
    if (document.getElementById("bakedGoods").classList.contains("open") === true) {
        document.getElementById("bakedGoods").children[1].style.height = openingSize + "px";
    }
    if (window.innerWidth < 676) {
        dropdownOffset = "-75px";
    } else {
        dropdownOffset = "-25px";
    }
    if (dropdownOpen === 0) {
        document.getElementById("dropdown").style.top = dropdownOffset;
    }
}

// Accessability

// Event Listeners
window.addEventListener("resize", resizeElementsMenu);
window.addEventListener("load", function (event) {
    resizeElementsMenu();
    if (localStorage.getItem("desiredTab") !== "null") {
        document.getElementById(localStorage.getItem("desiredTab")).children[1].style.height = openingSize + "px";
        document.getElementById(localStorage.getItem("desiredTab")).classList.add("open");
        document.getElementById("toggle-arrow-" + localStorage.getItem("desiredTab")).style.transform = "rotate(180deg)";
        window.location.hash = localStorage.getItem("desiredTab") + "-tag";
        localStorage.setItem("desiredTab", "null");
    }
    for (i = 0; i < document.getElementsByClassName("itemDropdown").length; i++) {
        document.getElementsByClassName("content")[i].style.transition = "1s height";
        document.getElementsByClassName("toggle-arrow")[i].style.transition = "transform 1s";
    }
});
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        hideInfo();
    }
});