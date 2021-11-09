// Clase )molde del objeto)
class Camiseta {
  // Propiedades (caracteristicas del objeto)
  public color: string;
  public modelo: string;
  public marca: string;
  public talla: string;
  public precio: string;

  // Métodos (funciones o acciones del objeto);
}

let camiseta = new Camiseta();

camiseta.color = 'Rojo';
camiseta.modelo = 'Manga Larga';
camiseta.marca = 'Nike';
camiseta.talla = 'XL';
camiseta.precio = '10';

console.log(camiseta);

// Con propiedades privadas
class Playeras {
  // Propiedades (caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  // Métodos (funciones o acciones del objeto);
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

let playera = new Playeras();
playera.setColor('Azul');
playera.setModelo('Manga Corta');

console.log(playera);
