$(function () {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    $("h1").on("mouseenter", function () {
        $(this).addClass("destacado");
    });

    $("h1").on("mouseleave", function () {
        $(this).removeClass("destacado");
    });


    $("#btn-suscribete").on("click", function(){
        alert("Gracias por suscribirte a nuestra web.")
    })
});
