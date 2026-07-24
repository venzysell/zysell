/* =======================================================
   ZYSELL AUTH
======================================================= */

"use strict";

/* =======================================================
   IMPORT FIREBASE
======================================================= */

import{

auth

}from"./firebase.js";

import{

createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
sendPasswordResetEmail,
updateProfile

}from"https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

/* =======================================================
   ÉLÉMENTS
======================================================= */

const signupForm=document.getElementById("signupForm");

const loginForm=document.getElementById("loginForm");

const logoutBtn=document.getElementById("logoutBtn");

const resetForm=document.getElementById("resetForm");

/* =======================================================
   AFFICHER UN MESSAGE
======================================================= */

function showMessage(message,type="success"){

const alert=document.createElement("div");

alert.className=`alert ${type}`;

alert.textContent=message;

document.body.appendChild(alert);

setTimeout(()=>{

alert.classList.add("show");

},50);

setTimeout(()=>{

alert.classList.remove("show");

setTimeout(()=>{

alert.remove();

},300);

},3000);

}

/* =======================================================
   VALIDATION EMAIL
======================================================= */

function validEmail(email){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

/* =======================================================
   VALIDATION MOT DE PASSE
======================================================= */

function validPassword(password){

return password.length>=8;

}/* =======================================================
   INSCRIPTION
======================================================= */

if(signupForm){

signupForm.addEventListener("submit",async(event)=>{

event.preventDefault();

const name=signupForm.querySelector("[name='name']").value.trim();

const email=signupForm.querySelector("[name='email']").value.trim();

const password=signupForm.querySelector("[name='password']").value;

const confirmPassword=signupForm.querySelector("[name='confirmPassword']").value;

if(!validEmail(email)){

showMessage("Adresse e-mail invalide.","error");

return;

}

if(!validPassword(password)){

showMessage("Le mot de passe doit contenir au moins 8 caractères.","error");

return;

}

if(password!==confirmPassword){

showMessage("Les mots de passe ne correspondent pas.","error");

return;

}

try{

const credential=await createUserWithEmailAndPassword(

auth,

email,

password

);

await updateProfile(credential.user,{

displayName:name

});

showMessage("Compte créé avec succès.");

window.location.href="dashboard.html";

}catch(error){

showMessage(error.message,"error");

}

});

}

/* =======================================================
   CONNEXION
======================================================= */

if(loginForm){

loginForm.addEventListener("submit",async(event)=>{

event.preventDefault();

const email=loginForm.querySelector("[name='email']").value.trim();

const password=loginForm.querySelector("[name='password']").value;

try{

await signInWithEmailAndPassword(

auth,

email,

password

);

showMessage("Connexion réussie.");

window.location.href="dashboard.html";

}catch(error){

showMessage(error.message,"error");

}

});

}

/* =======================================================
   RÉINITIALISATION DU MOT DE PASSE
======================================================= */

if(resetForm){

resetForm.addEventListener("submit",async(event)=>{

event.preventDefault();

const email=resetForm.querySelector("[name='email']").value.trim();

if(!validEmail(email)){

showMessage("Adresse e-mail invalide.","error");

return;

}

try{

await sendPasswordResetEmail(auth,email);

showMessage("E-mail de réinitialisation envoyé.");

}catch(error){

showMessage(error.message,"error");

}

});
}/* =======================================================
   DÉCONNEXION
======================================================= */

if(logoutBtn){

logoutBtn.addEventListener("click",async()=>{

try{

await signOut(auth);

showMessage("Déconnexion réussie.");

window.location.href="login.html";

}catch(error){

showMessage(error.message,"error");

}

});

}

/* =======================================================
   SURVEILLANCE DE LA SESSION
======================================================= */

onAuthStateChanged(auth,(user)=>{

const privatePages=[

"dashboard.html",
"profile.html",
"orders.html",
"downloads.html",
"wishlist.html",
"settings.html",
"create-store.html",
"store.html",
"admin.html"

];

const page=window.location.pathname.split("/").pop();

if(!user&&privatePages.includes(page)){

window.location.href="login.html";

return;

}

if(user){

document.querySelectorAll("[data-user-name]").forEach(element=>{

element.textContent=user.displayName||"Utilisateur";

});

document.querySelectorAll("[data-user-email]").forEach(element=>{

element.textContent=user.email;

});

document.querySelectorAll("[data-user-photo]").forEach(element=>{

element.src=user.photoURL||"assets/images/default-avatar.png";

});

}

});

/* =======================================================
   UTILITAIRES
======================================================= */

function currentUser(){

return auth.currentUser;

}

function isLoggedIn(){

return auth.currentUser!==null;

}

/* =======================================================
   API GLOBALE
======================================================= */

window.ZysellAuth={

currentUser,

isLoggedIn,

logout:()=>signOut(auth)

};

/* =======================================================
   INITIALISATION
======================================================= */

document.addEventListener("DOMContentLoaded",()=>{

console.log("ZYSELL AUTH INITIALISÉ");

});

/* =======================================================
   FIN DU FICHIER
======================================================= */
