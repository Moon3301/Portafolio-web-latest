import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  @Input() 
  gallery: string[] | undefined;

}
