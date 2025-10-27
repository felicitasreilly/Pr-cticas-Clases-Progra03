import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCfsFZ-3MZpJ4ZuO14-mc6b6RRnmiieiU4",
  authDomain: "proyecto-clase11.firebaseapp.com",
  projectId: "proyecto-clase11",
  storageBucket: "proyecto-clase11.firebasestorage.app",
  messagingSenderId: "1036518468219",
  appId: "1:1036518468219:web:3c745d0207a549458f90de"
};


app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()