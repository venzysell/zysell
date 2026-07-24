/* =======================================================
   ZYSELL APP
======================================================= */

"use strict";

/* =======================================================
   SÉLECTEURS
======================================================= */

const body = document.body;

const header = document.querySelector(".header");

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

const navMenu = document.querySelector(".nav-menu");

const faqItems = document.querySelectorAll(".faq-item");

const revealElements = document.querySelectorAll(".reveal");

const backToTop = document.querySelector(".back-to-top");

/* =======================================================
   MENU MOBILE
======================================================= */

if(mobileMenuBtn){

mobileMenuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

mobileMenuBtn.classList.toggle("active");

});

}

/* =======================================================
   FERMER LE MENU APRÈS UN CLIC
======================================================= */

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

if(navMenu){

navMenu.classList.remove("active");

}

if(mobileMenuBtn){

mobileMenuBtn.classList.remove("active");

}

});

});

/* =======================================================
   HEADER AU SCROLL
======================================================= */

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header?.classList.add("scrolled");

}else{

header?.classList.remove("scrolled");

}

});/* =======================================================
   DÉFILEMENT FLUIDE
======================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/* =======================================================
   BOUTON RETOUR EN HAUT
======================================================= */

if(backToTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* =======================================================
   SCROLL REVEAL
======================================================= */

const revealOnScroll=()=>{

revealElements.forEach(element=>{

const windowHeight=window.innerHeight;

const elementTop=element.getBoundingClientRect().top;

const revealPoint=120;

if(elementTop<windowHeight-revealPoint){

element.classList.add("active");

}

});

};

window.addEventListener("scroll",revealOnScroll);

window.addEventListener("load",revealOnScroll);

/* =======================================================
   ANIMATION DES COMPTEURS
======================================================= */

const counters=document.querySelectorAll("[data-counter]");

const startCounter=(counter)=>{

const target=Number(counter.dataset.counter);

const duration=2000;

const step=Math.max(1,Math.ceil(target/(duration/16)));

let value=0;

const timer=setInterval(()=>{

value+=step;

if(value>=target){

value=target;

clearInterval(timer);

}

counter.textContent=value.toLocaleString();

},16);

};

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

observer.unobserve(entry.target);

}

});

},{threshold:0.5});

counters.forEach(counter=>observer.observe(counter));/* =======================================================
   FAQ
======================================================= */

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question?.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

/* =======================================================
   EFFET AU SURVOL DES CARTES
======================================================= */

const cards=document.querySelectorAll(

".product-card,.category-card,.creator-card,.feature-card,.testimonial-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.classList.add("hover");

});

card.addEventListener("mouseleave",()=>{

card.classList.remove("hover");

});

});

/* =======================================================
   CHARGEMENT DE LA PAGE
======================================================= */

window.addEventListener("load",()=>{

body.classList.add("loaded");

const loader=document.querySelector(".loader-wrapper");

if(loader){

setTimeout(()=>{

loader.classList.add("hide");

},400);

}

});

/* =======================================================
   RACCOURCI CLAVIER
======================================================= */

document.addEventListener("keydown",event=>{

if(event.key==="Escape"){

navMenu?.classList.remove("active");

mobileMenuBtn?.classList.remove("active");

}

});

/* =======================================================
   OPTIMISATION REDIMENSIONNEMENT
======================================================= */

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer=setTimeout(()=>{

if(window.innerWidth>768){

navMenu?.classList.remove("active");

mobileMenuBtn?.classList.remove("active");

}

},200);

});

/* =======================================================
   INITIALISATION
======================================================= */

document.addEventListener("DOMContentLoaded",()=>{

console.log("ZYSELL APP INITIALISÉ");

revealOnScroll();

});

/* =======================================================
   FIN DU FICHIER
======================================================= */
