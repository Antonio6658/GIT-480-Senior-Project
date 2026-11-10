import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth, signInWithCustomToken, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

// firebase data config for project
const firebaseConfig = {
  apiKey: "AIzaSyDOX6AvsgG-eIW6C9630oSY-2_ZZYK5bG0",
  authDomain: "git480seniorproject.firebaseapp.com",
  projectId: "git480seniorproject",
  storageBucket: "git480seniorproject.firebasestorage.app",
  messagingSenderId: "986353334925",
  appId: "1:986353334925:web:c72e8ba96560417cbd40c4",
  measurementId: "G-EFHRP9N4TQ"
};

// variables for app, authentication and database
let app = initializeApp(firebaseConfig);
let auth = getAuth(app);
let db = getFirestore(app);

// pulls user info from signup form
let signupForm = document.getElementById("signup-form");

// event listener for when the user submits their info into the form
signupForm.addEventListener("submit", async (e) =>{

    // prevent default submission
    e.preventDefault();

    // store email in variable
    let email = document.getElementById("signup-email").value;
    // store password in variable
    let password = document.getElementById("signup-password").value;
    

    // try catch block
    try{
        // store user credentials in variable
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        let user = userCredential.user;

        // verify user actually has access to inputted email
        await sendEmailVerification(user);

        // send user info to database
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            createdAt: new Date()
        });
        // confirm user info was created
        alert("User info created");
    }

    // error message catch block
    catch(error){
        console.error(error);
    }
});
