$(document).ready(function () {

    db.collection("discussions").get().then(function (docQuery) {
        docQuery.forEach(function (doc) {
            console.log(doc.data());

            $("#board").prepend('<div class="sticky_note"><img width="500" height="500" class="img" src="images/sticky_note.png"><div class="overlay"><div class ="title">'
                + doc.data()["topic"] + '</div><div class="text">' 
                + doc.data()["textInside"] + '</div></div></img></div>')
        });
    });




});