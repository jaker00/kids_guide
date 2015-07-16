$(document).ready(function(){
    

    $("#box").keyup(function(){
        var bla = $('#box').val().length;
        var el = document.getElementById("text");
            if (bla > 5) {
                $("#box").removeClass("red");
                
                el.textContent = "great";
            }
            else {
                if (bla == 0) {
                    $("#box").removeClass("red");   
                }
                else {
                    $("#box").addClass("red");
                    el.textContent = "Password must contain at least 6 characters";
                    }
            }
    });
    
    $("#box").focusout(function() {
        console.log("hi");
        var bla = $('#box').val().length;
        var el = document.getElementById("text");
            if (bla < 6) {
                $("#box").addClass("redoutline");
            }
            else {
                $("#box").removeClass("redoutline");
            }
    });
    
    $("#box").focus(function() {
        $("#box").removeClass("redoutline");
    });
});