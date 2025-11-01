import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';

@Component({
  selector: 'home-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(){}

  ngOnInit() {

    this.projects = [
      {
        id: 1,
        name: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: 'img/proj-1.jpg',
        link: 'https://via.placeholder.com/150',
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        id: 2,
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: 'img/proj-2.jpg',
        link: 'https://via.placeholder.com/150',
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        id: 3,
        name: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: 'img/proj-3.jpg',
        link: 'https://via.placeholder.com/150',
        technologies: ['HTML', 'CSS', 'JavaScript']
      }
    ];
    
  }



}
