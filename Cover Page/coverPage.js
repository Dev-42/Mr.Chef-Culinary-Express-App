// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
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
