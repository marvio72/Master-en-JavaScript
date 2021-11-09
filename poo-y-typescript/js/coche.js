var Coche = /** @class */ (function () {
    // Constructor
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = 'Blanco';
        if (modelo == null) {
            this.modelo = 'BMW Generico';
        }
        else {
            this.modelo = modelo;
        }
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
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
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
var coche = new Coche('Ferrari');
// let coche2 = new Coche();
// let coche3 = new Coche();
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
// coche2.setColor('Azul');
// coche3.setColor('Rojo');
// coche.setModelo('Maverick');
console.log("El color del coche es: " + coche.getColor() + ", modelo " + coche.getModelo() + ", tiene una velocidad de: " + coche.getVelocidad() + " K/h");
// console.log(`El color del codhe2 es: ${coche2.getColor()}`);
// console.log(`El color del codhe3 es: ${coche3.getColor()}`);
