import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public title: string;
  public url: string;
  constructor(private _projectService: ProjectService) {
    this.title = 'Proyectos';
    this.url = Global.url;
  }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this._projectService.getProject().subscribe(
      (response) => {
        if (response.projects) {
          this.projects = response.projects;
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
