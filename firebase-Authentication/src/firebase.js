import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyApjKsMctgcDGGiVuXSaYeZLGmKnOhWjRk",
  authDomain: "fir-authentication-745c8.firebaseapp.com",
  projectId: "fir-authentication-745c8",
  storageBucket: "fir-authentication-745c8.appspot.com",
  messagingSenderId: "728574391668",
  appId: "1:728574391668:web:780a00f7b6e097feb9e821",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app , auth};
