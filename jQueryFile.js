$(document).ready(function() {
    // using equery
    eQuery("myselector").addClass("MYNEWCLASS");
    

    // preventing def context-menu
    $(document).on("contextmenu", function(){
        return false;
    });

    //defining right click action - context menu
    $(document).on("mousedown", function(event){
        if(event.which == 3) {

            // default hiding image entries
            $(".hiddenimg").removeClass("shown");

            if ($(event.target).is("img")) {
                $(".hiddenimg").addClass("shown");
            }

            console.log(event.pageY, event.pageX);
            $("#context").css({
                top: event.pageY,
                left: event.pageX
            });
            $("#context").fadeIn(100);
        }
        else if (event.which == 1) {
            $("#context").fadeOut(100);
        }
        /* 
        switch(event.which) {
            case 1:
                console.log("Clicked left");
                break;
            case 2:
                console.log("Middle");
                break;
            case 3:
                console.log("Right");
                break;
        } */
    });

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

    //Dropdow menu
    $('[data-trigger="dropdown"]').on('mouseenter', function() {
        
        var submenu = $(this).find('.submenu');
        //submenu.addClass('active');
        submenu.fadeIn(500);

        $(".site-menu-trigger").on("mouseleave", function(){
            //submenu.removeClass("active");
            submenu.fadeOut(300);
        })

        /* $(this).on("mouseleave", function(){
            //oben deklariertes submenu kann hier verwendet werden
            submenu.removeClass("active");
        }) */
    });

    //Append, Prepend and Replace userdefined Text into a section
    $("#prepend, #append, #replace").on("click", function(e){
        // using the js event "e" and preventing the form to default submit when a button is pressed
        e.preventDefault();

        var el = $(e.currentTarget);
        var action = el.attr("id");
        var content = $(".tarea").val();

        if (action == "prepend") {
            $("#contentarea").prepend(content);
        } 
        else if (action == "append") {
            $("#contentarea").append(content);
        }
        else if (action == "replace") {
            console.log("replace");
            $("#contentarea").html(content);
        }

        $(".tarea").val("");
    })

    //preventing testlink to trigger using href as identicator
    $("[href='http://google.com']").on("click", function(){
        console.log("linking?");
        event.preventDefault();
        // return false;
    })
   
});