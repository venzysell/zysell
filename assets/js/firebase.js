/* =======================================================
   ZYSELL FIREBASE
======================================================= */

"use strict";

/* =======================================================
   IMPORTS FIREBASE
======================================================= */

import { initializeApp }

from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import { getAuth }

from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import { getFirestore }

from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

import { getStorage }

from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";

import { getAnalytics }

from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

/* =======================================================
   CONFIGURATION FIREBASE
   Remplace ces valeurs par celles de ton projet Firebase
======================================================= */

const firebaseConfig={

apiKey:"YOUR_API_KEY",

authDomain:"YOUR_PROJECT.firebaseapp.com",

projectId:"YOUR_PROJECT_ID",

storageBucket:"YOUR_PROJECT.appspot.com",

messagingSenderId:"YOUR_SENDER_ID",

appId:"YOUR_APP_ID",

measurementId:"YOUR_MEASUREMENT_ID"

};

/* =======================================================
   INITIALISATION
======================================================= */

const app=initializeApp(firebaseConfig);

/* =======================================================
   SERVICES
======================================================= */

const auth=getAuth(app);

const db=getFirestore(app);

const storage=getStorage(app);

const analytics=getAnalytics(app);/* =======================================================
   VÉRIFICATION DES SERVICES
======================================================= */

if(!app){

throw new Error("Impossible d'initialiser Firebase.");

}

if(!auth){

throw new Error("Firebase Authentication indisponible.");

}

if(!db){

throw new Error("Cloud Firestore indisponible.");

}

if(!storage){

throw new Error("Firebase Storage indisponible.");

}

/* =======================================================
   MODE DÉVELOPPEMENT
======================================================= */

const isDevelopment=

window.location.hostname==="localhost"||

window.location.hostname==="127.0.0.1";

if(isDevelopment){

console.log("Mode développement Firebase activé.");

}

/* =======================================================
   EXPORT DES SERVICES
======================================================= */

export{

app,

auth,

db,

storage,

analytics

};/* =======================================================
   UTILITAIRES FIREBASE
======================================================= */

function isOnline(){

return navigator.onLine;

}

function getCurrentUser(){

return auth.currentUser;

}

function getCurrentUserId(){

return auth.currentUser

? auth.currentUser.uid

: null;

}

function getCurrentUserEmail(){

return auth.currentUser

? auth.currentUser.email

: null;

}

/* =======================================================
   SURVEILLANCE DE LA CONNEXION
======================================================= */

window.addEventListener("online",()=>{

console.log("Connexion Internet rétablie.");

});

window.addEventListener("offline",()=>{

console.warn("Connexion Internet perdue.");

});

/* =======================================================
   GESTION DES ERREURS FIREBASE
======================================================= */

function firebaseError(error){

console.error(error);

switch(error.code){

case "auth/email-already-in-use":

return "Cette adresse e-mail est déjà utilisée.";

case "auth/invalid-email":

return "Adresse e-mail invalide.";

case "auth/user-not-found":

return "Utilisateur introuvable.";

case "auth/wrong-password":

return "Mot de passe incorrect.";

case "auth/too-many-requests":

return "Trop de tentatives. Réessayez plus tard.";

case "auth/network-request-failed":

return "Vérifiez votre connexion Internet.";

default:

return "Une erreur est survenue.";

}

}

/* =======================================================
   API GLOBALE
======================================================= */

window.ZysellFirebase={

app,

auth,

db,

storage,

analytics,

isOnline,

getCurrentUser,

getCurrentUserId,

getCurrentUserEmail,

firebaseError

};

/* =======================================================
   INITIALISATION
======================================================= */

console.log("Firebase initialisé avec succès.");

/* =======================================================
   FIN DU FICHIER
======================================================= */
