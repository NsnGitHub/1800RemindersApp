"use strict";

//When webpage loads the app.js file, it will execute this function below.
function readQuote(){
    db.collection("quotes").doc("02")
    //Use .onSnapshot() to get reference to DOM (in this case, its the quotes document on firestore)
    .onSnapshot(function(snap){
        console.log(snap.data); //Prints the document fields of "01"
        console.log(snap.data().message); 
        document.getElementById("abc").innerText = snap.data().message; //Replacement of blah blag with quote "01"
    })
}
readQuote();