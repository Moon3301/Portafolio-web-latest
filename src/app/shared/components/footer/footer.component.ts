import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shared-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
