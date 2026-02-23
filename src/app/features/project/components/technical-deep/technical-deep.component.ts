import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { ProjectTechnicalDeep } from '../../../home/interfaces/projects.interface';

@Component({
  selector: 'project-technical-deep',
  standalone: false,
  templateUrl: './technical-deep.component.html',
  styleUrl: './technical-deep.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnicalDeepComponent {

  readonly panelOpenState = signal(false);

  @Input() 
  technicalDeep: ProjectTechnicalDeep[] | undefined;

  @Input()
  link: string | undefined;

  @Input()
  github: string | undefined;

  goToLinkProject() {
    window.open(this.link, '_blank');
  }

  goToGithubProject() {
    window.open(this.github, '_blank');
  }

}
