import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalInfo } from '../../interfaces/personal-info.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

  personalInfo = signal<PersonalInfo>({
    name: '',
    phone: '',
    email: '',
    cv: '',
    linkedin: '',
    github: ''
  });

  contactForm: FormGroup;

  constructor(
    private homeService: HomeService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async ngOnInit(): Promise<void> {
    const info = await this.homeService.getPersonalInfo();
    this.personalInfo.set(info);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Here you would typically call a service to send the email
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  openLink(url: string) {
    if (url) window.open(url, '_blank');
  }
}
