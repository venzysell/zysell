// ===========================
// ZYSELL - APP.JS
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Année automatique
    // ===========================

    const year = document.getElementById("currentYear");

    if(year){
        year.textContent = new Date().getFullYear();
    }

    // ===========================
    // Changement de thème
    // ===========================

    const themeButton = document.querySelector(".theme-btn");

    if(themeButton){

        const savedTheme = localStorage.getItem("theme");

        if(savedTheme === "dark"){
            document.body.classList.add("dark-theme");
        }

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark-theme");

            if(document.body.classList.contains("dark-theme")){
                localStorage.setItem("theme","dark");
            }else{
                localStorage.setItem("theme","light");
            }

        });

    }

});
// ===========================
// MENU MOBILE
// ===========================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuButton && navLinks){

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ===========================
// FERMER LE MENU APRÈS UN CLIC
// ===========================

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        if(navLinks){
            navLinks.classList.remove("active");
        }

    });

});

// ===========================
// HEADER AU DÉFILEMENT
// ===========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
// ===========================
// ANIMATIONS AU DÉFILEMENT
// ===========================

const animatedElements = document.querySelectorAll(
    ".category-card, .product-card, .feature-card, .creator-card, .testimonial-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

animatedElements.forEach(element => {

    observer.observe(element);

});

// ===========================
// DÉFILEMENT FLUIDE
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
// ===========================
// RECHERCHE SIMPLE
// ===========================

const searchInput = document.querySelector(".search-input");
const productCards = document.querySelectorAll(".product-card");

if(searchInput){

    searchInput.addEventListener("input", () => {

        const value = searchInput.value.toLowerCase().trim();

        productCards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if(text.includes(value)){

                card.style.display = "";

            }else{

                card.style.display = "none";

            }

        });

    });

}

// ===========================
// BOUTON RETOUR EN HAUT
// ===========================

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(!backToTop) return;

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

if(backToTop){

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}
// ===========================
// CHANGEMENT DE LANGUE
// ===========================

const languageSelect = document.querySelector(".language-select");

if(languageSelect){

    const savedLanguage = localStorage.getItem("language") || "fr";

    languageSelect.value = savedLanguage;

    document.documentElement.lang = savedLanguage;

    languageSelect.addEventListener("change", () => {

        const language = languageSelect.value;

        localStorage.setItem("language", language);

        document.documentElement.lang = language;

        updateLanguage(language);

    });

    updateLanguage(savedLanguage);

}

// ===========================
// TRADUCTIONS
// ===========================

function updateLanguage(language){

    const elements = document.querySelectorAll("[data-fr][data-en]");

    elements.forEach(element => {

        if(language === "en"){

            element.textContent = element.dataset.en;

        }else{

            element.textContent = element.dataset.fr;

        }

    });

}
// ===========================
// INITIALISATION GÉNÉRALE
// ===========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ===========================
// DÉSACTIVER LE DRAG DES IMAGES
// ===========================

document.querySelectorAll("img").forEach(image => {

    image.setAttribute("draggable","false");

});

// ===========================
// PRÉCHARGEMENT DES IMAGES
// ===========================

document.querySelectorAll("img").forEach(image => {

    const preload = new Image();

    preload.src = image.src;

});

// ===========================
// MESSAGE DANS LA CONSOLE
// ===========================

console.log("================================");
console.log("      Bienvenue sur ZySell");
console.log(" Marketplace de produits numériques");
console.log("================================");

// ===========================
// FIN DU FICHIER
// ===========================
