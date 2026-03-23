document.addEventListener("DOMContentLoaded", () => {
    // 1. Reveal au Scroll
    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };
    window.addEventListener("scroll", reveal);
    reveal();

    // 2. Navigation Active (ScrollSpy)
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            if (pageYOffset >= section.offsetTop - 150) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // 3. Burger Menu
    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");

    if (burger && menu) {
        burger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // Fermeture auto sur clic (mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
});