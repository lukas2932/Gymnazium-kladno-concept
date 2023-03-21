
const menuSecondOne = document.getElementById("menuSecondOne");
const menuUnderOne = document.getElementById("menuUnderOne");
const menuUnderSecondOne = document.getElementById("menuUnderSecondOne");
const menuSecondHoverOne = document.getElementById("menuSecondHoverOne");

menuSecondOne.onmouseover = () => {
    menuUnderOne.style.display = "grid";
    menuUnderSecondOne.style.color = "black";
}
menuSecondOne.onmouseout = () => {
    menuUnderOne.style.display = "none";
    menuSecondOne.style.color = "black" 
    menuSecondHoverOne.style.color = "black";
}
