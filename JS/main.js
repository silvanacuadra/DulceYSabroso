const elementsNav = document.querySelectorAll(".menu-nav a");
const titleHeader = document.querySelector("header .title");

// EFECTO EN EL MENÚ

for (let i = 0; i < elementsNav.length; i++) {
    elementsNav[i].animate([{
        transform: "translateY(-200px)"
    }, {
        transform: "translateY(0)"
    }], {duration: 2000 + (i * 500)})
}

