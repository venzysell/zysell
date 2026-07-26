// =====================================
// ZYSELL - LANGUAGE.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // CONFIGURATION
    // =====================================

    const supportedLanguages = ["fr", "en"];
    const languageSelector = document.querySelector(".language-select");

    // =====================================
    // TRADUCTIONS
    // =====================================

    const translations = {

        fr: {

            home: "Accueil",
            categories: "Catégories",
            products: "Produits",
            creators: "Créateurs",
            contact: "Contact",

            heroTitle: "Achetez et vendez des produits numériques",

            heroSubtitle: "La plateforme idéale pour les créateurs, développeurs, designers et entrepreneurs.",

            searchPlaceholder: "Rechercher un produit...",

            searchButton: "Rechercher",

            explore: "Explorer",

            startSelling: "Commencer à vendre"

        },

        en: {

            home: "Home",
            categories: "Categories",
            products: "Products",
            creators: "Creators",
            contact: "Contact",

            heroTitle: "Buy and sell digital products",

            heroSubtitle: "The ideal marketplace for creators, developers, designers and entrepreneurs.",

            searchPlaceholder: "Search for a product...",

            searchButton: "Search",

            explore: "Explore",

            startSelling: "Start Selling"

        }

    };

    // =====================================
    // LANGUE ACTUELLE
    // =====================================

    let currentLanguage = localStorage.getItem("language");

    if (!supportedLanguages.includes(currentLanguage)) {

        const browserLanguage = navigator.language.slice(0, 2);

        currentLanguage = supportedLanguages.includes(browserLanguage)
            ? browserLanguage
            : "fr";

    }

    // =====================================
    // APPLIQUER LES TRADUCTIONS
    // =====================================

    function applyTranslations() {

        document.documentElement.lang = currentLanguage;

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }

        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

            const key = element.dataset.i18nPlaceholder;

            if (translations[currentLanguage][key]) {
                element.placeholder = translations[currentLanguage][key];
            }

        });

        if (languageSelector) {
            languageSelector.value = currentLanguage;
        }

    }

    // =====================================
    // CHANGER LA LANGUE
    // =====================================

    function setLanguage(language) {

        if (!supportedLanguages.includes(language)) return;

        currentLanguage = language;

        localStorage.setItem("language", language);

        applyTranslations();

    }

    // =====================================
    // ÉVÉNEMENT DU SÉLECTEUR
    // =====================================

    if (languageSelector) {

        languageSelector.addEventListener("change", (event) => {

            setLanguage(event.target.value);

        });

    }

    // =====================================
    // SYNCHRONISATION ENTRE ONGLETS
    // =====================================

    window.addEventListener("storage", (event) => {

        if (
            event.key === "language" &&
            supportedLanguages.includes(event.newValue)
        ) {

            currentLanguage = event.newValue;

            applyTranslations();

        }

    });

    // =====================================
    // INITIALISATION
    // =====================================

    applyTranslations();

});
