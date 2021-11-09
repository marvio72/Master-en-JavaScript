// Con propiedades privadas
// export class Playeras {
class Playeras {
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

// let playera = new Playeras('rojo', 'manga corta', 'Fila', 'S', 14);
// playera.setColor('Azul');
// playera.setModelo('Manga Corta');

// console.log(playera);
