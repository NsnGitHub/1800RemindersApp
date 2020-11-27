// Editing some css using JQuery, more of a practice for COMP 1537

$(document).ready(function () {
    $(".card").css({
      "width": "30%",
      "float": "left",
      "margin": "1.5rem"
    });
    $(".progress").css("margin-top", "2rem");
    $(".card").css("background-color", "lightgrey");
    $(".card-header").css({
      "font-size": "15pt",
      "background-color": "darkgrey"
    });
    $(".card-text").css("font-size", "18pt");
    $(".btn-primary").css({
      "background": "#6351ce",
      "border-color": "#6351ce"
    });
    $(".jumbotron").css({
      "width": "95%",
      "margin": "0px auto",
      "margin-top": "2rem",
      "margin-bottom": "2rem",
      "background-color": "lightgrey"
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