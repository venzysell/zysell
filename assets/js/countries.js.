/* =======================================================
   ZYSELL COUNTRIES
======================================================= */

"use strict";

/* =======================================================
   ÉLÉMENTS
======================================================= */

const countrySelect=document.getElementById("country");

const phoneCode=document.getElementById("phoneCode");

const currencyElement=document.getElementById("currency");

const flagElement=document.getElementById("countryFlag");

/* =======================================================
   PAYS
======================================================= */

const countries=[

{

code:"CM",

name:"Cameroun",

currency:"XAF",

symbol:"FCFA",

phone:"+237",

language:"fr",

timezone:"Africa/Douala",

flag:"🇨🇲"

},

{

code:"CI",

name:"Côte d'Ivoire",

currency:"XOF",

symbol:"FCFA",

phone:"+225",

language:"fr",

timezone:"Africa/Abidjan",

flag:"🇨🇮"

},

{

code:"SN",

name:"Sénégal",

currency:"XOF",

symbol:"FCFA",

phone:"+221",

language:"fr",

timezone:"Africa/Dakar",

flag:"🇸🇳"

},

{

code:"BJ",

name:"Bénin",

currency:"XOF",

symbol:"FCFA",

phone:"+229",

language:"fr",

timezone:"Africa/Porto-Novo",

flag:"🇧🇯"

},

{

code:"TG",

name:"Togo",

currency:"XOF",

symbol:"FCFA",

phone:"+228",

language:"fr",

timezone:"Africa/Lome",

flag:"🇹🇬"

},

{

code:"GA",

name:"Gabon",

currency:"XAF",

symbol:"FCFA",

phone:"+241",

language:"fr",

timezone:"Africa/Libreville",

flag:"🇬🇦"

},

{

code:"CD",

name:"République Démocratique du Congo",

currency:"CDF",

symbol:"FC",

phone:"+243",

language:"fr",

timezone:"Africa/Kinshasa",

flag:"🇨🇩"

},

{

code:"CG",

name:"République du Congo",

currency:"XAF",

symbol:"FCFA",

phone:"+242",

language:"fr",

timezone:"Africa/Brazzaville",

flag:"🇨🇬"

},

{

code:"TD",

name:"Tchad",

currency:"XAF",

symbol:"FCFA",

phone:"+235",

language:"fr",

timezone:"Africa/Ndjamena",

flag:"🇹🇩"

},

{

code:"NG",

name:"Nigeria",

currency:"NGN",

symbol:"₦",

phone:"+234",

language:"en",

timezone:"Africa/Lagos",

flag:"🇳🇬"

}

];/* =======================================================
   REMPLIR LE SÉLECTEUR
======================================================= */

function populateCountries(){

if(!countrySelect){

return;

}

countrySelect.innerHTML="";

countries.forEach(country=>{

const option=document.createElement("option");

option.value=country.code;

option.textContent=`${country.flag} ${country.name}`;

countrySelect.appendChild(option);

});

}

/* =======================================================
   METTRE À JOUR LE PAYS
======================================================= */

function updateCountry(code){

const country=countries.find(

item=>item.code===code

);

if(!country){

return;

}

if(flagElement){

flagElement.textContent=country.flag;

}

if(phoneCode){

phoneCode.textContent=country.phone;

}

if(currencyElement){

currencyElement.textContent=

`${country.currency} (${country.symbol})`;

}

localStorage.setItem(

"zysell-country",

country.code

);

document.documentElement.lang=

country.language;

}

/* =======================================================
   CHANGEMENT DE PAYS
======================================================= */

if(countrySelect){

populateCountries();

countrySelect.addEventListener("change",event=>{

updateCountry(event.target.value);

});

}/* =======================================================
   DÉTECTION DU PAYS
======================================================= */

function detectCountry(){

const browserLanguage=(navigator.language||"fr").toLowerCase();

const detected=countries.find(

country=>country.language===browserLanguage.substring(0,2)

);

return detected?detected.code:"CM";

}

/* =======================================================
   INITIALISATION
======================================================= */

document.addEventListener("DOMContentLoaded",()=>{

populateCountries();

const savedCountry=

localStorage.getItem("zysell-country")||

detectCountry();

if(countrySelect){

countrySelect.value=savedCountry;

}

updateCountry(savedCountry);

});

/* =======================================================
   SYNCHRONISATION ENTRE ONGLETS
======================================================= */

window.addEventListener("storage",event=>{

if(event.key==="zysell-country"){

updateCountry(event.newValue);

}

});

/* =======================================================
   API GLOBALE
======================================================= */

window.ZysellCountries={

list:countries,

getCountry(code){

return countries.find(

country=>country.code===code

);

},

current(){

return localStorage.getItem("zysell-country");

},

detect:detectCountry,

update:updateCountry

};

/* =======================================================
   VALIDATION
======================================================= */

console.log(

`ZYSELL COUNTRIES INITIALISÉ (${countries.length} pays).`

);

/* =======================================================
   FIN DU FICHIER
======================================================= */
