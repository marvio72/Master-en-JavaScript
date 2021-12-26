import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proyecto-angular';
  nombre: String = 'Marco Ruvalcaba';
  web: string = 'mruvalcaba.com';
}
