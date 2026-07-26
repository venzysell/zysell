// =====================================
// ZYSELL - THEME.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.querySelector(".theme-btn");
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // =====================================
    // APPLIQUER LE THÈME
    // =====================================

    function applyTheme(theme) {

        if (theme === "dark") {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }

        updateThemeButton();

    }

    // =====================================
    // METTRE À JOUR L'ICÔNE
    // =====================================

    function updateThemeButton() {

        if (!themeButton) return;

        themeButton.textContent =
            document.body.classList.contains("dark-theme")
                ? "☀️"
                : "🌙";

    }

    // =====================================
    // INITIALISATION
    // =====================================

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {

        applyTheme(savedTheme);

    } else {

        applyTheme(mediaQuery.matches ? "dark" : "light");

    }

    // =====================================
    // CHANGEMENT MANUEL
    // =====================================

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            const isDark = document.body.classList.toggle("dark-theme");

            localStorage.setItem(
                "theme",
                isDark ? "dark" : "light"
            );

            updateThemeButton();

        });

    }

    // =====================================
    // SUIVRE LE THÈME DU SYSTÈME
    // (uniquement si aucun choix utilisateur)
    // =====================================

    mediaQuery.addEventListener("change", (event) => {

        if (localStorage.getItem("theme")) return;

        applyTheme(event.matches ? "dark" : "light");

    });

});
