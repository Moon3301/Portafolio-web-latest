import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'project-technical-deep',
  standalone: false,
  templateUrl: './technical-deep.component.html',
  styleUrl: './technical-deep.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnicalDeepComponent {

  readonly panelOpenState = signal(false);

}
