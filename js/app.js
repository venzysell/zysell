// ==============================
// ZYSELL APP V1.1
// ==============================

// Splash Screen
console.log("Bienvenue sur Zysell 🚀");

// Création automatique du bouton menu mobile

const header = document.querySelector(".header .container");

const menuButton = document.createElement("div");

menuButton.className = "menu-toggle";

menuButton.innerHTML = "☰";

header.appendChild(menuButton);

const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

// Effet au défilement

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
