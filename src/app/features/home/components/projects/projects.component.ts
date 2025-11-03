import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(
    private homeService: HomeService,
    private router: Router
  ){}

  async ngOnInit() {
    this.projects = await this.homeService.getProjects();
  }

  goToProjects(){
    this.router.navigate(['/project/list']);
  }

  goToProject(project: Project){
    this.router.navigate(['/project', project.id]);
  }

}
