//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
  apiKey: "AIzaSyAR8HgIqxHXeLJPff14h2ArTbILdVLEVrI",
  authDomain: "database-1800.firebaseapp.com",
  databaseURL: "https://database-1800.firebaseio.com",
  projectId: "database-1800",
  storageBucket: "database-1800.appspot.com",
  messagingSenderId: "741786407495",
  appId: "1:741786407495:web:fd836f335d2471e80a5762"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"
  const db = firebase.firestore();