// Editing some css using JQuery, more of a practice for COMP 1537

$(document).ready(function () {
    $(".btn-primary").css({
        "background": "#6351ce",
        "border-color": "#6351ce"
    });
    $("#searchButton").css("margin-left", "1rem");
    $(".searchContainer").css("justify-content", "center");
    $(".btn-primary").css({"background": "green","border-color": "green", "margin-top": "2rem"});
    $("#searchButton").css("margin-left", "1rem");
    $(".searchContainer").css("justify-content", "center");
    
    $('#createButton').on("click", async function(){ 

        var threads = await db.collection('discussions');
        var name = document.getElementById("title").value;

        await threads.doc(name).set({
            topic: document.getElementById("title").value,
            content: document.getElementById("textArea").value
        })

        location.href = "board.html";

    })

});