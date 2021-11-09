interface CocheBase {
  getModelo(): string;
  getVelocidad(): number;
}
class Coche implements CocheBase {
  public color: string;
  public modelo: string;
  public velocidad: number;

  // Constructor
  constructor(modelo: string = null) {
    this.color = 'Blanco';
    if (modelo == null) {
      this.modelo = 'BMW Generico';
    } else {
      this.modelo = modelo;
    }
    this.velocidad = 0;
  }

  public getColor(): string {
    return this.color;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getVelocidad(): number {
    return this.velocidad;
  }

  public setVelocidad(velocidad: number) {
    this.velocidad = velocidad;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(modelo: string) {
    this.modelo = modelo;
  }

  // Metodos
  public acelerar() {
    this.velocidad++;
  }

  public frenar() {
    this.velocidad--;
  }
}

let coche = new Coche('Ferrari');
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

console.log(
  `El color del coche es: ${coche.getColor()}, modelo ${coche.getModelo()}, tiene una velocidad de: ${coche.getVelocidad()} K/h`
);
// console.log(`El color del codhe2 es: ${coche2.getColor()}`);
// console.log(`El color del codhe3 es: ${coche3.getColor()}`);
