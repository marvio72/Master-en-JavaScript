interface CamisetaBase {
  setColor(color);
  getColor();
}

// Decorador
// function estampar(logo: string) {
//   return function (target: Function) {
//     target.prototype.estampacion = function (): void {
//       console.log('Camiseta estampada con el logo de: ' + logo);
//     };
//   };
// }

// Con propiedades privadas

// @estampar('Gucci Gang')
class Camiseta implements CamisetaBase {
  // Propiedades (caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  // Métodos (funciones o acciones del objeto);
  //Constructor
  constructor(color, modelo, marca, talla, precio) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }

  public setColor(color) {
    this.color = color;
  }
  public setModelo(modelo) {
    this.modelo = modelo;
  }

  public getColor() {
    return this.color;
  }
  public getModelo() {
    return this.modelo;
  }
}

// Clase hija
class Sudadera extends Camiseta {
  public capucha: boolean;

  setCapucha(capucha: boolean) {
    this.capucha = capucha;
  }
  getCapucha(): boolean {
    return this.capucha;
  }
}

let camiseta = new Camiseta('rojo', 'manga corta', 'Fila', 'S', 14);
// camiseta.setColor('Azul');
// camiseta.setModelo('Manga Corta');

console.log(camiseta);
// camiseta.estampacion();

let sudadera_nike = new Sudadera('Negra', 'Manga Larga', 'Adidas', 'M', 20);
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);
