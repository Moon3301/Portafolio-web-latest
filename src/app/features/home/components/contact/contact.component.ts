import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../../interfaces/personal-info.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  personalInfo:PersonalInfo = {
    name: '',
    phone: '',
    email: '',
    cv: '',
    linkedin: '',
    github: ''
  };

  constructor(private homeService: HomeService){}

  async ngOnInit(): Promise<void> {
    this.personalInfo = await this.homeService.getPersonalInfo();
  }

}
