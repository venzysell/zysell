// =====================================
// ZYSELL - LANGUAGE.JS
// =====================================

// Langues disponibles
const supportedLanguages = ["fr", "en"];

// Langue par défaut
let currentLanguage = "fr";

// Bouton / Sélecteur de langue
const languageSelector = document.querySelector(".language-select");

// =====================================
// CHARGER LA LANGUE ENREGISTRÉE
// =====================================

const savedLanguage = localStorage.getItem("language");

if(savedLanguage && supportedLanguages.includes(savedLanguage)){

    currentLanguage = savedLanguage;

}else{

    const browserLanguage = navigator.language.substring(0,2);

    if(supportedLanguages.includes(browserLanguage)){
        currentLanguage = browserLanguage;
    }

}

document.documentElement.lang = currentLanguage;

if(languageSelector){
    languageSelector.value = currentLanguage;
}
// =====================================
// DICTIONNAIRE DES TRADUCTIONS
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
// APPLIQUER LES TRADUCTIONS
// =====================================

function applyTranslations(){

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if(translations[currentLanguage] &&
           translations[currentLanguage][key]){

            element.textContent = translations[currentLanguage][key];

        }

    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if(translations[currentLanguage] &&
           translations[currentLanguage][key]){

            element.placeholder =
                translations[currentLanguage][key];

        }

    });
   // =====================================
// CHANGER LA LANGUE
// =====================================

function setLanguage(language){

    if(!supportedLanguages.includes(language)){
        return;
    }

    currentLanguage = language;

    localStorage.setItem("language", language);

    document.documentElement.lang = language;

    if(languageSelector){
        languageSelector.value = language;
    }

    applyTranslations();

}

// =====================================
// ÉVÉNEMENT DU SÉLECTEUR
// =====================================

if(languageSelector){

    languageSelector.addEventListener("change", (event)=>{

        setLanguage(event.target.value);

    });

}

// =====================================
// INITIALISATION
// =====================================

applyTranslations();

}
