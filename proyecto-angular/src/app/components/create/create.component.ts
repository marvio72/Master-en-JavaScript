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

  constructor(_projectService: ProjectService) {
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
    console.log(this.project);
  }
}
