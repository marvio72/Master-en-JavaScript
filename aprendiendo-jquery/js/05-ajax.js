$(document).ready(function () {
  /*
    Metodo Load
    Incrustar dados por ejemplo en un div
    */

  //   $('#datos').load('https://reqres.in/'); //Nos incrusta en un div toda la pagina solicitada.

  /*
  Metodo Get y Post
  */

  $.get('https://reqres.in/api/users', { page: 1 }, function (response) {
    response.data.forEach((element, index) => {
      $('#datos').append('<p>' + element.first_name + ' ' + element.last_name + '</p>');
    });
  });

  let usuario = {
    name: 'Marco Ruvalcaba',
    web: 'mruvalcaba.com',
  };
  $.post('https://reqres.in/api/users', usuario, function (response) {
    console.log(response);
  });

  $('#formulario').submit(function (e) {
    e.preventDefault();
    let usuario = {
      name: $('input[name="nombre"]').val(),
      web: $('input[name="web"]').val(),
    };
    console.log(usuario);
    $.post($(this).attr('action'), usuario, function (response) {
      console.log(response);
    }).done(function () {
      alert('Usuario añadido correctamente');
    });
    return false;
  });
});
