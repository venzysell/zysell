/* =======================================================
   ZYSELL LANGUAGE
======================================================= */

"use strict";

/* =======================================================
   ÉLÉMENTS
======================================================= */

const languageSelect=document.getElementById("languageSelect");

const languageButtons=document.querySelectorAll("[data-language]");

const storageKey="zysell-language";

/* =======================================================
   TRADUCTIONS
======================================================= */

const translations={

fr:{

home:"Accueil",

explore:"Explorer",

products:"Produits",

stores:"Boutiques",

login:"Connexion",

signup:"Inscription",
pricing:"Tarifs",

contact:"Contact",

start:"Commencer",
dashboard:"Tableau de bord",

search:"Rechercher",

wishlist:"Favoris",

orders:"Commandes",

downloads:"Téléchargements",

settings:"Paramètres",

logout:"Déconnexion",

heroTitle:"Achetez et vendez des produits numériques",

heroSubtitle:"Découvrez des milliers de produits numériques créés par des créateurs du monde entier.",

searchPlaceholder:"Rechercher un produit, une boutique...",

heroStart:"Commencer gratuitement",

heroExplore:"Explorer les produits",

productsCount:"Produits numériques",

sellersCount:"Vendeurs",

countriesCount:"Pays",

supportCount:"Support",

bestSales:"Les meilleures ventes",

popularProducts:"Produits populaires",

popularProductsDesc:"Découvrez les produits numériques les plus vendus sur Zysell."

},

},

en:{

home:"Home",

explore:"Explore",

products:"Products",

stores:"Stores",

login:"Login",

signup:"Sign Up",

pricing:"Pricing",

contact:"Contact",

start:"Get Started",

dashboard:"Dashboard",

search:"Search",

wishlist:"Wishlist",

orders:"Orders",

downloads:"Downloads",

settings:"Settings",

logout:"Logout",

heroTitle:"Buy and sell digital products",

heroSubtitle:"Discover thousands of digital products created by creators around the world.",

searchPlaceholder:"Search for a product, store...",

heroStart:"Get Started Free",

heroExplore:"Explore Products",

supportCount:"Support",

bestSales:"Best Sellers",

popularProducts:"Popular Products",

popularProductsDesc:"Discover the best-selling digital products on Zysell."

}

};

/* =======================================================
   SAUVEGARDE
======================================================= */

function saveLanguage(language){

localStorage.setItem(storageKey,language);

}

/* =======================================================
   CHARGEMENT
======================================================= */

function loadLanguage(){

return localStorage.getItem(storageKey)||"fr";

}/* =======================================================
   APPLIQUER LES TRADUCTIONS
======================================================= */

function applyLanguage(language){

const dictionary=translations[language]||translations.fr;

document.documentElement.lang=language;

document.querySelectorAll("[data-i18n]").forEach(element=>{

const key=element.dataset.i18n;

if(dictionary[key]){

element.textContent=dictionary[key];

}

});

document.querySelectorAll("[data-i18n-placeholder]").forEach(element=>{

const key=element.dataset.i18nPlaceholder;

if(dictionary[key]){

element.setAttribute(

"placeholder",

dictionary[key]

);

}

});

if(languageSelect){

languageSelect.value=language;

}

document.querySelectorAll("[data-language]").forEach(button=>{

button.classList.toggle(

"active",

button.dataset.language===language

);

});

saveLanguage(language);

}

/* =======================================================
   CHANGER DE LANGUE
======================================================= */

function changeLanguage(language){

if(!translations[language]){

language="fr";

}

applyLanguage(language);

}

/* =======================================================
   SÉLECTEUR
======================================================= */

if(languageSelect){

languageSelect.addEventListener("change",event=>{

changeLanguage(event.target.value);

});

}

/* =======================================================
   BOUTONS DE LANGUE
======================================================= */

languageButtons.forEach(button=>{

button.addEventListener("click",()=>{

changeLanguage(button.dataset.language);

});

});/* =======================================================
   DÉTECTION DE LA LANGUE DU NAVIGATEUR
======================================================= */

function detectBrowserLanguage(){

const browserLanguage=

navigator.language||

navigator.userLanguage||

"fr";

return browserLanguage.toLowerCase().startsWith("en")

? "en"

: "fr";

}

/* =======================================================
   INITIALISATION
======================================================= */

function initializeLanguage(){

const savedLanguage=loadLanguage();

const language=savedLanguage||detectBrowserLanguage();

applyLanguage(language);

}

document.addEventListener("DOMContentLoaded",()=>{

initializeLanguage();

});

/* =======================================================
   SYNCHRONISATION ENTRE ONGLETS
======================================================= */

window.addEventListener("storage",(event)=>{

if(event.key!==storageKey){

return;

}

const language=event.newValue||"fr";

applyLanguage(language);

});

/* =======================================================
   API GLOBALE
======================================================= */

window.ZysellLanguage={

current:()=>document.documentElement.lang,

set:changeLanguage,

get:loadLanguage,

detect:detectBrowserLanguage

};

/* =======================================================
   VALIDATION
======================================================= */

console.log(

`Langue active : ${document.documentElement.lang}`

);

/* =======================================================
   FIN DU FICHIER
======================================================= */
