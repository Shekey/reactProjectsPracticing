import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBQdA4sqlaYc95M7nJY9Rprwc8u0edoOeQ",
  authDomain: "react-forms-e2539.firebaseapp.com",
  databaseURL: "https://react-forms-e2539.firebaseio.com",
  projectId: "react-forms-e2539",
  storageBucket: "",
  messagingSenderId: "953263185777",
  appId: "1:953263185777:web:168693f3639c89c82ca0d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set('It works'); 
