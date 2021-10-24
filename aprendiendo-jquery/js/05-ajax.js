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
});
