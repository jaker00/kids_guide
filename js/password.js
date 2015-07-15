$(document).ready(function(){

    $("#box").keyup(function(){
        var bla = $('#box').val().length;
        var el = document.getElementById("text");
            if (bla > 5) {
                $("#bar").removeClass("red");
                $("#bar").addClass("green");
                el.textContent = "great";
            }
            else {
                $("#bar").removeClass("green")
                $("#bar").addClass("red");
                el.textContent = "inadequate";
                
            }
    });
});