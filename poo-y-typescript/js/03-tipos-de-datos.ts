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

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, caracteres);
