var stepNumber = 1;
var newItem;
var addItemCount = 1;
function nextStep() {
    switch (stepNumber) {
        case 1:
            document.getElementById("progress-1-2").style.transition = "background-position 0.5s";
            document.getElementById("progress-1-2").style.backgroundPositionX = "0px";
            setTimeout(function() {document.getElementById("progress-1-2").style.transition = "";}, 500);
            document.getElementById("progress-2").style.transition = "background-position 0.5s 0.2s";
            document.getElementById("progress-2").style.backgroundPositionX = "0px";
            setTimeout(function() {document.getElementById("progress-2").style.transition = "";}, 500);
            document.getElementById("previous-button").style.display = "block";
            setTimeout(function() {document.getElementById("previous-button").style.opacity = "1";}, 10);
            document.getElementById("order-menu").style.marginLeft = "-100vw";
            document.getElementById("order-menu").style.height = "0px";
            setTimeout(function() {document.getElementById("order-menu").style.overflow = "hidden";},1000);
            document.getElementById("order-payment").style.overflow = "visible";
            document.getElementById("order-payment").style.height = "auto";
            document.getElementById("order-payment").style.marginLeft = "0vw";
            document.getElementById("order-complete").style.marginLeft = "100vw";
            
            stepNumber += 1;
            break;
        case 2:
            document.getElementById("progress-2-3").style.transition = "background-position 0.5s";
            document.getElementById("progress-2-3").style.backgroundPositionX = "0px";
            setTimeout(function() {document.getElementById("progress-2-3").style.transition = "";}, 500);
            document.getElementById("progress-3").style.transition = "background-position 0.5s 0.2s";
            document.getElementById("progress-3").style.backgroundPositionX = "0px";
            setTimeout(function() {document.getElementById("progress-3").style.transition = "";}, 500);
            document.getElementById("previous-button").style.opacity = "0";
            document.getElementById("next-button").style.opacity = "0";
            setTimeout(function() {document.getElementById("previous-button").style.display = "none"; document.getElementById("next-button").style.display = "none";}, 500);
            document.getElementById("order-menu").style.marginLeft = "-300vw";
            document.getElementById("order-payment").style.marginLeft = "-200vw";
            document.getElementById("order-complete").style.overflow = "visible";
            document.getElementById("order-complete").style.height = "auto";
            document.getElementById("order-complete").style.marginLeft = "0vw";
            document.getElementById("order-complete").style.marginTop = "-500px";
            document.getElementById("order-complete").style.marginBottom = "500px";
            stepNumber += 1;
            break;
    }
}
function previousStep() {
    if (stepNumber === 2) {
        document.getElementById("progress-2").style.transition = "background-position 0.5s";
        document.getElementById("progress-2").style.backgroundPositionX = "-6.1vw";
        setTimeout(function() {document.getElementById("progress-2").style.transition = "";}, 500);
        document.getElementById("progress-1-2").style.transition = "background-position 0.5s 0.2s";
        document.getElementById("progress-1-2").style.backgroundPositionX = "-6.1vw";
        setTimeout(function() {document.getElementById("progress-1-2").style.transition = "";}, 500);
        document.getElementById("previous-button").style.opacity = "0";
        setTimeout(function() {document.getElementById("previous-button").style.display = "none";}, 500);
        document.getElementById("order-menu").style.height = "initial";
        document.getElementById("order-menu").style.overflow = "visible";
        document.getElementById("order-menu").style.marginLeft = "0vw";
        document.getElementById("order-payment").style.overflow = "hidden";
        document.getElementById("order-payment").style.height = "0px";
        document.getElementById("order-payment").style.marginLeft = "100vw";
        document.getElementById("order-complete").style.marginLeft = "200vw";
        stepNumber = 1;
    }
}
function removeItem(item) {
    document.getElementById("order-check").removeChild(document.getElementById("item" + item));
}
function askQuantity(item) {
    newItem = item;
    document.body.style.overflow = "hidden";
    document.getElementById("quantity-select").style.zIndex = 1000;
}
function addItem() {
    var tempElement = document.createElement("div");
    tempElement.classList.add("check-item");
    tempElement.id = "item" + addItemCount;
    document.getElementById("order-check").appendChild(tempElement);
    var tempElement = document.createElement("img");
    tempElement.classList.add("xbutton");
    tempElement.src = "images/xbutton.png";
    tempElement.alt = "Remove Item";
    tempElement.setAttribute("onclick", "removeItem(" + addItemCount + ")");
    document.getElementById("item" + addItemCount).appendChild(tempElement);
    var tempElement = document.createElement("img");
    tempElement.classList.add("icon");
    switch (newItem) {
        case "Americano":
        case "Cappuccino":
        case "Espresso":
        case "Latte":
        case "Machiatto":
        case "Mocha":
            tempElement.src = "images/hotcoffeepost.png";
            break;
        case "Iced Americano":
        case "Iced Cappuccino":
        case "Iced Espresso":
        case "Iced Latte":
        case "Iced Machiatto":
        case "Iced Mocha":
            tempElement.src = "images/coldcoffeepost.png";
            break;
        case "Croissant":
            tempElement.src = "images/croissantpost.png";
            break;
        case "Cookie":
            tempElement.src = "images/cookiepost.png";
            break;
        case "Cinnamon Roll":
            tempElement.src = "images/cinnamonrollpost.png";
            break;
        case "Doughnut":
            tempElement.src = "images/doughnutpost.png";
            break;
        case "Bagel":
            tempElement.src = "images/bagelpost.png";
            break;
        case "Muffin":
            tempElement.src = "images/muffinpost.png";
            break;
    }
    document.getElementById("item" + addItemCount).appendChild(tempElement);
    var tempElement = document.createElement("h4");
    tempElement.innerHTML = document.getElementById("quantity").value + " " + newItem;
    document.getElementById("item" + addItemCount).appendChild(tempElement);
    addItemCount += 1;
    document.getElementById("quantity-select").style.zIndex = "-1";
    document.body.style.overflow = "visible";
    
}
function cancelAdd() {
    document.getElementById("quantity-select").style.zIndex = "-1";
    newItem = undefined;
    document.body.style.overflow = "visible";
}