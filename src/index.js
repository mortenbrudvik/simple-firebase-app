// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, OAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1sNJ2mxVrm2yIf1Jp7sC1uANAK6otEcg",
    authDomain: "simple-project-16c36.firebaseapp.com",
    projectId: "simple-project-16c36",
    storageBucket: "simple-project-16c36.appspot.com",
    messagingSenderId: "79885646663",
    appId: "1:79885646663:web:ec9bb837ab481b4752ea62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth with Microsoft
// https://firebase.google.com/docs/auth/web/microsoft-oauth
const auth = getAuth(app);
const provider = new OAuthProvider('microsoft.com');

export async function signInOrSignOut() {
    const signInButton = document.getElementById('signInButton');
    if (auth.currentUser) {
        await signOut(auth);
        signInButton.textContent = 'Sign In with Microsoft';
    } else {
        await signInWithPopup(auth, provider);
        signInButton.textContent = 'Sign Out';
    }
}



