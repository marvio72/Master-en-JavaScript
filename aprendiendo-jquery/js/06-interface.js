$(document).ready(function () {
  // Mover elemento por la pagina
  $('.elemento').draggable();

  // Redimensionar
  $('.elemento').resizable();

  // Seleccionar Elementos
  // $('.lista-seleccionable').selectable();

  // Ordenar Elementos
  /*
  Para usar esta función es necesario desactivar .selectable();
  */
  $('.lista-seleccionable').sortable({
    update: function (event, ui) {
      console.log('ha cambiado la lista');
    },
  });

  // Drop
  $('#elemento-movido').draggable();
  $('#area').droppable({
    drop: function () {
      console.log('Haz soltado algo dentro');
    },
  });

  // Efectos
  $('#mostrar').click(function () {
    // $('.caja-efectos').toggle('face');
    // $('.caja-efectos').toggle('explode');
    // $('.caja-efectos').toggle('blind');
    // $('.caja-efectos').toggle('slide');
    // $('.caja-efectos').toggle('drop');
    // $('.caja-efectos').toggle('fold');
    // $('.caja-efectos').toggle('puff');
    // $('.caja-efectos').toggle('scale');
    $('.caja-efectos').toggle('shake', 4300);
  });

  // Tooltips
  $(document).tooltip();

  // Cuadro de dialogo
  $('#lanzar-popup').click(function () {
    $('#popup').dialog();
  });
});
