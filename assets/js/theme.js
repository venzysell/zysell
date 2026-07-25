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

/* =======================================================
   PRÉFÉRENCE SYSTÈME
======================================================= */

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

    updateThemeIcon(theme);
}

/* =======================================================
   ICÔNE
======================================================= */

function updateThemeIcon(theme) {

    themeButtons.forEach(button => {

        const icon = button.querySelector("i");

        if (!icon) return;

        icon.className = theme === "dark"
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";

    });

}

/* =======================================================
   SAUVEGARDE
======================================================= */

function saveTheme(theme) {
    localStorage.setItem(storageKey, theme);
}

/* =======================================================
   LECTURE
======================================================= */

function loadTheme() {
    return localStorage.getItem(storageKey);
}

/* =======================================================
   BASCULER LE THÈME
======================================================= */

function toggleTheme() {

    const newTheme = body.classList.contains("dark")
        ? "light"
        : "dark";

    applyTheme(newTheme);
    saveTheme(newTheme);

}

/* =======================================================
   INITIALISATION
======================================================= */

function initializeTheme() {

    const savedTheme = loadTheme();

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDark.matches ? "dark" : "light");
    }

    themeButtons.forEach(button => {
        button.addEventListener("click", toggleTheme);
    });

}

document.addEventListener("DOMContentLoaded", initializeTheme);

/* =======================================================
   CHANGEMENT DU THÈME SYSTÈME
======================================================= */

prefersDark.addEventListener("change", (event) => {

    if (!loadTheme()) {
        applyTheme(event.matches ? "dark" : "light");
    }

});

/* =======================================================
   SYNCHRONISATION ENTRE ONGLETS
======================================================= */

window.addEventListener("storage", (event) => {

    if (event.key === storageKey) {
        applyTheme(event.newValue || "light");
    }

});

/* =======================================================
   API GLOBALE
======================================================= */

window.ZysellTheme = {

    toggle: toggleTheme,

    current: () => body.classList.contains("dark") ? "dark" : "light"

};

console.log("Theme chargé :", window.ZysellTheme.current());
