/* =========================================================
   ZYSELL — APP.JS
   Version 1 — Interface
========================================================= */

"use strict";


/* =========================================================
   CONFIGURATION
========================================================= */

const ZYSELL = {
    defaultLanguage: "fr",
    defaultTheme: "system"
};


/* =========================================================
   ÉLÉMENTS
========================================================= */

const languageFR = document.getElementById("language-fr");
const languageEN = document.getElementById("language-en");

const currentYear = document.getElementById("current-year");


/* =========================================================
   LANGUE
========================================================= */

function getSavedLanguage() {

    const savedLanguage =
        localStorage.getItem("zysell-language");

    if (
        savedLanguage === "fr" ||
        savedLanguage === "en"
    ) {
        return savedLanguage;
    }

    return ZYSELL.defaultLanguage;
}


function changeLanguage(language) {

    if (
        language !== "fr" &&
        language !== "en"
    ) {
        return;
    }

    document.documentElement.lang = language;


    const translatedElements =
        document.querySelectorAll("[data-fr][data-en]");


    translatedElements.forEach(function(element) {

        const frenchText =
            element.getAttribute("data-fr");

        const englishText =
            element.getAttribute("data-en");


        element.textContent =
            language === "fr"
                ? frenchText
                : englishText;

    });


    localStorage.setItem(
        "zysell-language",
        language
    );


    updateLanguageButtons(language);
}


function updateLanguageButtons(language) {

    if (!languageFR || !languageEN) {
        return;
    }


    languageFR.setAttribute(
        "aria-pressed",
        language === "fr" ? "true" : "false"
    );


    languageEN.setAttribute(
        "aria-pressed",
        language === "en" ? "true" : "false"
    );


    languageFR.classList.toggle(
        "active",
        language === "fr"
    );


    languageEN.classList.toggle(
        "active",
        language === "en"
    );
}


if (languageFR) {

    languageFR.addEventListener(
        "click",
        function() {
            changeLanguage("fr");
        }
    );

}


if (languageEN) {

    languageEN.addEventListener(
        "click",
        function() {
            changeLanguage("en");
        }
    );

}


/* =========================================================
   ANNÉE
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

    return window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches
        ? "dark"
        : "light";
}


function getSavedTheme() {

    const savedTheme =
        localStorage.getItem("zysell-theme");

    if (
        savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system"
    ) {
        return savedTheme;
    }

    return ZYSELL.defaultTheme;
}


function applyTheme(theme) {

    let finalTheme = theme;


    if (theme === "system") {
        finalTheme = getSystemTheme();
    }


    document.documentElement.setAttribute(
        "data-theme",
        finalTheme
    );


    document.documentElement.setAttribute(
        "data-theme-preference",
        theme
    );
}


function saveTheme(theme) {

    localStorage.setItem(
        "zysell-theme",
        theme
    );

    applyTheme(theme);
}


function toggleTheme() {

    const currentTheme =
        document.documentElement.getAttribute(
            "data-theme"
        );


    const nextTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";


    saveTheme(nextTheme);
}


/* =========================================================
   BOUTON THÈME
========================================================= */

function createThemeButton() {

    const button =
        document.createElement("button");


    button.type = "button";

    button.id = "theme-toggle";

    button.className = "theme-toggle";

    button.setAttribute(
        "aria-label",
        "Changer le thème"
    );


    button.innerHTML = `
        <span aria-hidden="true">◐</span>
    `;


    button.addEventListener(
        "click",
        toggleTheme
    );


    const header =
        document.querySelector("header");


    if (header) {

        const firstControls =
            header.querySelector(
                "div"
            );


        if (firstControls) {

            firstControls.prepend(
                button
            );

        }

    }

}


/* =========================================================
   THÈME DU SYSTÈME
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


        if (preference === "system") {
            applyTheme("system");
        }

    }
);


/* =========================================================
   MENU MOBILE
========================================================= */

function createMobileMenu() {

    const header =
        document.querySelector("header");


    const navigation =
        header
            ? header.querySelector("nav")
            : null;


    if (!header || !navigation) {
        return;
    }


    const menuButton =
        document.createElement("button");


    menuButton.type = "button";

    menuButton.className =
        "mobile-menu-button";

    menuButton.setAttribute(
        "aria-label",
        "Menu"
    );

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );


    menuButton.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;


    header.appendChild(menuButton);


    menuButton.addEventListener(
        "click",
        function() {

            const isOpen =
                header.classList.toggle(
                    "mobile-menu-open"
                );


            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        }
    );


    navigation
        .querySelectorAll("a")
        .forEach(function(link) {

            link.addEventListener(
                "click",
                function() {

                    header.classList.remove(
                        "mobile-menu-open"
                    );


                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   SCROLL DOUX
========================================================= */

function enableSmoothNavigation() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(function(link) {

            link.addEventListener(
                "click",
                function(event) {

                    const targetID =
                        link.getAttribute("href");


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

    const language =
        getSavedLanguage();


    const theme =
        getSavedTheme();


    changeLanguage(language);

    applyTheme(theme);

    updateYear();

    createThemeButton();

    createMobileMenu();

    enableSmoothNavigation();


    console.log(
        "ZySell Web — interface initialisée."
    );

}


/* =========================================================
   LANCEMENT
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeZySell
    );

} else {

    initializeZySell();

      }
