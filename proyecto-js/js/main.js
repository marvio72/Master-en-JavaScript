$(document).ready(function () {
  // Cargar localstorage
  $('#theme').attr('href', obtenerLocalStorage());

  function obtenerLocalStorage() {
    let color = localStorage.getItem('color');
    return color;
  }

  // Slider
  if (window.location.href.indexOf('index') > -1) {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      pager: false,
    });
  }

  // Posts
  if (window.location.href.indexOf('index') > -1) {
    let posts = [
      {
        title: 'Prueba de titulo 1',
        //   date: moment().format('MMMM Do YYYY'),
        date:
          'Publicado el día: ' +
          moment().date() +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna magna, euismod id porttitor in, luctus sed justo. Nullam et ante a arcu aliquam congue. Proin sed hendrerit diam. Sed rhoncus, elit non volutpat viverra, velit leo sodales turpis, quis tincidunt dui tortor eu purus. Donec augue est, aliquet eu libero nec, vehicula fermentum enim. Aliquam vel turpis dignissim nisi aliquet dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eleifend efficitur lorem sit amet pulvinar.',
      },
      {
        title: 'Prueba de titulo 2',
        date:
          'Publicado el día: ' +
          moment().date() +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna magna, euismod id porttitor in, luctus sed justo. Nullam et ante a arcu aliquam congue. Proin sed hendrerit diam. Sed rhoncus, elit non volutpat viverra, velit leo sodales turpis, quis tincidunt dui tortor eu purus. Donec augue est, aliquet eu libero nec, vehicula fermentum enim. Aliquam vel turpis dignissim nisi aliquet dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eleifend efficitur lorem sit amet pulvinar.',
      },
      {
        title: 'Prueba de titulo 3',
        date:
          'Publicado el día: ' +
          moment().date() +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna magna, euismod id porttitor in, luctus sed justo. Nullam et ante a arcu aliquam congue. Proin sed hendrerit diam. Sed rhoncus, elit non volutpat viverra, velit leo sodales turpis, quis tincidunt dui tortor eu purus. Donec augue est, aliquet eu libero nec, vehicula fermentum enim. Aliquam vel turpis dignissim nisi aliquet dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eleifend efficitur lorem sit amet pulvinar.',
      },
      {
        title: 'Prueba de titulo 4',
        date:
          'Publicado el día: ' +
          moment().date() +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna magna, euismod id porttitor in, luctus sed justo. Nullam et ante a arcu aliquam congue. Proin sed hendrerit diam. Sed rhoncus, elit non volutpat viverra, velit leo sodales turpis, quis tincidunt dui tortor eu purus. Donec augue est, aliquet eu libero nec, vehicula fermentum enim. Aliquam vel turpis dignissim nisi aliquet dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eleifend efficitur lorem sit amet pulvinar.',
      },
      {
        title: 'Prueba de titulo 5',
        date:
          'Publicado el día: ' +
          moment().date() +
          ' de ' +
          moment().format('MMMM') +
          ' del ' +
          moment().format('YYYY'),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna magna, euismod id porttitor in, luctus sed justo. Nullam et ante a arcu aliquam congue. Proin sed hendrerit diam. Sed rhoncus, elit non volutpat viverra, velit leo sodales turpis, quis tincidunt dui tortor eu purus. Donec augue est, aliquet eu libero nec, vehicula fermentum enim. Aliquam vel turpis dignissim nisi aliquet dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eleifend efficitur lorem sit amet pulvinar.',
      },
    ];

    posts.forEach((item, index) => {
      let post = `
     <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
     </article>
     `;
      $('#posts').append(post);
    });
  }

  // Selector de tema
  let theme = $('#theme');
  $('#to-green').click(function () {
    let green = '/css/green.css';
    localStorage.setItem('color', green);
    theme.attr('href', green);
  });
  $('#to-red').click(function () {
    let red = '/css/red.css';
    localStorage.setItem('color', red);
    theme.attr('href', red);
  });
  $('#to-blue').click(function () {
    let blue = '/css/blue.css';
    localStorage.setItem('color', blue);
    theme.attr('href', blue);
  });

  // Scroll arriba de la web
  $('.subir').click(function () {
    e.preventDefault();

    $('html,body').animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // Login Falso
  $('#login form').submit(function () {
    let nombre = $('#form_name').val();
    localStorage.setItem('usuario', nombre);
  });
  let usuario = localStorage.getItem('usuario');
  if (usuario != null && usuario != 'undefined') {
    let about_parrafo = $('#about p');
    about_parrafo.html('<br><hr>Bienvenido,<strong>' + ' ' + usuario + '</strong>');
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
    $('#login').hide();
    $('#logout').click(function () {
      localStorage.removeItem('usuario');
      location.reload();
    });
  }

  // Acordeon
  if (window.location.href.indexOf('about') > -1) {
    let box = [
      {
        title: '¿Quienes somos?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna magna, euismod id porttitor in, luctus sed justo.',
      },
      {
        title: '¿Por qué somos el número 1?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna magna, euismod id porttitor in, luctus sed justo.',
      },
      {
        title: '¿Que nos respalda?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna magna, euismod id porttitor in, luctus sed justo.',
      },
      {
        title: '¿Juntos hacemos la fuerza?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna magna, euismod id porttitor in, luctus sed justo.',
      },
    ];

    box.forEach((element) => {
      let boxes = `
       <h3>${element.title}</h3>
            <div>
              <p>
                ${element.content}
              </p>
      `;
      $('#acordeon').append(boxes);
    });
    $('#acordeon').accordion();
  }

  // Reloj
  if (window.location.href.indexOf('reloj') > -1) {
    setInterval(() => {
      let reloj = moment().format('h:mm:ss a');

      $('#reloj').html('<p><strong>' + reloj + '</strong></p>');
    }, 1000);
  }

  // Validación de formulario
  if (window.location.href.indexOf('contact') > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: 'dd-mm-yy',
    });
    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true,
    });
  }
});
