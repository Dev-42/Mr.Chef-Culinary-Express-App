// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8u75Sil8ZAm5en6hm6wCAJ9mcEE_hCq4",
  authDomain: "mrchef-authentication.firebaseapp.com",
  projectId: "mrchef-authentication",
  storageBucket: "mrchef-authentication.appspot.com",
  messagingSenderId: "725459431701",
  appId: "1:725459431701:web:459c09042905ad70bff91c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
document.getElementById('createAccount1221').addEventListener('click',function(e){
    e.preventDefault();
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let userName = document.getElementById('signupName').value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Thanks for Registering!!!")
        console.log(user)

        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('User already registered!!!')
        // ..
    });
})

// Login Portion authentication
document.getElementById('submitBtn').addEventListener('click',function(e){
    e.preventDefault();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('UserNameCover',user)
        alert("Succesfully Logged In!!!")
        window.location.href = '../Anas/index.html'
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid Credentials!!!")
    });
})

// Google sign in
document.getElementById('googleSignIn1').addEventListener('click',function(){
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  auth.useDeviceLanguage();

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    window.location.href = '../Anas/index.html'
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert("Auth Failed")
  });

})