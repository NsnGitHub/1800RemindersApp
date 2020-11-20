const date = new Date();

date.setMonth(8);

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
    day += `<div class="prevday">${prevLast - a + 1}</div>`
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

var streak = db.collection("streak").doc("day");

function success() {
    streak.update({
        daystreak: firebase.firestore.FieldValue.increment(1)
    })
}

function fail() {
    streak.update({
        daystreak: 0
    })
}
