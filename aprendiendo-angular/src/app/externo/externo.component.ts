import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.scss'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;
  public new_user: any;
  public usuarioGuardado: any;

  constructor(private _peticionesService: PeticionesService) {
    this.user = '';
    this.userId = 1;
    this.new_user = {
      name: '',
      job: '',
    };
  }

  ngOnInit() {
    this.fecha = new Date();
    this.cargaUsuario();
  }

  cargaUsuario() {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      (result) => {
        this.user = result.data;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form: any) {
    this._peticionesService.addUser(this.new_user).subscribe(
      (response) => {
        this.usuarioGuardado = response;

        form.reset();
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
