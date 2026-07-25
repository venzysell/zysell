/* =======================================================
   ZYSELL FIREBASE
======================================================= */

"use strict";

/* =======================================================
   IMPORTS FIREBASE
======================================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

/* =======================================================
   CONFIGURATION FIREBASE
======================================================= */

const firebaseConfig = {
    apiKey: "AIzaSyAYuh-EnlgQjlqgBO2HFFeC5Y5uH4TrEds",
    authDomain: "zysell-86604.firebaseapp.com",
    projectId: "zysell-86604",
    storageBucket: "zysell-86604.firebasestorage.app",
    messagingSenderId: "567755208394",
    appId: "1:567755208394:web:754d1eec59cf8a659b2633",
    measurementId: "G-Y95H3VL447"
};/* =======================================================
   INITIALISATION DE FIREBASE
======================================================= */

const app = initializeApp(firebaseConfig);

/* =======================================================
   SERVICES FIREBASE
======================================================= */

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

let analytics = null;

if (typeof window !== "undefined") {
    try {
        analytics = getAnalytics(app);
    } catch (error) {
        console.warn("Analytics non disponible :", error.message);
    }
}/* =======================================================
   EXPORT DES SERVICES
======================================================= */

export {
    app,
    auth,
    db,
    storage,
    analytics
};

/* =======================================================
   UTILITAIRES
======================================================= */

function isOnline() {
    return navigator.onLine;
}

function getCurrentUser() {
    return auth.currentUser;
}

function getCurrentUserId() {
    return auth.currentUser?.uid ?? null;
}

function getCurrentUserEmail() {
    return auth.currentUser?.email ?? null;
}

function isAuthenticated() {
    return auth.currentUser !== null;
}

/* =======================================================
   SURVEILLANCE DE LA CONNEXION
======================================================= */

window.addEventListener("online", () => {
    console.log("🌐 Connexion Internet rétablie.");
});

window.addEventListener("offline", () => {
    console.warn("📴 Connexion Internet perdue.");
});
