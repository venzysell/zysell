// =====================================
// ZYSELL - THEME.JS
// =====================================

const themeButton = document.querySelector(".theme-btn");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-theme");

}

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

}
// =====================================
// DÉTECTION AUTOMATIQUE DU THÈME
// =====================================

if(!localStorage.getItem("theme")){

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if(prefersDark.matches){

        document.body.classList.add("dark-theme");

    }

    prefersDark.addEventListener("change", (event)=>{

        if(!localStorage.getItem("theme")){

            document.body.classList.toggle("dark-theme", event.matches);

        }

    });

}
// =====================================
// MISE À JOUR DE L'ICÔNE DU THÈME
// =====================================

function updateThemeButton(){

    if(!themeButton) return;

    if(document.body.classList.contains("dark-theme")){

        themeButton.textContent = "☀️";

    }else{

        themeButton.textContent = "🌙";

    }

}

updateThemeButton();

if(themeButton){

    themeButton.addEventListener("click", () => {

        setTimeout(updateThemeButton, 50);

    });

}
