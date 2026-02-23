import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {

  projects = signal<Project[]>([]);

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  async ngOnInit() {
    const projectsData = await this.homeService.getProjects();
    this.projects.set(projectsData);
  }

  goToProjects() {
    this.router.navigate(['/project/list']);
  }

  goToProject(project: Project) {
    this.router.navigate(['/project', project.id]);
  }

  goToRepo(project: Project, event: Event) {
    event.stopPropagation();
    const link = project.github;
    window.open(link, '_blank');
  }
}
