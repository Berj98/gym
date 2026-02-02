let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", mobileMenu);

function mobileMenu(){
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("active");

    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.className = "fas fa-close";
    } else {
        menuIcon.className = "fas fa-bars";
    }
}

let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(n => n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navbar.classList.remove("active");
    menuIcon.className = "fas fa-bars";
}));

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});