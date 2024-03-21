// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, OAuthProvider, onAuthStateChanged  } from "firebase/auth";
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

onAuthStateChanged(auth, (user) => {
    const signInButton = document.getElementById('signInButton');
    const userText = document.getElementById('userText');
    console.log(user);
    if (user) {
        console.log('User is signed in');
        signInButton.textContent = 'Sign Out';
        userText.textContent = user.displayName;
    } else {
        console.log('User is signed out');
        signInButton.textContent = 'Sign In with Microsoft';
        userText.textContent = '';
    }
});

export async function signInOrSignOut() {
    if (auth.currentUser) {
        await signOut(auth);
    } else {
        await signInWithPopup(auth, provider);
    }
}

document.getElementById('signInButton').addEventListener('click', signInOrSignOut);

