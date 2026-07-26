// =====================================
// ZYSELL - APP.JS
// PARTIE 1 : INITIALISATION
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ANNÉE AUTOMATIQUE
    // =====================================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // =====================================
    // MENU MOBILE
    // =====================================

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenuBtn && mobileMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

        });

        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

            });

        });

    }
        // =====================================
    // HEADER AU DÉFILEMENT
    // =====================================

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }

    // =====================================
    // DÉFILEMENT FLUIDE
    // =====================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // =====================================
    // RECHERCHE SIMPLE
    // =====================================

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        const productCards = document.querySelectorAll(".product-card");

        searchInput.addEventListener("input", () => {

            const value = searchInput.value.trim().toLowerCase();

            productCards.forEach(card => {

                const content = card.textContent.toLowerCase();

                card.style.display = content.includes(value) ? "" : "none";

            });

        });

    }
        // =====================================
    // ANIMATIONS AU DÉFILEMENT
    // =====================================

    const animatedElements = document.querySelectorAll(
        ".category-card, .product-card, .feature-card, .creator-card, .testimonial-card"
    );

    if (animatedElements.length > 0) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.2
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });

    }

    // =====================================
    // BOUTON RETOUR EN HAUT
    // =====================================

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // =====================================
    // DÉSACTIVER LE GLISSER-DÉPOSER DES IMAGES
    // =====================================

    document.querySelectorAll("img").forEach(image => {
        image.setAttribute("draggable", "false");
    });

    // =====================================
    // PRÉCHARGEMENT DES IMAGES
    // =====================================

    document.querySelectorAll("img").forEach(image => {

        if (image.src) {

            const preload = new Image();
            preload.src = image.src;

        }

    });

    // =====================================
    // PAGE CHARGÉE
    // =====================================

    window.addEventListener("load", () => {
        document.body.classList.add("loaded");
    });

    // =====================================
    // MESSAGE DANS LA CONSOLE
    // =====================================

    console.log("================================");
    console.log("Bienvenue sur ZySell");
    console.log("Marketplace de produits numériques");
    console.log("================================");

});
    
