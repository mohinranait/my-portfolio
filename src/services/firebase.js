// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFWEet2dcT6LEckn1j5h1kaPu_QgHQTis",
  authDomain: "my-portfolio-96b58.firebaseapp.com",
  projectId: "my-portfolio-96b58",
  storageBucket: "my-portfolio-96b58.appspot.com",
  messagingSenderId: "425186420448",
  appId: "1:425186420448:web:2eba5b8e071fb7060ed285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;