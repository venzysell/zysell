// =====================================
// ZYSELL - THEME.JS
// =====================================

const themeButton = document.querySelector(".theme-btn");

const savedTheme = localStorage.getItem("theme");

// Appliquer le thème enregistré
if(savedTheme === "dark"){
    document.body.classList.add("dark-theme");
}

// Détection automatique du thème du système
if(!savedTheme){

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if(prefersDark.matches){
        document.body.classList.add("dark-theme");
    }

    prefersDark.addEventListener("change", (event)=>{

        if(!localStorage.getItem("theme")){
            document.body.classList.toggle("dark-theme", event.matches);
            updateThemeButton();
        }

    });

}

// Bouton de changement de thème
if(themeButton){
    themeButton.addEventListener("click", toggleTheme);
}

function toggleTheme(){

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

    updateThemeButton();

}

// Mise à jour de l'icône du bouton
function updateThemeButton(){

    if(!themeButton) return;

    if(document.body.classList.contains("dark-theme")){
        themeButton.textContent = "☀️";
    }else{
        themeButton.textContent = "🌙";
    }

}

// Initialisation
updateThemeButton();
