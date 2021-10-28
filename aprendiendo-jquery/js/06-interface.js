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
});
