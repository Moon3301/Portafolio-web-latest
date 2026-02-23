import { Component, Input } from '@angular/core';
import { ProjectHero } from '../../../home/interfaces/projects.interface';

@Component({
  selector: 'project-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  @Input() 
  hero: ProjectHero | undefined;

}
