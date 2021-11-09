// Con propiedades privadas
var Playeras = /** @class */ (function () {
    // Métodos (funciones o acciones del objeto);
    //Constructor
    function Playeras(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Playeras.prototype.setColor = function (color) {
        this.color = color;
    };
    Playeras.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Playeras.prototype.getColor = function () {
        return this.color;
    };
    Playeras.prototype.getModelo = function () {
        return this.modelo;
    };
    return Playeras;
}());
var playera = new Playeras('rojo', 'manga corta', 'Fila', 'S', 14);
playera.setColor('Azul');
playera.setModelo('Manga Corta');
console.log(playera);
