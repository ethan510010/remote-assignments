const banner = document.querySelector(".banner");

banner.addEventListener('click', () => {
    const bannerTitleElement = document.querySelector(".banner h1")
    bannerTitleElement.textContent = "Have a Good Time!";
})