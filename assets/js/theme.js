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
// ICÔNE DU THÈME
// =====================================

const themeIcon = document.querySelector(".theme-btn i");

function updateThemeIcon(){

    if(!themeIcon) return;

    if(document.body.classList.contains("dark-theme")){

        themeIcon.className = "fas fa-sun";

    }else{

        themeIcon.className = "fas fa-moon";

    }

}

updateThemeIcon();

if(themeButton){

    themeButton.addEventListener("click", () => {

        setTimeout(updateThemeIcon, 100);

    });

}
