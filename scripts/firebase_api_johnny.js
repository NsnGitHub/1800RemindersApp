//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {
    
    // Your API stuff goes here;  get it from firebase console
    apiKey: "AIzaSyDUoS1G7AE_a3ghgc-ctnAQkY2BOgqrUAw",
    authDomain: "mango-fe4f0.firebaseapp.com",
    databaseURL: "https://mango-fe4f0.firebaseio.com",
    projectId: "mango-fe4f0",
    storageBucket: "mango-fe4f0.appspot.com",
    messagingSenderId: "78070740838",
    appId: "1:78070740838:web:d8f39bfe431eaa0ae8faa7"
    
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Create the Firestore database object
  // Henceforce, any reference to the database can be made with "db"
  const db = firebase.firestore();