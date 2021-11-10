import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Master de JavaScript y Angular';
  public mostrar_videojuegos: boolean = true;

  ocultarVideojuegos(value: boolean) {
    this.mostrar_videojuegos = value;
  }
}
