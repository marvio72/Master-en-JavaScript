import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Master de JavaScript y Angular';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor() {
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion;
  }

  ocultarVideojuegos(value: boolean) {
    this.mostrar_videojuegos = value;
  }
}
