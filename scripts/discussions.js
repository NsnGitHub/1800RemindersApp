$(document).ready(function () {
    $(".btn-primary").css({"background": "#6351ce","border-color": "#6351ce"});
    $("#searchButton").css("margin-left", "1rem");
    $(".searchContainer").css("justify-content", "center");


    $('#searchButton').on("click", async function(){
        var discussionId = document.getElementById("search-bar").value;
        
        var arr = discussionId.split(' ');
        for(var i = 0; i < arr.length; i++){
            var word = arr[i];
            console.log(word);
            var thread = await db.collection('discussions').doc(word).get();
            

            if( thread.exists){
                
                console.log(thread.data().num);

                const incrementNum = firebase.firestore.FieldValue.increment(1);
                await db.collection('discussions').doc(word).update({
                num: incrementNum
            })
            }
            
            
        }
        
    })

    $('#createButton').on("click", async function(){ 

        var threads = await db.collection('discussions');
        var name = document.getElementById("Habit").value;

        threads.doc(name).set({
            
            views : 0,
            textInside : document.getElementById("TextArea").value,
            topic: document.getElementById("exampleInputName").value
        })

    })

    });