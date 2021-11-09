// Con propiedades privadas
// export class Playeras {
var Camiseta = /** @class */ (function () {
    // Métodos (funciones o acciones del objeto);
    //Constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    return Camiseta;
}());
var camiseta = new Camiseta('rojo', 'manga corta', 'Fila', 'S', 14);
camiseta.setColor('Azul');
camiseta.setModelo('Manga Corta');
console.log(camiseta);
