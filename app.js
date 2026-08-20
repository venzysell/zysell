/* =========================================================
   ZySell — app.js
   Language / theme / mobile navigation
========================================================= */

(() => {
    "use strict";

    const STORAGE_LANGUAGE = "zysell-language";
    const STORAGE_THEME = "zysell-theme";

    const translations = {
        fr: {
            "nav.home": "Accueil",
            "nav.categories": "Catégories",
            "nav.products": "Produits",
            "nav.how": "Comment ça marche",
            "nav.faq": "FAQ",
            "nav.login": "Se connecter",
            "nav.signup": "Créer un compte",

            "hero.eyebrow": "LA MARKETPLACE DU NUMÉRIQUE",
            "hero.title": "Créez votre boutique.<br>Vendez vos produits.<br><span>Développez votre activité.</span>",
            "hero.description": "ZySell donne aux créateurs et aux entreprises les outils nécessaires pour vendre leurs produits numériques, recevoir leurs paiements et développer leur activité en ligne.",
            "hero.primary": "Commencer gratuitement",
            "hero.secondary": "Explorer les produits",
            "hero.point1": "✓ Création de compte gratuite",
            "hero.point2": "✓ Produits numériques",
            "hero.point3": "✓ Pensé pour les créateurs",
            "hero.store": "Ma boutique",
            "hero.previewTitle": "Votre activité numérique",
            "hero.previewSubtitle": "au même endroit.",
            "hero.product1": "eBook",
            "hero.productPrice1": "Produit numérique",
            "hero.product2": "Formation",
            "hero.productPrice2": "Contenu premium",
            "hero.previewFooter": "Boutique en ligne",

            "value.kicker": "UNE PLATEFORME. PLUSIEURS POSSIBILITÉS.",
            "value.title": "Tout ce dont vous avez besoin pour vendre dans le numérique.",
            "value.description": "ZySell réunit votre boutique, vos produits, vos clients et votre activité financière dans une expérience simple et professionnelle.",

            "categories.kicker": "EXPLOREZ",
            "categories.title": "Le numérique que vous recherchez.",
            "categories.description": "Découvrez des produits numériques créés par des vendeurs et des créateurs.",
            "category.ebooks": "eBooks",
            "category.ebooksDesc": "Livres et guides numériques",
            "category.courses": "Formations",
            "category.coursesDesc": "Apprendre et progresser",
            "category.software": "Logiciels",
            "category.softwareDesc": "Outils et solutions numériques",
            "category.design": "Design",
            "category.designDesc": "Ressources créatives",
            "category.video": "Vidéos",
            "category.videoDesc": "Contenus vidéo numériques",
            "category.music": "Musique",
            "category.musicDesc": "Audio et créations musicales",
            "category.templates": "Templates",
            "category.templatesDesc": "Ressources prêtes à utiliser",
            "category.more": "Découvrir plus",
            "category.moreDesc": "Explorer toutes les catégories",

            "why.kicker": "POURQUOI ZYSELL ?",
            "why.title": "Une infrastructure pensée pour votre activité.",
            "why.description": "Que vous soyez créateur, formateur, designer, développeur ou entreprise, ZySell vous accompagne pour vendre vos produits numériques.",
            "feature.storeTitle": "Votre boutique",
            "feature.storeDesc": "Présentez vos produits dans un espace professionnel dédié à votre activité.",
            "feature.linkTitle": "Paiement par lien",
            "feature.linkDesc": "Partagez simplement un lien de paiement avec vos clients.",
            "feature.paymentTitle": "Paiements",
            "feature.paymentDesc": "Centralisez votre activité de paiement dans votre environnement ZySell.",
            "feature.globalTitle": "Une audience internationale",
            "feature.globalDesc": "Présentez vos produits à des clients au-delà de votre marché local.",

            "products.kicker": "À DÉCOUVRIR",
            "products.title": "Des produits numériques pour chaque besoin.",
            "products.link": "Explorer tout →",
            "products.type1": "eBook",
            "products.name1": "Guide du numérique",
            "products.desc1": "Ressource numérique pour développer ses compétences.",
            "products.type2": "Formation",
            "products.name2": "Marketing Digital",
            "products.desc2": "Apprenez à développer votre présence et votre activité en ligne.",
            "products.type3": "Design",
            "products.name3": "Pack Créatif Premium",
            "products.desc3": "Des ressources prêtes à intégrer à vos projets.",

            "how.kicker": "SIMPLE ET DIRECT",
            "how.title": "Commencez en quelques étapes.",
            "how.description": "Pas besoin d'être expert. ZySell est conçu pour vous permettre de commencer simplement.",
            "step.oneTitle": "Créez votre compte",
            "step.oneDesc": "Inscrivez-vous gratuitement et configurez votre espace ZySell.",
            "step.twoTitle": "Créez votre boutique",
            "step.twoDesc": "Présentez votre activité et ajoutez vos premiers produits.",
            "step.threeTitle": "Partagez",
            "step.threeDesc": "Faites découvrir votre boutique et vos produits à vos clients.",
            "step.fourTitle": "Développez",
            "step.fourDesc": "Suivez votre activité et développez progressivement votre entreprise.",

            "creator.kicker": "POUR LES CRÉATEURS",
            "creator.title": "Votre talent mérite son propre espace.",
            "creator.description": "Transformez vos connaissances, vos créations et vos produits numériques en une véritable activité en ligne.",
            "creator.button": "Créer ma boutique",
            "creator.store": "Ma boutique",

            "faq.kicker": "FAQ",
            "faq.title": "Les réponses à vos questions.",
            "faq.q1": "Qu'est-ce que ZySell ?",
            "faq.a1": "ZySell est une marketplace numérique qui permet aux créateurs et aux entreprises de présenter et vendre leurs produits numériques.",
            "faq.q2": "Quels produits puis-je vendre ?",
            "faq.a2": "Vous pouvez vendre différents types de produits numériques comme des eBooks, formations, logiciels, templates, vidéos, musiques et ressources créatives.",
            "faq.q3": "La création d'un compte est-elle gratuite ?",
            "faq.a3": "Oui. La création de votre compte ZySell est gratuite.",
            "faq.q4": "Puis-je vendre depuis mon pays ?",
            "faq.a4": "ZySell est pensé pour une utilisation internationale. Les fonctionnalités de paiement disponibles peuvent toutefois dépendre du pays et des services pris en charge.",

            "final.kicker": "PRÊT À COMMENCER ?",
            "final.title": "Votre prochaine vente peut commencer ici.",
            "final.description": "Créez votre compte ZySell et commencez à construire votre présence dans le monde numérique.",
            "final.button": "Commencer gratuitement",

            "footer.description": "La marketplace numérique pensée pour les créateurs et les entreprises.",
            "footer.marketplace": "Marketplace",
            "footer.explore": "Explorer",
            "footer.categories": "Catégories",
            "footer.products": "Produits",
            "footer.sellers": "Vendeurs",
            "footer.createStore": "Créer une boutique",
            "footer.how": "Comment ça marche",
            "footer.faq": "FAQ",
            "footer.legal": "Informations légales",
            "footer.terms": "Conditions d'utilisation",
            "footer.privacy": "Politique de confidentialité",
            "footer.cookies": "Politique des cookies",
            "footer.rights": "Tous droits réservés.",
            "footer.language": "Langue"
        },

        en: {
            "nav.home": "Home",
            "nav.categories": "Categories",
            "nav.products": "Products",
            "nav.how": "How it works",
            "nav.faq": "FAQ",
            "nav.login": "Log in",
            "nav.signup": "Create an account",

            "hero.eyebrow": "THE DIGITAL MARKETPLACE",
            "hero.title": "Create your store.<br>Sell your products.<br><span>Grow your business.</span>",
            "hero.description": "ZySell gives creators and businesses the tools they need to sell digital products, receive payments and grow their online business.",
            "hero.primary": "Get started for free",
            "hero.secondary": "Explore products",
            "hero.point1": "✓ Free account",
            "hero.point2": "✓ Digital products",
            "hero.point3": "✓ Built for creators",
            "hero.store": "My store",
            "hero.previewTitle": "Your digital business",
            "hero.previewSubtitle": "in one place.",
            "hero.product1": "eBook",
            "hero.productPrice1": "Digital product",
            "hero.product2": "Course",
            "hero.productPrice2": "Premium content",
            "hero.previewFooter": "Online store",

            "value.kicker": "ONE PLATFORM. MANY POSSIBILITIES.",
            "value.title": "Everything you need to sell in the digital world.",
            "value.description": "ZySell brings your store, products, customers and financial activity together in one simple, professional experience.",

            "categories.kicker": "EXPLORE",
            "categories.title": "The digital products you are looking for.",
            "categories.description": "Discover digital products created by sellers and creators.",
            "category.ebooks": "eBooks",
            "category.ebooksDesc": "Digital books and guides",
            "category.courses": "Courses",
            "category.coursesDesc": "Learn and improve",
            "category.software": "Software",
            "category.softwareDesc": "Digital tools and solutions",
            "category.design": "Design",
            "category.designDesc": "Creative resources",
            "category.video": "Videos",
            "category.videoDesc": "Digital video content",
            "category.music": "Music",
            "category.musicDesc": "Audio and music creations",
            "category.templates": "Templates",
            "category.templatesDesc": "Ready-to-use resources",
            "category.more": "Discover more",
            "category.moreDesc": "Explore all categories",

            "why.kicker": "WHY ZYSELL?",
            "why.title": "Infrastructure built around your business.",
            "why.description": "Whether you are a creator, educator, designer, developer or business, ZySell helps you sell your digital products.",
            "feature.storeTitle": "Your store",
            "feature.storeDesc": "Present your products in a professional space dedicated to your business.",
            "feature.linkTitle": "Payment links",
            "feature.linkDesc": "Simply share a payment link with your customers.",
            "feature.paymentTitle": "Payments",
            "feature.paymentDesc": "Centralize your payment activity within your ZySell environment.",
            "feature.globalTitle": "A global audience",
            "feature.globalDesc": "Present your products to customers beyond your local market.",

            "products.kicker": "DISCOVER",
            "products.title": "Digital products for every need.",
            "products.link": "Explore all →",
            "products.type1": "eBook",
            "products.name1": "Digital World Guide",
            "products.desc1": "A digital resource to develop your skills.",
            "products.type2": "Course",
            "products.name2": "Digital Marketing",
            "products.desc2": "Learn how to grow your online presence and business.",
            "products.type3": "Design",
            "products.name3": "Premium Creative Pack",
            "products.desc3": "Ready-to-use resources for your projects.",

            "how.kicker": "SIMPLE AND DIRECT",
            "how.title": "Get started in a few steps.",
            "how.description": "No expertise required. ZySell is designed to help you get started simply.",
            "step.oneTitle": "Create your account",
            "step.oneDesc": "Sign up for free and set up your ZySell space.",
            "step.twoTitle": "Create your store",
            "step.twoDesc": "Present your business and add your first products.",
            "step.threeTitle": "Share",
            "step.threeDesc": "Introduce your store and products to your customers.",
            "step.fourTitle": "Grow",
            "step.fourDesc": "Track your activity and gradually grow your business.",

            "creator.kicker": "FOR CREATORS",
            "creator.title": "Your talent deserves its own space.",
            "creator.description": "Turn your knowledge, creations and digital products into a real online business.",
            "creator.button": "Create my store",
            "creator.store": "My store",

            "faq.kicker": "FAQ",
            "faq.title": "Answers to your questions.",
            "faq.q1": "What is ZySell?",
            "faq.a1": "ZySell is a digital marketplace that allows creators and businesses to present and sell their digital products.",
            "faq.q2": "What products can I sell?",
            "faq.a2": "You can sell different types of digital products such as eBooks, courses, software, templates, videos, music and creative resources.",
            "faq.q3": "Is creating an account free?",
            "faq.a3": "Yes. Creating your ZySell account is free.",
            "faq.q4": "Can I sell from my country?",
            "faq.a4": "ZySell is designed for international use. Available payment features may depend on your country and supported services.",

            "final.kicker": "READY TO START?",
            "final.title": "Your next sale can start here.",
            "final.description": "Create your ZySell account and start building your presence in the digital world.",
            "final.button": "Get started for free",

            "footer.description": "The digital marketplace built for creators and businesses.",
            "footer.marketplace": "Marketplace",
            "footer.explore": "Explore",
            "footer.categories": "Categories",
            "footer.products": "Products",
            "footer.sellers": "Sellers",
            "footer.createStore": "Create a store",
            "footer.how": "How it works",
            "footer.faq": "FAQ",
            "footer.legal": "Legal",
            "footer.terms": "Terms of use",
            "footer.privacy": "Privacy policy",
            "footer.cookies": "Cookie policy",
            "footer.rights": "All rights reserved.",
            "footer.language": "Language"
        }
    };

    const body = document.body;
    const languageToggle = document.getElementById("language-toggle");
    const footerLanguageToggle = document.getElementById("footer-language-toggle");
    const languageLabel = document.getElementById("language-label");
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileNavigation = document.getElementById("mobile-navigation");
    const currentYear = document.getElementById("current-year");

    function getSavedLanguage() {
        const saved = localStorage.getItem(STORAGE_LANGUAGE);
        return saved === "en" ? "en" : "fr";
    }

    function getSavedTheme() {
        const saved = localStorage.getItem(STORAGE_THEME);

        if (saved === "dark" || saved === "light") {
            return saved;
        }

        return window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    function setLanguage(language) {
        const selectedLanguage = language === "en" ? "en" : "fr";

        document.documentElement.lang = selectedLanguage;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            const value = translations[selectedLanguage][key];

            if (typeof value === "string") {
                element.innerHTML = value;
            }
        });

        if (languageLabel) {
            languageLabel.textContent = selectedLanguage === "fr" ? "FR" : "EN";
        }

        if (footerLanguageToggle) {
            footerLanguageToggle.textContent = selectedLanguage === "fr" ? "FR" : "EN";
        }

        localStorage.setItem(STORAGE_LANGUAGE, selectedLanguage);
    }

    function setTheme(theme) {
        const selectedTheme = theme === "dark" ? "dark" : "light";
        const isDark = selectedTheme === "dark";

        body.classList.toggle("dark", isDark);

        if (themeIcon) {
            themeIcon.textContent = isDark ? "☀" : "☾";
        }

        if (themeToggle) {
            themeToggle.setAttribute("aria-pressed", String(isDark));
            themeToggle.setAttribute(
                "aria-label",
                isDark ? "Activer le mode clair" : "Activer le mode sombre"
            );
        }

        document.documentElement.style.colorScheme = selectedTheme;

        localStorage.setItem(STORAGE_THEME, selectedTheme);
    }

    function toggleLanguage() {
        const current = getSavedLanguage();
        setLanguage(current === "fr" ? "en" : "fr");
    }

    function toggleTheme() {
        const isDark = body.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
    }

    function openMobileMenu() {
        if (!mobileNavigation || !mobileMenuButton) return;

        mobileNavigation.classList.add("open");
        mobileMenuButton.setAttribute("aria-expanded", "true");
        body.classList.add("menu-open");
    }

    function closeMobileMenu() {
        if (!mobileNavigation || !mobileMenuButton) return;

        mobileNavigation.classList.remove("open");
        mobileMenuButton.setAttribute("aria-expanded", "false");
        body.classList.remove("menu-open");
    }

    function toggleMobileMenu() {
        if (!mobileNavigation) return;

        if (mobileNavigation.classList.contains("open")) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    function initialize() {
        setLanguage(getSavedLanguage());
        setTheme(getSavedTheme());

        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }

        if (languageToggle) {
            languageToggle.addEventListener("click", toggleLanguage);
        }

        if (footerLanguageToggle) {
            footerLanguageToggle.addEventListener("click", toggleLanguage);
        }

        if (themeToggle) {
            themeToggle.addEventListener("click", toggleTheme);
        }

        if (mobileMenuButton) {
            mobileMenuButton.addEventListener("click", toggleMobileMenu);
        }

        if (mobileNavigation) {
            mobileNavigation.querySelectorAll("a").forEach((link) => {
                link.addEventListener("click", closeMobileMenu);
            });
        }

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMobileMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 850) {
                closeMobileMenu();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize);
    } else {
        initialize();
    }
})();
