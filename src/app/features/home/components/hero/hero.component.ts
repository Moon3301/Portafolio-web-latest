import { Component, HostListener, OnInit } from '@angular/core';
import { PreferTechnologies } from '../../interfaces/technologies.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{

  isScrolled = false;

  tecnologies: PreferTechnologies[] = [];

  constructor(private homeService: HomeService){}

  async ngOnInit(): Promise<void> {
    this.tecnologies = await this.homeService.getPreferTechnologies();
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

}
