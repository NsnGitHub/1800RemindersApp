// Editing some css using JQuery, more of a practice for COMP 1537

$(document).ready(function () {
    setTimeout(function () {
        $("#exampleModal").modal('show');
    }, 2000);

    $("#exampleModalLong").click(function () {
        $("#exampleModalLong").modal('show');
    });

    $("#exampleModalLong2").click(function () {
        $("#exampleModalLong2").modal('show');
    });

    $("#exampleModalLong3").click(function () {
        $("#exampleModalLong3").modal('show');
    });
});

$(function () {
    $('[data-toggle="popover"]').popover()
})
