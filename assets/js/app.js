/* =======================================================
   ZYSELL APP
   Compatible avec le nouveau index.html
======================================================= */

"use strict";

/* =======================================================
   SÉLECTEURS
======================================================= */

const body = document.body;

const header = document.querySelector(".header");

const mobileMenu = document.getElementById("mobileMenu");

const mobileMenuBtn = document.getElementById("mobileMenuBtn");

const themeBtn = document.getElementById("themeBtn");

const languageBtn = document.getElementById("languageBtn");

const countryBtn = document.getElementById("countryBtn");

const heroSearchForm = document.querySelector(".hero-search");

const heroSearchInput = document.getElementById("heroSearchInput");

/* =======================================================
   MENU MOBILE
======================================================= */

if (mobileMenuBtn && mobileMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        mobileMenuBtn.classList.toggle("active");

    });

}
/* =======================================================
   FERMER LE MENU MOBILE
======================================================= */

if (mobileMenu) {

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            mobileMenuBtn?.classList.remove("active");

        });

    });

}

/* =======================================================
   HEADER AU SCROLL
======================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header?.classList.add("scrolled");

    } else {

        header?.classList.remove("scrolled");

    }

});

/* =======================================================
   RECHERCHE
======================================================= */

heroSearchForm?.addEventListener("submit", (event) => {

    event.preventDefault();

    const value = heroSearchInput.value.trim();

    if (!value) return;

    window.location.href =
        `explore.html?search=${encodeURIComponent(value)}`;

});
/* =======================================================
   ANIMATION DES CARTES
======================================================= */

document.querySelectorAll(
    ".product-card, .category-card, .creator-card, .feature-card, .testimonial-card"
).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("hover");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("hover");

    });

});

/* =======================================================
   BOUTON RETOUR EN HAUT
======================================================= */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

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
/* =======================================================
   FAQ
======================================================= */

document.querySelectorAll(".faq details").forEach(item => {

    item.addEventListener("toggle", () => {

        if (!item.open) return;

        document.querySelectorAll(".faq details").forEach(other => {

            if (other !== item) {

                other.open = false;

            }

        });

    });

});

/* =======================================================
   INITIALISATION
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ ZySell chargé avec succès.");

    document.body.classList.add("loaded");

});

/* =======================================================
   FIN DU FICHIER
======================================================= */
