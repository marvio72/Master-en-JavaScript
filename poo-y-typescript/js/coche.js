var Coche = /** @class */ (function () {
    function Coche() {
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    return Coche;
}());
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor('Negro');
coche2.setColor('Azul');
coche3.setColor('Rojo');
console.log("El color del codhe es: " + coche.getColor());
console.log("El color del codhe2 es: " + coche2.getColor());
console.log("El color del codhe3 es: " + coche3.getColor());
