let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const menuBtn = id("nav-menu-btn"),
    closeBtn = id("close-btn"),
    navMenu = id("header-btns-container"),

    dropdownBtns1 = id("dropdown-btns1"),
    dropdownBtns2 = id("dropdown-btns2"),

    dropdownArrow1 = id("dropdown-arrow1"),
    dropdownArrow2 = id("dropdown-arrow2"),
    
    dropdown1 = id("dropdown1"),
    dropdown2 = id("dropdown2");

menuBtn.addEventListener("click", () => {
    navMenu.style.width = "100%";
});

closeBtn.addEventListener("click", () => {
    navMenu.style.width = "0%";
});

dropdownBtns1.onclick = () => {
    if (dropdown1.className == "open") {
        dropdown1.className = "";
        // dropdown1.style.display = "block";
        dropdownArrow1.style.transform = "rotate(0deg)";
    } else {
        dropdown1.className = "open";
        dropdownArrow1.style.transform = "rotate(180deg)";
        // dropdown1.style.display = "none";        
    };
}

dropdownBtns2.onclick = () => {
    if (dropdown2.className == "open") {
        dropdown2.className = "";
        dropdownArrow2.style.transform = "rotate(0deg)";
        // dropdown2.style.display = "block";
    } else {
        dropdown2.className = "open";
        dropdownArrow2.style.transform = "rotate(180deg)";
        // dropdown2.style.display = "none";        
    };
}
