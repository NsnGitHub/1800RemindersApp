
function deleted(doc) {
    db.collection("reminders").doc(doc).delete().then(function () {
        console.log("Deleted");
    }).catch (function(error) {
        console.error("Error deleting: ", error);
    })

    var modal = $("#addCard").append(
        '<div class="alert alert-success alert-dismissible fade show" role="alert" style="width: 50%; margin-left: 1rem">'
        + '<strong>Reminder Deleted!</strong> Refresh the page to see changes.'
        + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +   '<span aria-hidden="true">&times;</span>'
        + '</button>'
        +'</div>');
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
                    +      "<button type='button' class='btn btn-danger' onClick=deleted('" +name.split(' ').join('') +"') >Delete</button>"
                    +   "</div>"
                    +"</div)>");
        })
    })
}



function addReminder() {

    var reminders = db.collection("reminders");
    var name = document.getElementById("reminderName").value;

    db.collection("reminders").doc(name.split(' ').join('')).set({
        Name: name,
        Description: document.getElementById("reminderDscrpt").value
    })

    var modal = $("#addCard").append(
        '<div class="alert alert-success alert-dismissible fade show" role="alert" style="width: 50%; margin-left: 1rem">'
        + '<strong>Reminder added!</strong> Refresh the page to see your new reminder.'
        + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +   '<span aria-hidden="true">&times;</span>'
        + '</button>'
        +'</div>');

}

getReminders();

