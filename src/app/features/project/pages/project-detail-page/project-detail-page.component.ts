import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project, ProjectDetail } from '../../../home/interfaces/projects.interface';

@Component({
  selector: 'project-detail-page',
  standalone: false,
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.css'
})
export class ProjectDetailPageComponent implements OnInit {

    projectId: string = '';
    project: Project | undefined;
    projectDetail: ProjectDetail | undefined;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private projectService: ProjectService
    ) { }

    async ngOnInit() {

      window.scrollTo(0, 0);

      this.route.params.subscribe(params => {
        this.projectId = params['id'];
      });

      this.project = this.projectService.findProjectById(Number(this.projectId));

      if (!this.project){
        await this.projectService.loadProjectsFromFixtures();
        this.project = this.projectService.findProjectById(Number(this.projectId));
      }

      this.projectDetail = this.project?.detail;

      console.log(this.projectDetail);
    }

    goToProjects() {
      this.router.navigate(['/projects']);
    }

}
