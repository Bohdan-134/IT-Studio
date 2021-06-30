const btnOpenMenu = document.querySelector("#btn-menu");
const closedBtnMenu = document.querySelector("#closed-btn-menu");
const menu = document.querySelector(".menu");

btnOpenMenu.onclick = function() {
    menu.style.top = "0%";
}

closedBtnMenu.onclick = function() {
    menu.style.top = "-200%";
}


AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'easy',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});