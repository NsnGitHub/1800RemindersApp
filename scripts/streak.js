function updateStreak(){
    db.collection("streak").doc("day").onSnapshot(function(snap) {
        console.log(snap.data);
        console.log(snap.data().daystreak); 
        document.getElementById("streak").innerText = snap.data().daystreak;
        document.getElementById("streakBar").innerText = snap.data().daystreak + "%";

        //Super hacky solution to make the progress bar update
        $("#streakBar").css("width", snap.data().daystreak * 12.75);

        if (snap.data().daystreak == 100){
            document.getElementById("streakMessage").innerText = "Congratulations! You've made it to 100 days! We hope your bad habit has been defeated.";
        }
    })
}

updateStreak();