//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
  apiKey: "AIzaSyCFoK6T-VctuPKAld5CuctSRf6s5F8xf-4",
  authDomain: "remindersapp-9d8d3.firebaseapp.com",
  projectId: "remindersapp-9d8d3",
  storageBucket: "remindersapp-9d8d3.appspot.com",
  messagingSenderId: "128299682910",
  appId: "1:128299682910:web:38733568c3309430ad38cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
const db = firebase.firestore();