import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBK5CyFih4cyqHtzknuN_WL6yXk-kV2xT0",
  authDomain: "restaurant-app-52a7f.firebaseapp.com",
  databaseURL: "https://restaurant-app-52a7f-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-52a7f",
  storageBucket: "restaurant-app-52a7f.appspot.com",
  messagingSenderId: "879851822561",
  appId: "1:879851822561:web:2e01c065f17f65fca206a0",
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage}