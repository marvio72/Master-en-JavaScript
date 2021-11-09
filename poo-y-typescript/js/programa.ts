class Programa {
  public nombre: string;
  public version: number;

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  setVersion(version: number) {
    this.version = version;
  }

  getNombre() {
    return this.nombre;
  }

  getVersion() {
    return this.version;
  }
}

class EditorVideo extends Programa {
  public timeline: number;

  setTimeline(timeline: number) {
    this.timeline = timeline;
  }

  getTimeline() {
    return this.timeline;
  }

  getAllData(): string {
    return `${this.getNombre()} - ${this.getVersion()} - ${this.getTimeline()}`;
  }
}

let editor = new EditorVideo();
editor.setNombre('FinalCut');
editor.setVersion(10);
editor.setTimeline(120);

console.log(editor.getAllData());

// Logica del formulario:
let programas = [];

function guardar() {
  let nombre = (<HTMLInputElement>document.getElementById('nombre')).value.toString();

  let programa = new Programa();
  programa.setNombre(nombre);
  programa.setVersion(1);

  programas.push(programa);

  let list = '';
  for (let i = 0; i < programas.length; i++) {
    list = list + `<li>${programas[i].getNombre()}</li>`;
  }
  let listado = <HTMLElement>document.getElementById('listado');
  listado.innerHTML = list;

  (<HTMLInputElement>document.getElementById('nombre')).value = '';
}
