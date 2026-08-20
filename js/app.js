/* =========================================================
   ZYSELL — APP.JS
   Language + Theme + Global UI
   ========================================================= */

"use strict";


/* =========================================================
   CONFIGURATION
========================================================= */

const ZYSELL_CONFIG = {
    defaultLanguage: "fr",
    defaultTheme: "light",

    storageLanguage: "zysell-language",
    storageTheme: "zysell-theme"
};


/* =========================================================
   ÉTAT
========================================================= */

let currentLanguage =
    localStorage.getItem(
        ZYSELL_CONFIG.storageLanguage
    ) || ZYSELL_CONFIG.defaultLanguage;


let currentTheme =
    localStorage.getItem(
        ZYSELL_CONFIG.storageTheme
    ) || ZYSELL_CONFIG.defaultTheme;


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeLanguage();

    initializeTheme();

    initializeYear();

    initializeSmoothNavigation();

    initializePaymentButton();

});


/* =========================================================
   LANGUE
========================================================= */

function initializeLanguage() {

    const frenchButton =
        document.getElementById("language-fr");

    const englishButton =
        document.getElementById("language-en");


    if (frenchButton) {

        frenchButton.addEventListener(
            "click",
            () => {

                changeLanguage("fr");

            }
        );

    }


    if (englishButton) {

        englishButton.addEventListener(
            "click",
            () => {

                changeLanguage("en");

            }
        );

    }


    changeLanguage(currentLanguage);

}


/* =========================================================
   CHANGER LA LANGUE
========================================================= */

function changeLanguage(language) {

    if (
        language !== "fr" &&
        language !== "en"
    ) {
        language = ZYSELL_CONFIG.defaultLanguage;
    }


    currentLanguage = language;


    localStorage.setItem(
        ZYSELL_CONFIG.storageLanguage,
        language
    );


    /*
     * Tous les éléments possédant
     * data-fr et data-en sont traduits.
     */

    const translatableElements =
        document.querySelectorAll(
            "[data-fr][data-en]"
        );


    translatableElements.forEach(
        (element) => {

            const translatedText =
                element.getAttribute(
                    `data-${language}`
                );


            if (
                translatedText !== null &&
                translatedText !== ""
            ) {

                /*
                 * innerHTML permet de conserver
                 * certaines petites structures
                 * HTML si nécessaire.
                 */

                element.innerHTML =
                    translatedText;

            }

        }
    );


    updateLanguageButtons();

    updateDocumentLanguage();

}


/* =========================================================
   BOUTONS FR / EN
========================================================= */

function updateLanguageButtons() {

    const frenchButton =
        document.getElementById("language-fr");

    const englishButton =
        document.getElementById("language-en");


    if (frenchButton) {

        const isFrench =
            currentLanguage === "fr";

        frenchButton.classList.toggle(
            "active",
            isFrench
        );

        frenchButton.setAttribute(
            "aria-pressed",
            String(isFrench)
        );

    }


    if (englishButton) {

        const isEnglish =
            currentLanguage === "en";

        englishButton.classList.toggle(
            "active",
            isEnglish
        );

        englishButton.setAttribute(
            "aria-pressed",
            String(isEnglish)
        );

    }

}


/* =========================================================
   LANGUE HTML
========================================================= */

function updateDocumentLanguage() {

    document.documentElement.lang =
        currentLanguage;

}


/* =========================================================
   THÈME
========================================================= */

function initializeTheme() {

    const themeButton =
        document.getElementById("theme-toggle");


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            toggleTheme
        );

    }


    applyTheme(currentTheme);

}


/* =========================================================
   BASCULER LE THÈME
========================================================= */

function toggleTheme() {

    const newTheme =
        currentTheme === "light"
            ? "dark"
            : "light";


    applyTheme(newTheme);

}


/* =========================================================
   APPLIQUER LE THÈME
========================================================= */

