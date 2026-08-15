/* =========================================================
   ZYSELL — APP.JS
   Version 1 — Interface principale
========================================================= */

"use strict";


/* =========================================================
   CONFIGURATION
========================================================= */

const ZYSELL_CONFIG = {
    defaultLanguage: "fr",
    defaultTheme: "system"
};


/* =========================================================
   ÉLÉMENTS
========================================================= */

const languageFR =
    document.getElementById("language-fr");

const languageEN =
    document.getElementById("language-en");

const currentYear =
    document.getElementById("current-year");


/* =========================================================
   LANGUE
========================================================= */

function getLanguage() {

    const savedLanguage =
        localStorage.getItem("zysell-language");

    if (
        savedLanguage === "fr" ||
        savedLanguage === "en"
    ) {
        return savedLanguage;
    }

    return ZYSELL_CONFIG.defaultLanguage;
}


function setLanguage(language) {

    if (
        language !== "fr" &&
        language !== "en"
    ) {
        language = ZYSELL_CONFIG.defaultLanguage;
    }


    /*
     * Définit la langue officielle de la page.
     */

    document.documentElement.lang = language;


    /*
     * Récupère tous les éléments possédant
     * une traduction française et anglaise.
     */

    const elements =
        document.querySelectorAll(
            "[data-fr][data-en]"
        );


    /*
     * Une seule langue est affichée.
     */

    elements.forEach(function(element) {

        const frenchText =
            element.getAttribute("data-fr");

        const englishText =
            element.getAttribute("data-en");


        if (language === "fr") {

            element.textContent =
                frenchText;

        } else {

            element.textContent =
                englishText;

        }

    });


    /*
     * Mémorise la langue choisie.
     */

    localStorage.setItem(
        "zysell-language",
        language
    );


    updateLanguageButtons(language);
}


/* =========================================================
   BOUTONS FR / EN
========================================================= */

function updateLanguageButtons(language) {

    if (languageFR) {

        languageFR.setAttribute(
            "aria-pressed",
            language === "fr"
                ? "true"
                : "false"
        );

        languageFR.classList.toggle(
            "active",
            language === "fr"
        );

    }


    if (languageEN) {

        languageEN.setAttribute(
            "aria-pressed",
            language === "en"
                ? "true"
                : "false"
        );

        languageEN.classList.toggle(
            "active",
            language === "en"
        );

    }

}


if (languageFR) {

    languageFR.addEventListener(
        "click",
        function() {

            setLanguage("fr");

        }
    );

}


if (languageEN) {

    languageEN.addEventListener(
        "click",
        function() {

            setLanguage("en");

        }
    );

}


/* =========================================================
   ANNÉE DU FOOTER
========================================================= */

function updateYear() {

    if (!currentYear) {
        return;
    }


    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   THÈME
========================================================= */

function getSystemTheme() {

    const darkMode =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        );


    return darkMode.matches
        ? "dark"
        : "light";
}


function getThemePreference() {

    const savedTheme =
        localStorage.getItem(
            "zysell-theme"
        );


    if (
        savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system"
    ) {

        return savedTheme;

    }


    return ZYSELL_CONFIG.defaultTheme;
}


function applyTheme(preference) {

    let theme =
        preference;


    if (preference === "system") {

        theme =
            getSystemTheme();

    }


    document.documentElement.setAttribute(
        "data-theme",
        theme
    );


    document.documentElement.setAttribute(
        "data-theme-preference",
        preference
    );

}


/* =========================================================
   BOUTON DE THÈME
========================================================= */

function createThemeButton() {

    /*
     * Vérifie qu'un bouton n'existe pas déjà.
     */

    if (
        document.getElementById(
            "theme-toggle"
        )
    ) {
        return;
    }


    const button =
        document.createElement(
            "button"
        );


    button.type = "button";

    button.id = "theme-toggle";

    button.className =
        "theme-toggle";


    button.setAttribute(
        "aria-label",
        "Changer le thème"
    );


    button.innerHTML =
        '<span aria-hidden="true">◐</span>';


    button.addEventListener(
        "click",
        function() {

            toggleTheme();

        }
    );


    /*
     * Place le bouton dans la zone
     * des langues du header.
     */

    const header =
        document.querySelector(
            "header"
        );


    if (!header) {
        return;
    }


    const languageContainer =
        document.getElementById(
            "language-fr"
        )?.parentElement;


    if (languageContainer) {

        languageContainer.prepend(
            button
        );

    }

}


/* =========================================================
   CHANGEMENT DE THÈME
========================================================= */

function toggleTheme() {

    const currentTheme =
        document.documentElement.getAttribute(
            "data-theme"
        );


    const nextTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";


    localStorage.setItem(
        "zysell-theme",
        nextTheme
    );


    applyTheme(nextTheme);

}


/* =========================================================
   CHANGEMENT AUTOMATIQUE DU SYSTÈME
========================================================= */

const systemTheme =
    window.matchMedia(
        "(prefers-color-scheme: dark)"
    );


systemTheme.addEventListener(
    "change",
    function() {

        const preference =
            localStorage.getItem(
                "zysell-theme"
            );


        if (
            preference === "system" ||
            !preference
        ) {

            applyTheme("system");

        }

    }
);


/* =========================================================
   NAVIGATION FLUIDE
========================================================= */

function enableSmoothNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(function(link) {

        link.addEventListener(
            "click",
            function(event) {

                const targetID =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* =========================================================
   INITIALISATION
========================================================= */

function initializeZySell() {

    /*
     * Langue
     */

    const language =
        getLanguage();

    setLanguage(language);


    /*
     * Thème
     */

    const theme =
        getThemePreference();

    applyTheme(theme);


    /*
     * Année
     */

    updateYear();


    /*
     * Bouton thème
     */

    createThemeButton();


    /*
     * Navigation
     */

    enableSmoothNavigation();


    console.log(
        "ZySell Web — interface initialisée."
    );

}


/* =========================================================
   LANCEMENT
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeZySell
    );

} else {

    initializeZySell();

       }
