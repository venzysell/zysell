/* =======================================================
   ZYSELL SEARCH
======================================================= */

"use strict";

/* =======================================================
   ÉLÉMENTS
======================================================= */

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const productCards = document.querySelectorAll(".product-card");
const creatorCards = document.querySelectorAll(".creator-card");
const categoryCards = document.querySelectorAll(".category-card");

/* =======================================================
   NORMALISATION
======================================================= */

function normalize(text) {

    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}/* =======================================================
   AFFICHER / MASQUER LES RÉSULTATS
======================================================= */

function showResults() {

    if (searchResults) {
        searchResults.style.display = "block";
    }

}

function hideResults() {

    if (!searchResults) return;

    searchResults.style.display = "none";
    searchResults.innerHTML = "";

}

/* =======================================================
   CRÉER UN RÉSULTAT
======================================================= */

function createResult(title, url, type) {

    const item = document.createElement("a");

    item.className = "search-result";
    item.href = url;

    item.innerHTML = `
        <div class="search-result-title">${title}</div>
        <div class="search-result-type">${type}</div>
    `;

    return item;

}/* =======================================================
   RECHERCHE
======================================================= */

function performSearch(query) {

    const keyword = normalize(query);

    hideResults();

    if (keyword.length === 0) {

        resetCards();

        return;

    }

    showResults();

    let totalResults = 0;

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

            const value = normalize(card.dataset[collection.field] || "");

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

}/* =======================================================
   RÉINITIALISATION
======================================================= */

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

/* =======================================================
   ÉVÉNEMENT INPUT
======================================================= */

if (searchInput) {

    searchInput.addEventListener("input", event => {

        performSearch(event.target.value);

    });

}

/* =======================================================
   FERMETURE DES RÉSULTATS
======================================================= */

document.addEventListener("click", event => {

    if (
        searchResults &&
        searchInput &&
        !searchResults.contains(event.target) &&
        event.target !== searchInput
    ) {

        hideResults();

    }

});/* =======================================================
   DEBOUNCE
======================================================= */

function debounce(callback, delay = 250) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/* =======================================================
   RECHERCHE OPTIMISÉE
======================================================= */

if (searchInput) {

    const optimizedSearch = debounce(event => {

        performSearch(event.target.value);

    });

    searchInput.replaceWith(searchInput.cloneNode(true));

    const newSearchInput = document.getElementById("searchInput");

    if (newSearchInput) {

        newSearchInput.addEventListener("input", optimizedSearch);

    }

}/* =======================================================
   NAVIGATION CLAVIER
======================================================= */

let selectedIndex = -1;

document.addEventListener("keydown", event => {

    if (!searchResults || searchResults.style.display === "none") {
        return;
    }

    const items = searchResults.querySelectorAll(".search-result");

    if (items.length === 0) {
        return;
    }

    if (event.key === "ArrowDown") {

        event.preventDefault();

        selectedIndex = (selectedIndex + 1) % items.length;

    } else if (event.key === "ArrowUp") {

        event.preventDefault();

        selectedIndex = (selectedIndex - 1 + items.length) % items.length;

    } else if (event.key === "Enter") {

        if (selectedIndex >= 0 && items[selectedIndex]) {

            event.preventDefault();
            items[selectedIndex].click();

        }

    } else {

        return;

    }

    items.forEach(item => item.classList.remove("active"));

    if (selectedIndex >= 0) {

        items[selectedIndex].classList.add("active");

        items[selectedIndex].scrollIntoView({
            block: "nearest"
        });

    }

});/* =======================================================
   INITIALISATION
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    resetCards();

    console.log("✅ ZySell Search initialisé.");

});

/* =======================================================
   API GLOBALE
======================================================= */

window.ZysellSearch = {

    search: performSearch,

    reset: resetCards,

    normalize

};

/* =======================================================
   FIN DU FICHIER
======================================================= */
