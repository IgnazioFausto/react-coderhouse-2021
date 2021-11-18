import firebase from 'firebase/app'
import 'firebase/firestore'


// config de firebase/firestore
const firebaseConfig = {
  apiKey: "AIzaSyCTV6vswVrZQjbi6NaCheCeanGITRx7-NE",
  authDomain: "mi-huertapp.firebaseapp.com",
  projectId: "mi-huertapp",
  storageBucket: "mi-huertapp.appspot.com",
  messagingSenderId: "639868948893",
  appId: "1:639868948893:web:092717bc92534dc8a85f74"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}