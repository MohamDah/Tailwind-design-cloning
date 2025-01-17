const nav = document.querySelector("nav");

const img = nav.querySelector("[src='./assets/bigLogo.svg']")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 40){
        nav.classList.remove("mylg:h-28");
        nav.classList.add("mylg:h-20");

        img.classList.remove("h-12")
        img.classList.add("h-9")
    } else {
        nav.classList.remove("mylg:h-20");
        nav.classList.add("mylg:h-28");

        img.classList.remove("h-9");
        img.classList.add("h-12");
    }

})