/* =======================================================
   ZYSELL THEME
======================================================= */

"use strict";

/* =======================================================
   ÉLÉMENTS
======================================================= */

const themeButtons=document.querySelectorAll("#themeBtn, #themeBtnMobile");

const body=document.body;

const storageKey="zysell-theme";

/* =======================================================
   PRÉFÉRENCE SYSTÈME
======================================================= */

const prefersDark=window.matchMedia("(prefers-color-scheme: dark)");

/* =======================================================
   APPLIQUER LE THÈME
======================================================= */

function applyTheme(theme){

if(theme==="dark"){

body.classList.add("dark");

}else{

body.classList.remove("dark");

}

updateThemeIcon(theme);

}

/* =======================================================
   SAUVEGARDE
======================================================= */

function saveTheme(theme){

localStorage.setItem(storageKey,theme);

}

/* =======================================================
   LECTURE
======================================================= */

function loadTheme(){

return localStorage.getItem(storageKey);

}

/* =======================================================
   ICÔNE
======================================================= */

function updateThemeIcon(theme){

if(!themeToggle){

return;

}

const icon=themeToggle.querySelector("i");

if(!icon){

return;

}

icon.className=

theme==="dark"

? "fas fa-sun"

: "fas fa-moon";

}/* =======================================================
   BASCULER LE THÈME
======================================================= */

function toggleTheme(){

const isDark=body.classList.contains("dark");

const newTheme=isDark?"light":"dark";

applyTheme(newTheme);

saveTheme(newTheme);

}

/* =======================================================
   CHARGER LE THÈME
======================================================= */

function initializeTheme(){

const savedTheme=loadTheme();

if(savedTheme){

applyTheme(savedTheme);

return;

}

const systemTheme=prefersDark.matches?"dark":"light";

applyTheme(systemTheme);

}

/* =======================================================
   CLIC SUR LE BOUTON
======================================================= */

if(themeToggle){

themeToggle.addEventListener("click",toggleTheme);

}

/* =======================================================
   CHANGEMENT DE THÈME SYSTÈME
======================================================= */

prefersDark.addEventListener("change",event=>{

const savedTheme=loadTheme();

if(savedTheme){

return;

}

const theme=event.matches?"dark":"light";

applyTheme(theme);

});

/* =======================================================
   INITIALISATION
======================================================= */

document.addEventListener("DOMContentLoaded",()=>{

initializeTheme();

});/* =======================================================
   SYNCHRONISATION ENTRE ONGLETS
======================================================= */

window.addEventListener("storage",(event)=>{

if(event.key!==storageKey){

return;

}

const theme=event.newValue||"light";

applyTheme(theme);

});

/* =======================================================
   MÉTHODES UTILITAIRES
======================================================= */

function setDarkTheme(){

applyTheme("dark");

saveTheme("dark");

}

function setLightTheme(){

applyTheme("light");

saveTheme("light");

}

function getCurrentTheme(){

return body.classList.contains("dark")

? "dark"

: "light";

}

/* =======================================================
   API GLOBALE
======================================================= */

window.ZysellTheme={

toggle:toggleTheme,

setDark:setDarkTheme,

setLight:setLightTheme,

current:getCurrentTheme

};

/* =======================================================
   VALIDATION
======================================================= */

console.log(

`Thème actif : ${getCurrentTheme()}`

);

/* =======================================================
   FIN DU FICHIER
======================================================= */
