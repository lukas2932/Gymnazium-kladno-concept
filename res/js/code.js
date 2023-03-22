
const menuSecondOne = document.getElementById("menuSecondOne");
const menuUnderOne = document.getElementById("menuUnderOne");
const menuUnderSecondOne = document.getElementById("menuUnderSecondOne");
const menuSecondHoverOne = document.getElementById("menuSecondHoverOne");

function menuSecondAppear(){
    menuUnderOne.style.display = "block";
    menuUnderOne.style.animation = "menuUnderAnimation 1s forwards";
}

menuSecondOne.onmouseover = () => {
    menuSecondAppear();
    menuUnderSecondOne.style.color = "black";
}
menuSecondOne.onmouseout = () => {
    menuUnderOne.style.display = "none";
    menuSecondOne.style.color = "black" 
    menuSecondHoverOne.style.color = "black";
}
