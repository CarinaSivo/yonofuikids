$(function() {
    var offset = $("#categorias").offset();
    var topPadding = 15;
    $(window).scroll(function() {
    if ($("#categorias").height() < $(window).height() && $(window).scrollTop() > offset.top) { /* LINEA MODIFICADA POR ALEX PARA NO ANIMAR SI EL SIDEBAR ES MAYOR AL TAMANO DE PANTALLA */
    $("#categorias").stop().animate({
    marginTop: $(window).scrollTop() - offset.top + topPadding
    });
    } else {
    $("#categorias").stop().animate({
    marginTop: 0
    });
    };
    });
    });