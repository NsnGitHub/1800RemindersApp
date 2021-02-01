const date = new Date();

date.setDate(1);

const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const monthDays = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

const prevLast = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

let nextDay = 7 - lastDayIndex - 1;

if (nextDay < 5) {
    nextDay += 7;
}

document.querySelector(".date h1").innerHTML = months[date.getMonth()];

document.querySelector(".date p").innerHTML = new Date().toDateString();

let day = "";

for(let a = firstDayIndex; a > 0; a--) {
    day += `<div class="prevday">${prevLast - a + 1}</div>`;
    monthDays.innerHTML = day;
}

for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        day += `<div class="today">${i}</div>`;
        monthDays.innerHTML = day;
    } else {
        day += `<div>${i}</div>`;
        monthDays.innerHTML = day;
    }
}

for (let y = 1; y <= nextDay; y++) {
    day += `<div class="nextday">${y}</div>`;
    monthDays.innerHTML = day;
}


function success() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            streak: firebase.firestore.FieldValue.increment(1)
        })

        $(".today").css("background-color", "green");

        var modal = $(".calendar").append(
            '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'
            +    '<div class="modal-dialog modal-dialog-centered" role="document">'
            +        '<div class="modal-content">'
            +           '<div class="modal-header">'
            +               '<h5 class="modal-title" id="exampleModalLongTitle">Great job!</h5>'
            +              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
            +                  '<span aria-hidden="true">&times;</span>'
            +               '</button>'
            +           '</div>'
            +           '<div class="modal-body">'
            +               'You have successfully marked today as completed'
            +           '</div>'
            +           '<div class="modal-footer">'
            +               '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
            +            '</div>'
            +        '</div>'
            +    '</div>'
            +'</div>');
    })
}

function fail() {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).update({
            streak: 0
        })
    
        $(".today").css("background-color", "red");

        var modal = $(".calendar").append(
            '<div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'
            +    '<div class="modal-dialog modal-dialog-centered" role="document">'
            +        '<div class="modal-content">'
            +           '<div class="modal-header">'
            +               '<h5 class="modal-title" id="exampleModalLongTitle">Do not give up!</h5>'
            +              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
            +                  '<span aria-hidden="true">&times;</span>'
            +               '</button>'
            +           '</div>'
            +           '<div class="modal-body">'
            +               'You can build your streak back up!'
            +           '</div>'
            +           '<div class="modal-footer">'
            +               '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
            +            '</div>'
            +        '</div>'
            +    '</div>'
            +'</div>');
    })
}
