import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private homeService: HomeService){}

  async ngOnInit() {
    this.projects = await this.homeService.getProjects();
  }

}
