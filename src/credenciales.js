// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS1EWDA8s9Rd19-DTnbT-qKsHv3c8OjmI",
  authDomain: "login-inventario-proyecto-inte.firebaseapp.com",
  projectId: "login-inventario-proyecto-inte",
  storageBucket: "login-inventario-proyecto-inte.firebasestorage.app",
  messagingSenderId: "779557304485",
  appId: "1:779557304485:web:f0de259f2acd0f6703b54c",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

// Ahora puedes exportar 'db' para usarla en otras partes de tu aplicación
export { db };
export default appFirebase;