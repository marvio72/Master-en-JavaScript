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

  // Selectores de etiquetas
  let parrafos = $('p').css('cursor', 'pointer');
  parrafos.click(function () {
    let that = $(this);
    if (!that.hasClass('grande')) {
      that.addClass('grande');
    } else {
      that.removeClass('grande');
    }
  });

  // Selectores de atributos
  $('[title="Google"]').css('background', '#ccc');
  $('[title="Facebook"]').css('background', 'blue');
});
