'use strict';

// recoger parametros.
let params = process.argv.slice(2);

let numero1 = parseInt(params[0]);
let numero2 = parseInt(params[1]);

let plantilla = `
    Suma: ${numero1 + numero2}
    Resta: ${numero1 - numero2}
    Multiplicación: ${numero1 * numero2}
    División: ${numero1 / numero2}
`;
console.log(plantilla);
