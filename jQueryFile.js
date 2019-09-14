$(document).ready(function() {

    document.getElementById("text").innerHTML = "text";
    // Targeting by ID in jQuery:
    $("#text").html("This is my text");
    // Targeting classes
    $(".mytextarea").val("NewInpputVal");

    $("#submitbutton").on("click", function(){
        console.log("click");
    });
    $("#submitbutton").hover(function(){
        console.log("hover");
    });
});