$(document).ready(function(){
    $("#about2 ul.list div.wrap_2:gt(0)").css("opacity","0");
    $("#about2 ul.list div.wrap_2:gt(0)").hide();

    $("#about2 ul.list li.h5").click(
        function(){
            $(this).children().show();
            $(this).children().css("opacity","1");
            $(this).siblings().children().hide();
            $(this).siblings().children().css("opacity","0");
        }
    );
});