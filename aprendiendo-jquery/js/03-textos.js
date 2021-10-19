$(document).ready(function () {
  reloadlinks();

  $('#add_button')
    .removeAttr('disabled')
    .click(function () {
      $('#menu').append('<li><a href="' + $('#add_link').val() + '"></a></li>');
      $('#add_link').val('');
      reloadlinks();
    });

  function reloadlinks() {
    $('a').each(function (index) {
      let that = $(this);
      let enlace = that.attr('href');
      that.attr('target', '_blank');
      that.text(enlace);
    });
  }
});
