$(function(){
   
    $("h1").on("mouseenter", function(){
        $(this).addClass("destacado");
    });

    $("h1").on("mouseleave", function(){
        $(this).removeClass("destacado");
    });
});