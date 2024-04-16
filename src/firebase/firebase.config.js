import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBypBDwGlGP_cV6qyoTegZkoSXwChVQJQc",
  authDomain: "real-estate-auth-b141a.firebaseapp.com",
  projectId: "real-estate-auth-b141a",
  storageBucket: "real-estate-auth-b141a.appspot.com",
  messagingSenderId: "256310361655",
  appId: "1:256310361655:web:4239b54c4366cd8a4449b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;