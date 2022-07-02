import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtKxuqPleWr7pniAE8dLzflI3ejlZem40",
    authDomain: "food-delivery-8bba2.firebaseapp.com",
    projectId: "food-delivery-8bba2",
    storageBucket: "food-delivery-8bba2.appspot.com",
    messagingSenderId: "225122735404",
    appId: "1:225122735404:web:58a61e9bb146856ac00889"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;