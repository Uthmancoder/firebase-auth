// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFhNU15thzCestrRxg5E8wqa93ne2hPjU",
  authDomain: "fir-tutorial-1d2f3.firebaseapp.com",
  databaseURL: "https://fir-tutorial-1d2f3-default-rtdb.firebaseio.com",
  projectId: "fir-tutorial-1d2f3",
  storageBucket: "fir-tutorial-1d2f3.appspot.com",
  messagingSenderId: "918085187366",
  appId: "1:918085187366:web:06c24de3726388d016f3e7",
  measurementId: "G-BS1475TX1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//  Initialize Google Authentication and get a reference to the service
const provider = new GoogleAuthProvider();

// let signUpWithemailandpass = document.getElementById("studentDetails");
// signUpWithemailandpass.addEventListener("click", function () {
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       console.log("User Info : ", user);
//       alert("User signed up successfully");
//       window.location.href = "signin.html";
//     })
//     .catch((error) => {
//       if (error.code === "auth/email-already-in-use") {
//         alert("Email already in use");
//       } else if (error.code === "auth/invalid-email") {
//         alert("Invalid Email");
//       } else if (error.code === "auth/weak-password") {
//         alert("Weak Password");
//       } else {
//         alert("Error : ", error.message);
//       }
//     });
// });

// Sign In Functoinalities :
let subnBtn = document.getElementById("signinBtn");
subnBtn.addEventListener("click", function () {
  let email = document.getElementById("signemail").value;
  let password = document.getElementById("signpassword").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("User Signed In Successfully");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
      console.log("error", errorMessage);
    });
});

// Sign in with google
let signWithGgl = document.getElementById("signWithGgl");

signWithGgl.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("User Info : ", user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
