import { Component, HostListener, OnInit  } from '@angular/core';
import { HomeService } from '../../../features/home/services/home.service';
import { PersonalInfo } from '../../../features/home/interfaces/personal-info.interface';

@Component({
  selector: 'shared-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isScrolled = false;

  personalInfo:PersonalInfo = {
    name: '',
    phone: '',
    email: '',
    cv: '',
    linkedin: '',
    github: ''
  };

  constructor( private homeService: HomeService ){}
  
  ngOnInit(): void {
    this.homeService.getPersonalInfo().then((personalInfo) => {
      this.personalInfo = personalInfo;
    });
    
  }

  scrollToSection(event: Event, sectionId: string) {

    event.preventDefault();

    const doScroll = () => {
      // pequeño delay para asegurar que el DOM se renderice si hubo navegación
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 70;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
        }
      });
    };

    doScroll();

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  goToGithub() {
    window.open(this.personalInfo.github, '_blank');
  }

  goToLinkedin() {
    window.open(this.personalInfo.linkedin, '_blank');
  }

}
