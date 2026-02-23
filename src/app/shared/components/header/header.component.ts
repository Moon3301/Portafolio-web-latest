import { Component, HostListener, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { HomeService } from '../../../features/home/services/home.service';
import { PersonalInfo } from '../../../features/home/interfaces/personal-info.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  personalInfo = signal<PersonalInfo>({
    name: '',
    phone: '',
    email: '',
    cv: '',
    linkedin: '',
    github: ''
  });

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    const info = await this.homeService.getPersonalInfo();
    this.personalInfo.set(info);
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.isMobileMenuOpen.set(false);

    const doScroll = () => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 70;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
        }
      });
    };

    if (this.router.url !== '/home') {
      this.router.navigate(['/home']).then(() => doScroll());
    } else {
      doScroll();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  goToGithub() {
    window.open(this.personalInfo().github, '_blank');
  }

  goToLinkedin() {
    window.open(this.personalInfo().linkedin, '_blank');
  }
}
