/* =========================================================
   ZYSELL — APP.JS
   Langue FR / EN
   Mode clair / sombre
   Menu mobile
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. TRADUCTION FR / EN
    ====================================================== */

    const languageFR = document.getElementById("language-fr");
    const languageEN = document.getElementById("language-en");

    const translatableElements =
        document.querySelectorAll("[data-fr][data-en]");


    function setLanguage(language) {

        translatableElements.forEach(element => {

            const translation =
                element.getAttribute(`data-${language}`);

            if (!translation) return;

            element.textContent = translation;

        });


        document.documentElement.lang = language;


        if (languageFR) {

            languageFR.classList.toggle(
                "active",
                language === "fr"
            );

            languageFR.setAttribute(
                "aria-pressed",
                language === "fr"
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
            );
        }


        localStorage.setItem(
            "zysell-language",
            language
        );
    }


    if (languageFR) {

        languageFR.addEventListener(
            "click",
            () => setLanguage("fr")
        );
    }


    if (languageEN) {

        languageEN.addEventListener(
            "click",
            () => setLanguage("en")
        );
    }


    /* =====================================================
       2. LANGUE SAUVEGARDÉE
    ====================================================== */

    const savedLanguage =
        localStorage.getItem("zysell-language") || "fr";

    setLanguage(savedLanguage);


    /* =====================================================
       3. MODE CLAIR / SOMBRE
    ====================================================== */

    const themeToggle =
        document.getElementById("theme-toggle");

    const themeIcon =
        document.querySelector(".theme-icon");


    function updateThemeIcon() {

        if (!themeIcon) return;

        const darkMode =
            document.body.classList.contains("dark");

        themeIcon.textContent =
            darkMode ? "☀️" : "🌙";

    }


    function setTheme(theme) {

        if (theme === "dark") {

            document.body.classList.add("dark");

            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );

        } else {

            document.body.classList.remove("dark");

            document.documentElement.setAttribute(
                "data-theme",
                "light"
            );
        }


        localStorage.setItem(
            "zysell-theme",
            theme
        );


        updateThemeIcon();
    }


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                const isDark =
                    document.body.classList.contains("dark");

                setTheme(
                    isDark ? "light" : "dark"
                );

            }
        );
    }


    /* =====================================================
       4. THÈME SAUVEGARDÉ
    ====================================================== */

    const savedTheme =
        localStorage.getItem("zysell-theme");


    if (savedTheme) {

        setTheme(savedTheme);

    } else {

        setTheme("light");

    }


    /* =====================================================
       5. MENU MOBILE
    ====================================================== */

    const mobileMenuToggle =
        document.querySelector(
            ".mobile-menu-toggle"
        );

    const mobileMenu =
        document.querySelector(
            ".mobile-menu"
        );


    if (
        mobileMenuToggle &&
        mobileMenu
    ) {

        mobileMenuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    !mobileMenu.hasAttribute("hidden");


                if (isOpen) {

                    mobileMenu.setAttribute(
                        "hidden",
                        ""
                    );

                    mobileMenuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                } else {

                    mobileMenu.removeAttribute(
                        "hidden"
                    );

                    mobileMenuToggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );
                }

            }
        );


        /* Fermer après avoir cliqué sur un lien */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.setAttribute(
                        "hidden",
                        ""
                    );

                    mobileMenuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }


    /* =====================================================
       6. FERMER LE MENU EN CLIQUANT À L'EXTÉRIEUR
    ====================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                !mobileMenu ||
                !mobileMenuToggle
            ) return;


            const clickedInsideMenu =
                mobileMenu.contains(event.target);

            const clickedButton =
                mobileMenuToggle.contains(event.target);


            if (
                !clickedInsideMenu &&
                !clickedButton
            ) {

                mobileMenu.setAttribute(
                    "hidden",
                    ""
                );

                mobileMenuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }
    );


    /* =====================================================
       7. FERMER LE MENU AVEC ESC
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") return;

            if (!mobileMenu) return;


            mobileMenu.setAttribute(
                "hidden",
                ""
            );


            if (mobileMenuToggle) {

                mobileMenuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }
    );


    /* =====================================================
       8. ANNÉE AUTOMATIQUE DU FOOTER
    ====================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       9. LIENS ANCRES — SCROLL DOUX
    ====================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) return;


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       10. INITIALISATION
    ====================================================== */

    console.log(
        "ZySell — Application initialisée."
    );

});
