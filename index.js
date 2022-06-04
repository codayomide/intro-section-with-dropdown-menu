let id = (id) => document.getElementById(id);

const menuBtn = id("nav-menu-btn"),
    closeBtn = id("close-btn")
    navMenu = id("header-btns-container");

menuBtn.addEventListener("click", () => {
    navMenu.style.width = "100%";
});

closeBtn.addEventListener("click", () => {
    navMenu.style.width = "0%"
})