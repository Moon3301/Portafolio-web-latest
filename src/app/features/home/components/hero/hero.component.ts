import { Component } from '@angular/core';
import { Technologies } from '../../interfaces/technologies.interface';

@Component({
  selector: 'home-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  tecnologies: Technologies[] = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'Node.js',
    },
    {
      id: 3,
      name: 'NestJS',
    },
    {
      id: 4,
      name: 'Typescript',
    },
    {
      id: 5,
      name: 'Mysql',
    }
  ]

}
