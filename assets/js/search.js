// =====================================
// ZYSELL - SEARCH.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // =====================================
    // ÉLÉMENTS
    // =====================================

    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    const productCards = document.querySelectorAll(".product-card");
    const creatorCards = document.querySelectorAll(".creator-card");
    const categoryCards = document.querySelectorAll(".category-card");

    let selectedIndex = -1;

    // =====================================
    // NORMALISATION
    // =====================================

    function normalize(text) {

        return String(text)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

    }

    // =====================================
    // AFFICHAGE DES RÉSULTATS
    // =====================================

    function showResults() {

        if (searchResults) {
            searchResults.style.display = "block";
        }

    }

    function hideResults() {

        if (!searchResults) return;

        searchResults.style.display = "none";
        searchResults.innerHTML = "";
        selectedIndex = -1;

    }

    // =====================================
    // CRÉER UN RÉSULTAT
    // =====================================

    function createResult(title, url, type) {

        const item = document.createElement("a");

        item.className = "search-result";
        item.href = url;

        item.innerHTML = `
            <div class="search-result-title">${title}</div>
            <div class="search-result-type">${type}</div>
        `;

        return item;

    }

    // =====================================
    // RÉINITIALISER LES CARTES
    // =====================================

    function resetCards() {

        [
            ...productCards,
            ...creatorCards,
            ...categoryCards
        ].forEach(card => {

            card.style.display = "";

        });

        hideResults();

    }
       // =====================================
    // RECHERCHE
    // =====================================

    function performSearch(query) {

        const keyword = normalize(query);

        resetCards();

        if (keyword.length === 0) {
            return;
        }

        showResults();

        let totalResults = 0;
        selectedIndex = -1;

        const collections = [

            {
                cards: productCards,
                field: "title",
                type: "Produit",
                defaultUrl: "product.html"
            },

            {
                cards: creatorCards,
                field: "name",
                type: "Créateur",
                defaultUrl: "store.html"
            },

            {
                cards: categoryCards,
                field: "category",
                type: "Catégorie",
                defaultUrl: "explore.html"
            }

        ];

        collections.forEach(collection => {

            collection.cards.forEach(card => {

                const value = normalize(
                    card.dataset[collection.field] || ""
                );

                if (value.includes(keyword)) {

                    card.style.display = "";

                    totalResults++;

                    if (searchResults) {

                        searchResults.appendChild(

                            createResult(
                                card.dataset[collection.field],
                                card.dataset.url || collection.defaultUrl,
                                collection.type
                            )

                        );

                    }

                } else {

                    card.style.display = "none";

                }

            });

        });

        if (totalResults === 0 && searchResults) {

            searchResults.innerHTML = `
                <div class="search-empty">
                    Aucun résultat trouvé.
                </div>
            `;

        }

    }

    // =====================================
    // DEBOUNCE
    // =====================================

    function debounce(callback, delay = 250) {

        let timeout;

        return (...args) => {

            clearTimeout(timeout);

            timeout = setTimeout(() => {

                callback(...args);

            }, delay);

        };

    }

    // =====================================
    // ÉVÉNEMENT DE RECHERCHE
    // =====================================

    if (searchInput) {

        const optimizedSearch = debounce(event => {

            performSearch(event.target.value);

        });

        searchInput.addEventListener(
            "input",
            optimizedSearch
        );

    }
       // =====================================
    // FERMETURE DES RÉSULTATS
    // =====================================

    document.addEventListener("click", event => {

        if (
            searchResults &&
            searchInput &&
            !searchResults.contains(event.target) &&
            event.target !== searchInput
        ) {

            hideResults();

        }

    });

    // =====================================
    // NAVIGATION AU CLAVIER
    // =====================================

    document.addEventListener("keydown", event => {

        if (!searchResults || searchResults.style.display === "none") {
            return;
        }

        const items = searchResults.querySelectorAll(".search-result");

        if (items.length === 0) {
            return;
        }

        switch (event.key) {

            case "ArrowDown":

                event.preventDefault();

                selectedIndex = (selectedIndex + 1) % items.length;

                break;

            case "ArrowUp":

                event.preventDefault();

                selectedIndex =
                    (selectedIndex - 1 + items.length) % items.length;

                break;

            case "Enter":

                if (selectedIndex >= 0 && items[selectedIndex]) {

                    event.preventDefault();
                    items[selectedIndex].click();

                }

                return;

            case "Escape":

                hideResults();

                return;

            default:

                return;

        }

        items.forEach(item => item.classList.remove("active"));

        if (selectedIndex >= 0) {

            items[selectedIndex].classList.add("active");

            items[selectedIndex].scrollIntoView({
                block: "nearest"
            });

        }

    });

    // =====================================
    // INITIALISATION
    // =====================================

    resetCards();

    console.log("✅ ZySell Search initialisé.");

    // =====================================
    // API GLOBALE
    // =====================================

    window.ZysellSearch = {

        search: performSearch,
        reset: resetCards,
        normalize

    };

});
