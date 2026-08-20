/* =========================================================
   ZYSELL — APP.JS
   Gestion globale de la langue et du thème
========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIGURATION
    ===================================================== */

    const LANGUAGE_KEY = "zysell-language";
    const THEME_KEY = "zysell-theme";

    const DEFAULT_LANGUAGE = "fr";
    const DEFAULT_THEME = "light";


    /* =====================================================
       ÉLÉMENTS
    ===================================================== */

    const languageFR =
        document.getElementById("language-fr");

    const languageEN =
        document.getElementById("language-en");

    const themeToggle =
        document.getElementById("theme-toggle");


    /* =====================================================
       LANGUE
    ===================================================== */

    function changeLanguage(language) {

        if (
            language !== "fr" &&
            language !== "en"
        ) {
            language = DEFAULT_LANGUAGE;
        }


        const elements =
            document.querySelectorAll(
                "[data-fr][data-en]"
            );


        elements.forEach((element) => {

            const text =
                element.getAttribute(
                    `data-${language}`
                );


            if (text !== null) {

                element.innerHTML = text;

            }

        });


        document.documentElement.lang =
            language;


        updateLanguageButtons(language);


        localStorage.setItem(
            LANGUAGE_KEY,
            language
        );

    }


    /* =====================================================
       BOUTONS DE LANGUE
    ===================================================== */

    function updateLanguageButtons(language) {

        if (languageFR) {

            languageFR.classList.toggle(
                "active",
                language === "fr"
            );

            languageFR.setAttribute(
                "aria-pressed",
                language === "fr"
                    ? "true"
                    : "false"
            );

        }


        if (languageEN) {

            languageEN.classList.toggle(
                "active",
                language === "en"
            );

            languageEN.setAttribute(
                "aria-pressed",
                language === "en"
                    ? "true"
                    : "false"
            );

        }

    }


    /* =====================================================
       FRANÇAIS
    ===================================================== */

    if (languageFR) {

        languageFR.addEventListener(
            "click",
            () => {

                changeLanguage("fr");

            }
        );

    }


    /* =====================================================
       ENGLISH
    ===================================================== */

    if (languageEN) {

        languageEN.addEventListener(
            "click",
            () => {

                changeLanguage("en");

            }
        );

    }


    /* =====================================================
       THÈME
    ===================================================== */

    function changeTheme(theme) {

        if (
            theme !== "light" &&
            theme !== "dark"
        ) {
            theme = DEFAULT_THEME;
        }


        document.body.classList.toggle(
            "dark-mode",
            theme === "dark"
        );


        updateThemeButton(theme);


        localStorage.setItem(
            THEME_KEY,
            theme
        );


        updateThemeColor(theme);

    }


    /* =====================================================
       BOUTON THÈME
    ===================================================== */

    function updateThemeButton(theme) {

        if (!themeToggle) {
            return;
        }


        if (theme === "dark") {

            themeToggle.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Activer le mode clair"
            );

            themeToggle.setAttribute(
                "title",
                "Mode clair"
            );

        } else {

            themeToggle.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Activer le mode sombre"
            );

            themeToggle.setAttribute(
                "title",
                "Mode sombre"
            );

        }

    }


    /* =====================================================
       BOUTON MODE SOMBRE
    ===================================================== */

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                const isDark =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                changeTheme(
                    isDark
                        ? "light"
                        : "dark"
                );

            }
        );

    }


    /* =====================================================
       COULEUR DU NAVIGATEUR
    ===================================================== */

    function updateThemeColor(theme) {

        const meta =
            document.querySelector(
                'meta[name="theme-color"]'
            );


        if (!meta) {
            return;
        }


        meta.setAttribute(
            "content",
            theme === "dark"
                ? "#0c0f14"
                : "#ffffff"
        );

    }


    /* =====================================================
       CHARGEMENT INITIAL
    ===================================================== */

    const savedLanguage =
        localStorage.getItem(
            LANGUAGE_KEY
        );


    const savedTheme =
        localStorage.getItem(
            THEME_KEY
        );


    changeLanguage(
        savedLanguage || DEFAULT_LANGUAGE
    );


    changeTheme(
        savedTheme || DEFAULT_THEME
    );

});
