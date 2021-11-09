var Coche = /** @class */ (function () {
    function Coche() {
        this.velocidad = 0;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    // Metodos
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor('Negro');
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.frenar();
coche.frenar();
coche.frenar();
coche2.setColor('Azul');
coche3.setColor('Rojo');
console.log("El color del codhe es: " + coche.getColor() + " y tiene una velocidad de: " + coche.getVelocidad() + " K/h");
// console.log(`El color del codhe2 es: ${coche2.getColor()}`);
// console.log(`El color del codhe3 es: ${coche3.getColor()}`);
