import { Component, OnInit } from '@angular/core';
// Importar el modelo
import { Project } from '../../models/project';
// Importar el Servicio de Project para dar de alta en la base de datos
import { ProjectService } from '../../services/project.service';
// Importar Servicio para dar de alta una imagen en la base de datos
import { UploadService } from '../../services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProjectService, UploadService],
})
export class CreateComponent implements OnInit {
  //Crear Propiedades
  public title: string;
  //Propiedad que modificara el formulario
  public project: Project;
  //Variable para el status de la alta en la base de datos.
  public status: string;
  //Propiedad para subir archivos de imagenes
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
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
    // Guardar los Datos
    this._projectService.saveProject(this.project).subscribe(
      (response) => {
        console.log(response);
        if (response.project) {
          // Subir la imagen
          this._uploadService
            .makeFileRequest(
              Global.url + 'upload-image/' + response.project._id,
              [],
              this.filesToUpload,
              'image'
            )
            .then((result: any) => {
              console.log(result);
              this.status = 'success';
              form.reset();
            });
        } else {
          this.status = 'failde';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    // console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
