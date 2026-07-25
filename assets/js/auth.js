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
// =====================================
// INSCRIPTION
// =====================================

export async function registerUser(name, email, password){

    try{

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {

            uid: user.uid,
            name: name,
            email: email,
            createdAt: new Date().toISOString()

        });

        console.log("Inscription réussie :", user.email);

        return user;

    }catch(error){

        console.error("Erreur :", error.message);

        throw error;

    }

}
// =====================================
// CONNEXION
// =====================================

export async function loginUser(email, password){

    try{

        const userCredential = await signInWithEmailAndPassword(

            auth,
            email,
            password

        );

        const user = userCredential.user;

        console.log("Connexion réussie :", user.email);

        return user;

    }catch(error){

        console.error("Erreur de connexion :", error.message);

        throw error;

    }

}
// =====================================
// DÉCONNEXION
// =====================================

export async function logoutUser(){

    try{

        await signOut(auth);

        console.log("Déconnexion réussie.");

    }catch(error){

        console.error("Erreur de déconnexion :", error.message);

        throw error;

    }

}
// =====================================
// PROFIL UTILISATEUR
// =====================================

export async function getCurrentUserProfile(){

    const user = auth.currentUser;

    if(!user){

        return null;

    }

    try{

        const userDoc = await getDoc(doc(db, "users", user.uid));

        if(userDoc.exists()){

            return userDoc.data();

        }

        return null;

    }catch(error){

        console.error("Erreur lors de la récupération du profil :", error.message);

        throw error;

    }

}

