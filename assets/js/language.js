/* =======================================================
   ZYSELL LANGUAGE
======================================================= */

"use strict";

/* =======================================================
   LANGUE PAR DÉFAUT
======================================================= */

let currentLanguage = localStorage.getItem("language") || "fr";

/* =======================================================
   TRADUCTIONS
======================================================= */

const translations = {

    fr: {

        home: "Accueil",
        explore: "Explorer",
        categories: "Catégories",
        creators: "Créateurs",
        faq: "FAQ",
        login: "Connexion",
        signup: "Créer un compte",

        heroTitle: "Achetez et vendez des produits numériques",

        heroSubtitle:
            "La plateforme africaine pour vendre des formations, ebooks, templates, logiciels et bien plus.",

        heroButton: "Commencer",

        popularProducts: "Produits populaires",

        whyZySell: "Pourquoi choisir ZySell ?",

        testimonials: "Ils nous font confiance"

    },

    en: {

        home: "Home",
        explore: "Explore",
        categories: "Categories",
        creators: "Creators",
        faq: "FAQ",
        login: "Login",
        signup: "Create account",

        heroTitle: "Buy and sell digital products",

        heroSubtitle:
            "The African marketplace for courses, ebooks, templates, software and much more.",

        heroButton: "Get Started",

        popularProducts: "Popular Products",

        whyZySell: "Why Choose ZySell?",

        testimonials: "Trusted by our users"

    }

};/* =======================================================
   CHANGER LA LANGUE
======================================================= */

function applyLanguage(language) {

    currentLanguage = language;

    localStorage.setItem("language", language);

    document.documentElement.lang = language;

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (translations[language] && translations[language][key]) {

            element.textContent = translations[language][key];

        }

    });

}/* =======================================================
   BOUTONS DE LANGUE
======================================================= */

const languageButtons = document.querySelectorAll("[data-language]");

languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const language = button.dataset.language;

        applyLanguage(language);

    });

});/* =======================================================
   INITIALISATION DE LA LANGUE
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    applyLanguage(currentLanguage);

});
