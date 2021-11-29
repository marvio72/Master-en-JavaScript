import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  public nombre: string = '';
  public followers: number = 0;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.followers = +params['followers'];

      // si nombre es igual a ninguno me lleva a la pagina home
      if (this.nombre == 'ninguno') {
        this._router.navigate(['/home']);
      }
    });
  }

  redirigir() {
    this._router.navigate(['/zapatillas']);
  }
}
