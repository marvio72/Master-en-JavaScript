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
