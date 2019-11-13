const banner = document.querySelector(".banner");

banner.addEventListener('click', () => {
    const bannerTitleElement = document.querySelector(".banner h1")
    bannerTitleElement.textContent = "Have a Good Time!";
})

let isShowBoxes2 = false;

const actionButton = document.querySelector(".boxes-1 .call-action")
actionButton.addEventListener('click', () => {
    isShowBoxes2 = !isShowBoxes2;
    const boxes2 = document.querySelector(".boxes-2")
    if (isShowBoxes2) {
        boxes2.style.display = "flex";
    } else {
        boxes2.style.display = "none";
    }
})

const menuIcon = document.querySelector(".burger-icon")
const sidebar = document.querySelector(".side-menu")
menuIcon.addEventListener("click", () => {
    sidebar.style.width = "50%";
})

const closeButton = document.querySelector(".side-menu .close-button")
closeButton.addEventListener("click", () => {
    sidebar.style.width = "0px";
})