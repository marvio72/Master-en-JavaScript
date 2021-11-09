// Clase )molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.color = 'Rojo';
camiseta.modelo = 'Manga Larga';
camiseta.marca = 'Nike';
camiseta.talla = 'XL';
camiseta.precio = '10';
console.log(camiseta);
// Con propiedades privadas
var Playeras = /** @class */ (function () {
    function Playeras() {
    }
    // Métodos (funciones o acciones del objeto);
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
var playera = new Playeras();
playera.setColor('Azul');
playera.setModelo('Manga Corta');
console.log(playera);
