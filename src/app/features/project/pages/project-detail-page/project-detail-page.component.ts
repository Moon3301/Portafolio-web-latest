import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../../home/interfaces/projects.interface';

@Component({
  selector: 'project-detail-page',
  standalone: false,
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.css'
})
export class ProjectDetailPageComponent implements OnInit {

    projectId: string = '';
    projectDetail: Project | undefined;

    constructor(
      private route: ActivatedRoute,
      private projectService: ProjectService
    ) { }

    async ngOnInit() {

      window.scrollTo(0, 0);

      this.route.params.subscribe(params => {
        this.projectId = params['id'];
      });

      this.projectDetail = this.projectService.findProjectById(Number(this.projectId));

      if (!this.projectDetail){
        await this.projectService.loadProjectsFromFixtures();
        this.projectDetail = this.projectService.findProjectById(Number(this.projectId));
      }
    }

}
