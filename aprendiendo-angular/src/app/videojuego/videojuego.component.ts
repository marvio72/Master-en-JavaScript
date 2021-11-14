import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;
  constructor() {
    this.titulo = 'Componente de Videojuegos';
    this.listado = 'Listado de los juegos más populares';
    console.log('Se ha cargado el componente: videojuego.component.ts');
  }
  ngOnInit() {
    // console.log('OnInit iniciado!!');
  }

  ngDoCheck() {
    // console.log('DoCheck Ejecutado!!!');
  }

  ngOnDestroy() {
    // console.log('OnDestroy Ejecutado!!!!');
  }

  cambiarTitulo() {
    this.titulo = 'Nuevo titulo del componente';
  }
}
