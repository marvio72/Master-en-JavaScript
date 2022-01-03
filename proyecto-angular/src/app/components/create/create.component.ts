import { Component, OnInit } from '@angular/core';
// Importar el modelo
import { Project } from '../../models/project';
// Importar el Servicio
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProjectService],
})
export class CreateComponent implements OnInit {
  //Crear Propiedades
  public title: string;
  //Propiedad que modificara el formulario
  public project: Project;
  //Variable para el status de la alta en la base de datos.
  public status: string;

  constructor(private _projectService: ProjectService) {
    // Sacar el año con la fecha actual
    const actualYear = new Date();
    this.title = 'Crear proyecto';
    this.project = new Project(
      '',
      '',
      '',
      '',
      actualYear.getFullYear(),
      '',
      ''
    );
  }

  ngOnInit(): void {}

  onSubmit(form: any) {
    this._projectService.saveProject(this.project).subscribe(
      (response) => {
        console.log(response);
        if (response.project) {
          this.status = 'success';
          form.reset();
        } else {
          this.status = 'failde';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
