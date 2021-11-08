// Tipo de dato personalizado
type alfanumerico = string | number;

let caracteres: alfanumerico = 'MarcoRuvalcaba';

caracteres = 17;

// multiple tipo de datos, con el simbolo de tubo podemos agregar varios tipos de datos.
let cadena: string | number = 'Marco Ruvalcaba';

cadena = 15;

// number
let numero: number = 12;

// booleano
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = 'hola';
cualquiera = 77;

// Arrays
let lenguajes: Array<string> = ['PHP', 'JS', 'CSS'];

let years: number[] = [12, 13, 14];

// let vs var
// Var es una variable global, mientras que let es una variable que corresponde al bloque en donde se esta ejecutando.

var num1: number = 10;
var num2: number = 12;

if (num1 == 10) {
  let num1: number = 44;
  let num2: number = 55;

  console.log(num1, num2);
}
console.log(num1, num2);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, caracteres);
