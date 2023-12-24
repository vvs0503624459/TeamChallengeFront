// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDhTs6Faicj0Ue79r23UBXINRk25F1zXmo",
//   authDomain: "electronic-heaven.firebaseapp.com",
//   projectId: "electronic-heaven",
//   storageBucket: "electronic-heaven.appspot.com",
//   messagingSenderId: "36386748576",
//   appId: "1:36386748576:web:ef1610d702c9a30c3231c5",
//   measurementId: "G-7LYCYXP2HL"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Ініціалізація Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// Ініціалізація постачальника автентифікації Firebase
const provider = new GoogleAuthProvider();
  
// кожного разу, коли користувач взаємодіє з постачальником, ми змушуємо його щоб вибрати обліковий запис
provider.setCustomParameters({   
    prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);