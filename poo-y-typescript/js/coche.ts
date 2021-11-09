class Coche {
  public color: string;
  public modelo: string;
  public velocidad: number = 0;

  public getColor() {
    return this.color;
  }

  public setColor(color) {
    this.color = color;
  }

  public getVelocidad(): number {
    return this.velocidad;
  }

  public setVelocidad(velocidad) {
    this.velocidad = velocidad;
  }

  // Metodos
  public acelerar() {
    this.velocidad++;
  }

  public frenar() {
    this.velocidad--;
  }
}

let coche = new Coche();
let coche2 = new Coche();
let coche3 = new Coche();
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

coche2.setColor('Azul');
coche3.setColor('Rojo');

console.log(
  `El color del codhe es: ${coche.getColor()} y tiene una velocidad de: ${coche.getVelocidad()} K/h`
);
// console.log(`El color del codhe2 es: ${coche2.getColor()}`);
// console.log(`El color del codhe3 es: ${coche3.getColor()}`);
