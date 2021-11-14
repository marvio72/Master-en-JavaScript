import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de Zapatillas';
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 'Reebook', 'Blanca', 80, true),
      new Zapatilla('Nike Air', 'Nike', 'Negro', 90, true),
      new Zapatilla('Samba', 'Adidas', 'Negro', 100, false),
    ];
  }

  ngOnInit() {
    console.log(this.zapatillas);
  }
}
