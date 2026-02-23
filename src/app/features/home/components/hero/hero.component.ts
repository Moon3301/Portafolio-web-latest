import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  signal,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  NgZone
} from '@angular/core';
import { gsap } from 'gsap';
import { PreferTechnologies } from '../../interfaces/technologies.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, AfterViewInit {

  // Referencias al DOM del icono animado
  @ViewChild('codeIcon') codeIcon!: ElementRef<HTMLDivElement>;
  @ViewChild('iconWrapper') iconWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('codeSvg') codeSvg!: ElementRef<SVGSVGElement>;
  @ViewChild('glowRing') glowRing!: ElementRef<HTMLDivElement>;
  @ViewChildren('particle') particles!: QueryList<ElementRef<HTMLDivElement>>;

  tecnologies = signal<PreferTechnologies[]>([]);

  constructor(
    private homeService: HomeService,
    private ngZone: NgZone
  ) { }

  async ngOnInit(): Promise<void> {
    const techs = await this.homeService.getPreferTechnologies();
    this.tecnologies.set(techs);
  }

  ngAfterViewInit(): void {
    // Correr fuera de NgZone para no afectar la detección de cambios de Angular
    this.ngZone.runOutsideAngular(() => {
      this.animateCodeIcon();
    });
  }

  private animateCodeIcon(): void {
    const wrapper = this.iconWrapper.nativeElement;
    const svg = this.codeSvg.nativeElement;
    const ring = this.glowRing.nativeElement;
    const parts = this.particles.map(p => p.nativeElement);

    // Seleccionar los trazos SVG para animarlos como "dibujo"
    const leftBracket = svg.querySelector('.left-bracket') as SVGPathElement;
    const rightBracket = svg.querySelector('.right-bracket') as SVGPathElement;
    const slash = svg.querySelector('.svg-slash') as SVGLineElement;

    // Calcular longitud de cada trazo para el efecto "draw"
    const leftLen = leftBracket.getTotalLength();
    const rightLen = rightBracket.getTotalLength();
    const slashLen = slash.getTotalLength();

    // Estado inicial de los trazos: invisibles (dashoffset = longitud total)
    gsap.set([leftBracket, rightBracket, slash], { opacity: 1 });

    gsap.set(leftBracket, {
      strokeDasharray: leftLen,
      strokeDashoffset: leftLen
    });
    gsap.set(rightBracket, {
      strokeDasharray: rightLen,
      strokeDashoffset: rightLen
    });
    gsap.set(slash, {
      strokeDasharray: slashLen,
      strokeDashoffset: slashLen
    });

    // Estado inicial: icono invisible y pequeño
    gsap.set(wrapper, { opacity: 0, scale: 0.3, rotate: -20 });
    gsap.set(ring, { opacity: 0, scale: 0.5 });
    gsap.set(parts, { opacity: 0, scale: 0 });

    // ── TIMELINE PRINCIPAL ───────────────────────────────────────────────────
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Entrada del contenedor: escala + rotación
    tl.to(wrapper, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 0.8,
    });

    // 2. Dibujar los trazos SVG en cascada (como si alguien los trazara)
    tl.to(leftBracket, {
      strokeDashoffset: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    }, '-=0.3');

    tl.to(slash, {
      strokeDashoffset: 0,
      duration: 0.4,
      ease: 'power2.inOut'
    }, '-=0.1');

    tl.to(rightBracket, {
      strokeDashoffset: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    }, '-=0.1');

    // 3. Aparición del anillo de brillo
    tl.to(ring, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.4');

    // 4. Aparición de partículas en posiciones aleatorias alrededor
    const positions = [
      { x: -80, y: -60 },
      { x: 80, y: -50 },
      { x: -90, y: 40 },
      { x: 85, y: 55 },
      { x: 0, y: -90 }
    ];

    parts.forEach((p, i) => {
      gsap.set(p, { x: positions[i].x, y: positions[i].y });
    });

    tl.to(parts, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      stagger: 0.08,
      ease: 'back.out(2)'
    }, '-=0.3');

    // ── ANIMACIONES INFINITAS (loop) ─────────────────────────────────────────

    // Flotación suave del icono completo
    gsap.to(wrapper, {
      y: '-=18',
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.8
    });

    // Pulso del anillo exterior (escala + opacidad)
    gsap.to(ring, {
      scale: 1.15,
      opacity: 0.4,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1
    });

    // Movimiento independiente de cada partícula (órbita irregular)
    parts.forEach((p, i) => {
      gsap.to(p, {
        x: `+=${(i % 2 === 0 ? 20 : -20)}`,
        y: `+=${(i % 3 === 0 ? 15 : -15)}`,
        duration: 2 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3
      });
    });

    // Brillo pulsante del SVG (filter drop-shadow mediante opacity de un elemento)
    gsap.to(svg, {
      filter: 'drop-shadow(0 0 18px rgba(108, 99, 255, 0.9))',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.2
    });
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
    }
  }
}
