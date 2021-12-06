import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class zapatillaService {
  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 'Reebook', 'Blanca', 80, true),
      new Zapatilla('Nike Air', 'Nike', 'Negro', 90, true),
      new Zapatilla('Samba', 'Adidas', 'Negro', 100, false),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
    ];
  }

  getTexto() {
    return 'Hola Mundo desde un Servicio';
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
