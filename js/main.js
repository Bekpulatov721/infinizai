window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.querySelector("header");

function shrink() {
    if (scrollY > 200) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}
