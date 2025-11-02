import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/types';
import { Technologies } from '../../interfaces/technologies.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home-technologies',
  standalone: false,
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements OnInit {

  autoplayConfig = {
    delay: 2500,                    // Tiempo entre slides (ms)
    disableOnInteraction: false,    // Continúa después de interacción
    pauseOnMouseEnter: true,        // Pausa al pasar el mouse
    reverseDirection: false,        // Dirección inversa
  };

  technologies : Technologies[] = [];

  constructor(private homeService: HomeService) { }

  async ngOnInit(): Promise<void> {
    this.technologies = await this.homeService.getTechnologies();
  }

  spaceBetween = 10;

  swiperBreakpoints = {
    0:    { slidesPerView: 1.5 },
    300:  { slidesPerView: 1.5 },
    350:  { slidesPerView: 1.7 },
    370:  { slidesPerView: 2 },
    500:  { slidesPerView: 2.5 },
    600:  { slidesPerView: 3 },
    700:  { slidesPerView: 3 },
    800:  { slidesPerView: 3 },
    960:  { slidesPerView: 4 },
    1280: { slidesPerView: 5 }
  };

  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }

  

}