function applyTheme(theme) {

    if (
        theme !== "light" &&
        theme !== "dark"
    ) {
        theme =
            ZYSELL_CONFIG.defaultTheme;
    }


    currentTheme = theme;


    localStorage.setItem(
        ZYSELL_CONFIG.storageTheme,
        theme
    );


    document.body.classList.toggle(
        "dark-mode",
        theme === "dark"
    );


    updateThemeIcon();

    updateThemeMeta();

}


/* =========================================================
   ICÔNE DU THÈME
========================================================= */

function updateThemeIcon() {

    const icon =
        document.getElementById(
            "theme-icon"
        );


    const button =
        document.getElementById(
            "theme-toggle"
        );


    if (!icon) {
        return;
    }


    if (currentTheme === "dark") {

        icon.textContent = "☀️";


        if (button) {

            button.setAttribute(
                "aria-label",
                currentLanguage === "fr"
                    ? "Activer le mode clair"
                    : "Switch to light mode"
            );

            button.setAttribute(
                "title",
                currentLanguage === "fr"
                    ? "Mode clair"
                    : "Light mode"
            );

        }

    } else {

        icon.textContent = "🌙";


        if (button) {

            button.setAttribute(
                "aria-label",
                currentLanguage === "fr"
                    ? "Activer le mode sombre"
                    : "Switch to dark mode"
            );

            button.setAttribute(
                "title",
                currentLanguage === "fr"
                    ? "Mode sombre"
                    : "Dark mode"
            );

        }

    }

}


/* =========================================================
   META THEME-COLOR
========================================================= */

function updateThemeMeta() {

    const themeMeta =
        document.querySelector(
            'meta[name="theme-color"]'
        );


    if (!themeMeta) {
        return;
    }


    themeMeta.setAttribute(
        "content",
        currentTheme === "dark"
            ? "#080a0f"
            : "#ffffff"
    );

}


/* =========================================================
   ANNÉE AUTOMATIQUE
========================================================= */

function initializeYear() {

    const year =
        new Date().getFullYear();


    const yearElements =
        document.querySelectorAll(
            "#current-year"
        );


    yearElements.forEach(
        (element) => {

            element.textContent =
                year;

        }
    );

}


/* =========================================================
   NAVIGATION FLUIDE
========================================================= */

function initializeSmoothNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    /*
                     * Mise à jour de l'URL
                     * sans recharger la page.
                     */

                    history.replaceState(
                        null,
                        "",
                        targetId
                    );

                }
            );

        }
    );

}


/* =========================================================
   BOUTON DE COPIE DU LIEN DE PAIEMENT
========================================================= */

function initializePaymentButton() {

    const paymentButton =
        document.querySelector(
            ".payment-card button"
        );


    if (!paymentButton) {
        return;
    }


    paymentButton.addEventListener(
        "click",
        async () => {

            const paymentLink =
                "zysell.com/pay/venzy";


            try {

                await navigator.clipboard.writeText(
                    paymentLink
                );


                showTemporaryMessage(
                    currentLanguage === "fr"
                        ? "Lien copié"
                        : "Link copied"
                );


            } catch (error) {

                showTemporaryMessage(
                    currentLanguage === "fr"
                        ? "Impossible de copier le lien"
                        : "Unable to copy the link"
                );

            }

        }
    );

}


/* =========================================================
   MESSAGE TEMPORAIRE
========================================================= */

function showTemporaryMessage(message) {

    const existing =
        document.querySelector(
            ".zysell-toast"
        );


    if (existing) {
        existing.remove();
    }


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "zysell-toast";


    toast.textContent =
        message;


    document.body.appendChild(
        toast
    );


    requestAnimationFrame(
        () => {

            toast.classList.add(
                "show"
            );

        }
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );


            setTimeout(
                () => {

                    toast.remove();

                },
                250
            );

        },
        2200
    );

}


/* =========================================================
   EXPOSITION OPTIONNELLE
   Pour les prochaines pages de ZySell
========================================================= */

window.ZySell = {

    getLanguage: () => currentLanguage,

    setLanguage: (language) => {
        changeLanguage(language);
    },

    getTheme: () => currentTheme,

    setTheme: (theme) => {
        applyTheme(theme);
    }

};
