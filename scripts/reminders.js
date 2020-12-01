
async function deleted(doc) {
    

    var modal = await $("#addCard").append(
        '<div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'
        +    '<div class="modal-dialog modal-dialog-centered" role="document">'
        +        '<div class="modal-content">'
        +           '<div class="modal-header">'
        +               '<h5 class="modal-title" id="exampleModalLongTitle">Deleted!</h5>'
        +              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
        +                  '<span aria-hidden="true">&times;</span>'
        +               '</button>'
        +           '</div>'
        +           '<div class="modal-body">'
        +               'This reminder has been deleted.'
        +           '</div>'
        +           '<div class="modal-footer">'
        +               '<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="location.reload()">Close</button>'
        +            '</div>'
        +        '</div>'
        +    '</div>'
        +'</div>');

        await db.collection("reminders").doc(doc).delete().then(function () {
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
                    +      "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#exampleModalCenter1' onClick=deleted('" +name.split(' ').join('') +"') >Delete</button>"
                    +   "</div>"
                    +"</div)>");
        })
    })
}



async function addReminder() {

    var reminders = db.collection("reminders");
    var name = document.getElementById("reminderName").value;

    await db.collection("reminders").doc(name.split(' ').join('')).set({
        Name: name,
        Description: document.getElementById("reminderDscrpt").value
    })

    var modal = await $("#addCard").append(
        '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'
        +    '<div class="modal-dialog modal-dialog-centered" role="document">'
        +        '<div class="modal-content">'
        +           '<div class="modal-header">'
        +               '<h5 class="modal-title" id="exampleModalLongTitle">Success!</h5>'
        +              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
        +                  '<span aria-hidden="true">&times;</span>'
        +               '</button>'
        +           '</div>'
        +           '<div class="modal-body">'
        +               'You have successfully added a reminder. Refresh the page to update.'
        +           '</div>'
        +           '<div class="modal-footer">'
        +               '<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="location.reload()">Close</button>'
        +            '</div>'
        +        '</div>'
        +    '</div>'
        +'</div>');

        
}


getReminders();

