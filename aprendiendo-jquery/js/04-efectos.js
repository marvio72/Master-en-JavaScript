$(document).ready(function () {
  let caja = $('#caja');
  $('#mostrar').hide();

  $('#mostrar').click(function () {
    $(this).hide();
    $('#ocultar').show();
    // $('#caja').show('slow');
    // $('#caja').fadeIn('slow');
    caja.fadeTo('slow', 1);
  });

  $('#ocultar').click(function () {
    $(this).hide();
    $('#mostrar').show();
    // $('#caja').hide('slow');
    caja.slideUp('slow', function () {
      console.log('Modulo ocultado'); //Se muestra el dialogo hasta que termina de ejecutar el efecto
    });
  });

  $('#todoenuno').click(function () {
    caja.slideToggle('fast');
  });

  $('#animar').click(function () {
    caja
      .animate({ marginLeft: '500px', fontSize: '40px', height: '110px' }, 'slow')
      .animate({ borderRadius: '900px', marginTop: '200px' }, 'slow')
      .animate({ borderRadius: '0px', marginLeft: '0px' }, 'slow')
      .animate({ borderRadius: '100px', marginTop: '0px' }, 'slow')
      .animate({ marginLeft: '500px', fontSize: '40px', height: '110px' }, 'slow');
  });
});
