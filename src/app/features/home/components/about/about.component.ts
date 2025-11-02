import { Component, OnInit } from '@angular/core';
import { Experience } from '../../interfaces/experience.interface';
import { PersonalProject } from '../../interfaces/personal-projects.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  experiences: Experience[] = [];

  personalProjects: PersonalProject[] = [];

  constructor(private homeService: HomeService){}

  async ngOnInit(): Promise<void> {
    this.experiences = await this.homeService.getExperience();
    this.personalProjects = await this.homeService.getPersonalProjects();
  }

}
