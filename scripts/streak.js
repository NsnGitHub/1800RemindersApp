// Editing some css using JQuery, more of a practice for COMP 1537

$(document).ready(function () {
    $(".card").css({
      "margin": "1.5rem",
      "width" : "92%",
      "margin": "0px auto",
      "margin-bottom" : "2rem"
    });
    $(".progress").css("margin-top", "2rem");
    $(".card").css("background-color", "#d4d9dd");
    $(".card-header").css({
      "font-size": "14pt",
      "background-color": " #bbb6b6"
    });
    $(".card-text").css("font-size", "18pt");
    $(".btn-primary").css({
      "background": "green",
      "border-color": " #d4d9dd"
    });
    $(".jumbotron").css({
      "width": "92%",
      "margin": "0px auto",
      "margin-top": "2rem",
      "margin-bottom": "2rem",
      "background-color": " #bbb6b6",
      "text-align" : "center"
    });
  });


function updateStreak(){
    db.collection("streak").doc("day").onSnapshot(function(snap) {
        console.log(snap.data);
        console.log(snap.data().daystreak); 
        document.getElementById("streak").innerText = snap.data().daystreak;
        document.getElementById("streakBar").innerText = snap.data().daystreak + "%";

        //Super hacky solution to make the progress bar update
        $("#streakBar").css("width", snap.data().daystreak + "%");

        if (snap.data().daystreak == 100){
            document.getElementById("streakMessage").innerText = "Congratulations! You've made it to 100 days! We hope your bad habit has been defeated.";
        }
    })
}

updateStreak();