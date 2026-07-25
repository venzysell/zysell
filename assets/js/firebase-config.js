// =====================================
// ZYSELL - FIREBASE CONFIG
// =====================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYuh-EnlgQjlqgBO2HFFeC5Y5uH4TrEds",
    authDomain: "zysell-86604.firebaseapp.com",
    projectId: "zysell-86604",
    storageBucket: "zysell-86604.firebasestorage.app",
    messagingSenderId: "567755208394",
    appId: "1:567755208394:web:754d1eec59cf8a659b2633",
    measurementId: "G-Y95H3VL447"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
