var caracteres = 'MarcoRuvalcaba';
caracteres = 17;
// multiple tipo de datos, con el simbolo de tubo podemos agregar varios tipos de datos.
var cadena = 'Marco Ruvalcaba';
cadena = 15;
// number
var numero = 12;
// booleano
var verdadero_falso = true;
// Any
var cualquiera = 'hola';
cualquiera = 77;
// Arrays
var lenguajes = ['PHP', 'JS', 'CSS'];
var years = [12, 13, 14];
// let vs var
// Var es una variable global, mientras que let es una variable que corresponde al bloque en donde se esta ejecutando.
var num1 = 10;
var num2 = 12;
if (num1 == 10) {
    var num1_1 = 44;
    var num2_1 = 55;
    console.log(num1_1, num2_1);
}
console.log(num1, num2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, caracteres);
