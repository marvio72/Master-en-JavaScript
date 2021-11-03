$(document).ready(function () {
  // Cargar localstorage
  $('#theme').attr('href', obtenerLocalStorage());

  function obtenerLocalStorage() {
    let color = localStorage.getItem('color');
    return color;
  }

  // Slider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    pager: false,
  });

  // Posts

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
});
