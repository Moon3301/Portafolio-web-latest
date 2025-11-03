import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../../home/interfaces/projects.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'project-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  @Input() 
  projects: Project[] = [];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    
  }

  goToProject(project: Project): void {
    this.router.navigate(['/project', project.id]);
  }

}
