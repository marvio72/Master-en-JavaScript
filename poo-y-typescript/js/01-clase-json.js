let bicicleta = {
  color: 'Rojo',
  modelo: 'BMX',
  frenos: 'De disco',
  velocidadMaxima: '60km',
  cambiarColor: function (nuevo_color) {
    this.color = nuevo_color;
    console.log(this);
  },
};

bicicleta.cambiarColor('Negro');
