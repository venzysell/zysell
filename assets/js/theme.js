/* =======================================================
   ZYSELL THEME
======================================================= */

"use strict";

/* =======================================================
   ÉLÉMENTS
======================================================= */

const themeButtons = document.querySelectorAll("#themeBtn, #themeBtnMobile");
const body = document.body;
const storageKey = "zysell-theme";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

/* =======================================================
   APPLIQUER LE THÈME
======================================================= */

function applyTheme(theme) {

    if (theme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }

    localStorage.setItem(storageKey, theme);

    updateThemeIcon(theme);

}/* =======================================================
   METTRE À JOUR L'ICÔNE
======================================================= */

function updateThemeIcon(theme) {

    themeButtons.forEach(button => {

        if (theme === "dark") {

            button.innerHTML = "☀️";
            button.setAttribute("aria-label", "Activer le mode clair");

        } else {

            button.innerHTML = "🌙";
            button.setAttribute("aria-label", "Activer le mode sombre");

        }

    });

}/* =======================================================
   CHANGER LE THÈME
======================================================= */

themeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const currentTheme = body.classList.contains("dark")
            ? "dark"
            : "light";

        const newTheme = currentTheme === "dark"
            ? "light"
            : "dark";

        applyTheme(newTheme);

    });

});/* =======================================================
   INITIALISATION DU THÈME
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem(storageKey);

    if (savedTheme) {

        applyTheme(savedTheme);

    } else {

        applyTheme(prefersDark.matches ? "dark" : "light");

    }

});

/* =======================================================
   CHANGEMENT DE PRÉFÉRENCE SYSTÈME
======================================================= */

prefersDark.addEventListener("change", (event) => {

    if (!localStorage.getItem(storageKey)) {

        applyTheme(event.matches ? "dark" : "light");

    }

});
