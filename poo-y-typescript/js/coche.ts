class Coche {
  public color: string;
  public modelo: string;
  public velocidad: number;

  public getColor() {
    return this.color;
  }

  public setColor(color) {
    this.color = color;
  }
}

let coche = new Coche();
let coche2 = new Coche();
let coche3 = new Coche();
coche.setColor('Negro');
coche2.setColor('Azul');
coche3.setColor('Rojo');

console.log(`El color del codhe es: ${coche.getColor()}`);
console.log(`El color del codhe2 es: ${coche2.getColor()}`);
console.log(`El color del codhe3 es: ${coche3.getColor()}`);
