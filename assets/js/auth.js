// =====================================
// ZYSELL - AUTH.JS
// =====================================

import {
    auth,
    db
} from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Vérifier si un utilisateur est connecté

onAuthStateChanged(auth, async (user) => {

    if(user){

        console.log("Utilisateur connecté :", user.email);

    }else{

        console.log("Aucun utilisateur connecté");

    }

});
