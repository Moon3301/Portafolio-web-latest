import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../../home/interfaces/projects.interface';
import { PersonalProject } from '../../../home/interfaces/personal-projects.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list-page',
  standalone: false,
  templateUrl: './project-list-page.component.html',
  styleUrl: './project-list-page.component.css'
})
export class ProjectListPageComponent implements OnInit{

  projects: Project[] = [];
  personalProjects: PersonalProject[] = [];

  constructor(
    private projectService: ProjectService
  
  ) { }

  async ngOnInit(): Promise<void> {

    // Hacer que siempre que se acceda a esta ruta quede en la parte superior
    window.scrollTo(0, 0);

    await this.handleLoadData();

    this.projects = this.getProjects;
    this.personalProjects = this.getPersonalProjects;
    
  }

  async handleLoadData(): Promise<void> {
    await Promise.all([
      this.projectService.loadProjectsFromFixtures(),
      this.projectService.loadPersonalProjectsFromFixtures()
    ])
  }

  get getProjects(): Project[] {
    return this.projectService.getProjects;
  }

  get getPersonalProjects(): PersonalProject[] {
    return this.projectService.getPersonalProjects;
  }

}
