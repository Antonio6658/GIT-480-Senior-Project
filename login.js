import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth, signInWithCustomToken, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDOX6AvsgG-eIW6C9630oSY-2_ZZYK5bG0",
  authDomain: "git480seniorproject.firebaseapp.com",
  projectId: "git480seniorproject",
  storageBucket: "git480seniorproject.firebasestorage.app",
  messagingSenderId: "986353334925",
  appId: "1:986353334925:web:c72e8ba96560417cbd40c4",
  measurementId: "G-EFHRP9N4TQ"
};

let app = initializeApp(firebaseConfig);
let auth = getAuth(app);
let db = getFirestore(app);

let signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", async (e) =>{
    e.preventDefault();
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    
    
});
