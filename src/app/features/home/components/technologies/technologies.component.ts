import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/types';
import { Technologies } from '../../interfaces/technologies.interface';

@Component({
  selector: 'home-technologies',
  standalone: false,
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements OnInit {

  technologies : Technologies[] = [];

  constructor() { }

  ngOnInit(): void {

    this.technologies = [
      {
        id: 1,
        name: 'HTML',
      },
      {
        id: 2,
        name: 'HTML',
      },
      {
        id: 3,
        name: 'HTML',
      },
    ]
    

  }

  

  spaceBetween = 10;

  swiperBreakpoints = {
    0:    { slidesPerView: 1.5 },
    300:  { slidesPerView: 1.5 },
    350:  { slidesPerView: 1.7 },
    370:  { slidesPerView: 2 },
    500:  { slidesPerView: 2.5 },
    600:  { slidesPerView: 3 },
    700:  { slidesPerView: 3.5 },
    800:  { slidesPerView: 4 },
    960:  { slidesPerView: 5 },
    1280: { slidesPerView: 7 }
  };

  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
  }

  onSlideChange() {
    console.log('slide changed');
  }

  

}
