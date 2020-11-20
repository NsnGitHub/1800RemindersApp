function deleted() {
    db.collection("reminders").doc(name).delete().then(function () {
        console.log("Deleted");
    }).catch (function(error) {
        console.error("Error deleting: ", error);
    })
}

function getReminders() {
    db.collection("reminders")
        .get()
        .then(function(snap) {
            snap.forEach(function(doc) {
                console.log(doc.data());
                var name = doc.data().Name;
                var description = doc.data().Description;
                var d1 = $("#addCard").prepend(
                    "<div class='card' style='width: 100%; height: 100%'>" 
                    +   "<h5 class='card-header'>" + name + "</h5>"
                    +   "<div class='card-body'>"
                    +      "<p class='card-text'>" + description + "</p>"
                    +      "<button type='button' class='btn btn-danger' onclick='deleted()'>Delete</button>"
                    +   "</div"
                    +"</div)");
        })
    })
}

function addReminder() {

    var reminders = db.collection("reminders");
    var name = document.getElementById("reminderName").value;

    db.collection("reminders").doc(name).set({
        Name: name,
        Description: document.getElementById("reminderDscrpt").value
    })

}

getReminders();
