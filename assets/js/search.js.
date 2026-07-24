/* =======================================================
   ZYSELL SEARCH
======================================================= */

"use strict";

/* =======================================================
   ÉLÉMENTS
======================================================= */

const searchInput=document.getElementById("searchInput");

const searchResults=document.getElementById("searchResults");

const productCards=document.querySelectorAll(".product-card");

const creatorCards=document.querySelectorAll(".creator-card");

const categoryCards=document.querySelectorAll(".category-card");

/* =======================================================
   NORMALISATION
======================================================= */

function normalize(text){

return text

.toLowerCase()

.normalize("NFD")

.replace(/[\u0300-\u036f]/g,"")

.trim();

}

/* =======================================================
   AFFICHER / MASQUER
======================================================= */

function showResults(){

if(searchResults){

searchResults.style.display="block";

}

}

function hideResults(){

if(searchResults){

searchResults.style.display="none";

searchResults.innerHTML="";

}

}

/* =======================================================
   CRÉATION D'UN RÉSULTAT
======================================================= */

function createResult(title,url,type){

const item=document.createElement("a");

item.className="search-result";

item.href=url;

item.innerHTML=`

<div class="search-result-title">${title}</div>

<div class="search-result-type">${type}</div>

`;

return item;

}/* =======================================================
   RECHERCHE INSTANTANÉE
======================================================= */

function performSearch(query){

const keyword=normalize(query);

hideResults();

if(keyword.length===0){

resetCards();

return;

}

showResults();

let totalResults=0;

/* =======================================================
   PRODUITS
======================================================= */

productCards.forEach(card=>{

const title=normalize(card.dataset.title||"");

const category=normalize(card.dataset.category||"");

if(title.includes(keyword)||category.includes(keyword)){

card.style.display="";

totalResults++;

if(searchResults){

searchResults.appendChild(

createResult(

card.dataset.title,

card.dataset.url||"product.html",

"Produit"

)

);

}

}else{

card.style.display="none";

}

});

/* =======================================================
   CRÉATEURS
======================================================= */

creatorCards.forEach(card=>{

const name=normalize(card.dataset.name||"");

if(name.includes(keyword)){

card.style.display="";

totalResults++;

if(searchResults){

searchResults.appendChild(

createResult(

card.dataset.name,

card.dataset.url||"store.html",

"Créateur"

)

);

}

}else{

card.style.display="none";

}

});

/* =======================================================
   CATÉGORIES
======================================================= */

categoryCards.forEach(card=>{

const category=normalize(card.dataset.category||"");

if(category.includes(keyword)){

card.style.display="";

totalResults++;

if(searchResults){

searchResults.appendChild(

createResult(

card.dataset.category,

card.dataset.url||"explore.html",

"Catégorie"

)

);

}

}else{

card.style.display="none";

}

});

/* =======================================================
   AUCUN RÉSULTAT
======================================================= */

if(totalResults===0&&searchResults){

searchResults.innerHTML=`

<div class="search-empty">

Aucun résultat trouvé.

</div>

`;

}

}

/* =======================================================
   ÉVÉNEMENT INPUT
======================================================= */

if(searchInput){

searchInput.addEventListener("input",event=>{

performSearch(event.target.value);

});

}/* =======================================================
   RÉINITIALISATION
======================================================= */

function resetCards(){

[

...productCards,

...creatorCards,

...categoryCards

].forEach(card=>{

card.style.display="";

});

hideResults();

}

/* =======================================================
   FERMETURE DES RÉSULTATS
======================================================= */

document.addEventListener("click",event=>{

if(

searchResults&&

searchInput&&

!searchResults.contains(event.target)&&

event.target!==searchInput

){

hideResults();

}

});

/* =======================================================
   DEBOUNCE
======================================================= */

function debounce(callback,delay=300){

let timeout;

return(...args)=>{

clearTimeout(timeout);

timeout=setTimeout(()=>{

callback(...args);

},delay);

};

}

if(searchInput){

const liveSearch=debounce(event=>{

performSearch(event.target.value);

},250);

searchInput.removeEventListener("input",performSearch);

searchInput.addEventListener("input",liveSearch);

}

/* =======================================================
   NAVIGATION CLAVIER
======================================================= */

let selectedIndex=-1;

document.addEventListener("keydown",event=>{

if(!searchResults){

return;

}

const items=searchResults.querySelectorAll(".search-result");

if(items.length===0){

return;

}

if(event.key==="ArrowDown"){

event.preventDefault();

selectedIndex=(selectedIndex+1)%items.length;

}

else if(event.key==="ArrowUp"){

event.preventDefault();

selectedIndex=

(selectedIndex-1+items.length)%items.length;

}

else if(event.key==="Enter"){

if(selectedIndex>=0){

items[selectedIndex].click();

}

}

items.forEach(item=>{

item.classList.remove("active");

});

if(selectedIndex>=0){

items[selectedIndex].classList.add("active");

items[selectedIndex].scrollIntoView({

block:"nearest"

});

}

});

/* =======================================================
   INITIALISATION
======================================================= */

document.addEventListener("DOMContentLoaded",()=>{

console.log("ZYSELL SEARCH INITIALISÉ");

});

/* =======================================================
   FIN DU FICHIER
======================================================= */
