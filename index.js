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

// Object.values(dropdownBtns).forEach(btn => {
//     let btnArrow = btn.children[0]
//     let dropdown = btn.children[1]

//     btn.addEventListener
//         if(btnArrow.src === "./images/icon-arrow-down.svg") {
//                 dropdown.style.padding = "15px";
//                 dropdown.style.height = "auto";
//                 btnArrow = "./images/icon-arrow-up.svg";
//         } else {
//                 dropdown.style.padding = "0%";
//                 dropdown.style.height = "0%";
//                 btnArrow = "./images/icon-arrow-down.svg";
//         };
// });

// displayDropdown = () => {
//     if(dropdownBtns.className == "open") {
//         dropdown.style.padding = "15px";
//         dropdown.style.height = "auto";
//         btnArrow = "./images/icon-arrow-up.svg";
//     } else {
//         dropdown.style.padding = "0%";
//         dropdown.style.height = "0%";
//         btnArrow = "./images/icon-arrow-down.svg";
//     };
// }

dropdownBtns1.onclick = () => {
    if (dropdown1.className == "open") {
        dropdown1.className = "";
        dropdownArrow1.style.transform = "rotate(0deg)";
    } else {
        dropdown1.className = "open";
        dropdownArrow1.style.transform = "rotate(180deg)";        
    };
}

dropdownBtns2.onclick = () => {
    if (dropdown2.className == "open") {
        dropdown2.className = "";
        dropdownArrow2.style.transform = "rotate(0deg)";
    } else {
        dropdown2.className = "open";
        dropdownArrow2.style.transform = "rotate(180deg)";        
    };
}
