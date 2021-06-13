const headerTitle = document.querySelector("header .title");
const aboutArticle = document.querySelector(".about-me article");

window.onscroll = () => {
    let windowWidth = window.innerWidth;

    if (windowWidth > 800) {
        let down = window.scrollY;

        headerTitle.style.transform = "translate(0px, " + down / 2 + "%)";
        aboutArticle.style.transform = "translate(0px, -" + down / 2 + "%)";
    }
}

window.onresize = () => {
    let windowWidth = window.innerWidth;

    if (windowWidth < 800) {

        headerTitle.style.transform = "translate(0px, 0px)";
        aboutArticle.style.transform = "translate(0px, 0px)";
    }
}