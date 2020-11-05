//importando firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

//constante de configuracion de firebase
const firebaseConfig = {
    apiKey: "AIzaSyCAbdGgGbVK9Bh7h06D3EvlnIFqOD6GGck",
    authDomain: "parcial3-dps.firebaseapp.com",
    databaseURL: "https://parcial3-dps.firebaseio.com",
    projectId: "parcial3-dps",
    storageBucket: "parcial3-dps.appspot.com",
    messagingSenderId: "415817663845",
    appId: "1:415817663845:web:2f140e2780243da6e2cd8c"
};

//iniciando conexion con la base
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();