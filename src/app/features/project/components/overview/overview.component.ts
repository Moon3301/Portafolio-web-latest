import { Component, Input } from '@angular/core';
import { ProjectOverview } from '../../../home/interfaces/projects.interface';

@Component({
  selector: 'project-overview',
  standalone: false,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  @Input() overview: ProjectOverview[] | undefined;
  @Input() technologies: string[] | undefined;

}
