const banner = document.querySelector(".banner");

banner.addEventListener('click', () => {
    const bannerTitleElement = document.querySelector(".banner h1")
    bannerTitleElement.textContent = "Have a Good Time!";
})

let isShowBoxes2 = false;

// https://www.w3schools.com/howto/howto_js_media_queries.asp
const actionButton = document.querySelector(".boxes-1 .call-action")
actionButton.addEventListener('click', () => {
    isShowBoxes2 = !isShowBoxes2;
    const boxes2 = document.querySelector(".boxes-2")
    // https://www.w3schools.com/howto/howto_js_add_class.asp
    if (isShowBoxes2) {
        boxes2.classList.remove("boxes2-to-hide")
        boxes2.classList.add("boxes2-to-show")    
    } else {
        boxes2.classList.remove("boxes2-to-show")
        boxes2.classList.add("boxes2-to-hide")    
    }
})

// 漢堡選單
const menuIcon = document.querySelector(".burger-icon")
const sidebar = document.querySelector(".side-menu")
menuIcon.addEventListener("click", () => {
    sidebar.style.width = "50%";
    sidebar.style.borderLeft = "1px solid black";
})

const closeButton = document.querySelector(".side-menu .close-button")
closeButton.addEventListener("click", () => {
    sidebar.style.width = "0px";
    sidebar.style.borderLeft = "0px solid black";
})