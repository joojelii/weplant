var btnScrollTop = document.querySelector(".btn__top");
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav__links");
const allLinks = document.querySelector(".nav__links");


// Smooth scroll for anchor link navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fixed nav on scroll

window.addEventListener("scroll", () =>{

    btnScrollTop.classList.toggle("scroll_top", window.scrollY > 100);
});

btnScrollTop.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})


// Burger menu



burger.addEventListener("click", () => {

    burger.classList.toggle("toggle");

    navLinks.classList.toggle("nav-active");
})


// For removing the opened nav when in mobile 
allLinks.addEventListener("click", () => {
    allLinks.classList.add("collapse");

    setTimeout(function() {
        allLinks.classList.remove("collapse");
    }, 1000);
    navLinks.classList.remove("nav-active");
    burger.classList.remove("toggle");
})
