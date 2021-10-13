$(document).ready(function () {
  // Eventos MouseOver y MouseOut
  let caja = $('#caja');

  // caja.mouseover(function () {
  //   $(this).css('background', 'red');
  // });

  // caja.mouseout(function () {
  //   $(this).css('background', 'green');
  // });

  function cambiaRojo() {
    $(this).css('background', 'red');
  }

  function cambiaVerde() {
    $(this).css('background', 'green');
  }

  // Hover
  caja.hover(cambiaRojo, cambiaVerde);

  // Click, doble Click
  caja.click(function () {
    $(this).css('background', 'blue').css('color', 'white');
  });

  caja.dblclick(function () {
    $(this).css('background', 'pink').css('color', 'black');
  });

  // Focus y Blur
  let nombre = $('#nombre');
  nombre.focus(function () {
    $(this).css('border', '2px solid green');
  });

  nombre.blur(function () {
    $(this).css('border', '1px solid #ccc');
    $('#datos').text($(this).val()).show();
  });
});
