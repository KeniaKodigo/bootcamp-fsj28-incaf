import { initializeApp } from "firebase/app";
//uso de la base de datos
import { getFirestore } from "firebase/firestore";

//objeto que contiene la configuracion de tu proyecto en firebase
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGIN,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
//creamos una constante para obtener la base de datos de nuestro proyecto de firebase
const dbStore = getFirestore(app)
export { dbStore }

