const btnOpenMenu = document.querySelector("#btn-menu");
const closedBtnMenu = document.querySelector("#closed-btn-menu");
const menu = document.querySelector(".menu");

btnOpenMenu.onclick = function() {
    menu.style.top = "0%";
}

closedBtnMenu.onclick = function() {
    menu.style.top = "-200%";
}