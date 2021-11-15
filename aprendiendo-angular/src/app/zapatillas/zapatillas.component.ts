import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de Zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor() {
    this.color = 'orange';
    this.mi_marca = 'Adidas';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Reebook Classic', 'Reebook', 'Blanca', 80, true),
      new Zapatilla('Nike Air', 'Nike', 'Negro', 90, true),
      new Zapatilla('Samba', 'Adidas', 'Negro', 100, false),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
    ];
  }

  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }

  getMarca() {
    alert(this.mi_marca);
  }

  addMarca() {
    this.marcas.push(this.mi_marca);
  }
}
