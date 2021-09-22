$(document).ready(function () {
  // Selector de ID
  $('#rojo').css('background', 'red').css('color', 'white');

  $('#amarillo').css('background', 'yellow').css('color', 'green');

  $('#verde').css('background', 'green').css('color', 'yellow');

  // Selector de clases
  let mi_clase = $('.zebra').css('padding', '5px');

  $('.sin_borde').click(function () {
    console.log('Click dado!!');
    $(this).addClass('zebra');
  });
});
