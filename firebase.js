import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDknS2PduCGIgk69SHyraxhge2D69HIYYI",
  authDomain: "fir-19e91.firebaseapp.com",
  projectId: "fir-19e91",
  storageBucket: "fir-19e91.appspot.com",
  messagingSenderId: "1074680512275",
  appId: "1:1074680512275:web:8d27f103616306f3c464e6"
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db