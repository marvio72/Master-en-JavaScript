interface CamisetaBase {
  setColor(color);
  getColor();
}

// Con propiedades privadas
// export class Playeras {
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

let camiseta = new Camiseta('rojo', 'manga corta', 'Fila', 'S', 14);
camiseta.setColor('Azul');
camiseta.setModelo('Manga Corta');

console.log(camiseta);
