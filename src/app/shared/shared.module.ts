import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NgOptimizedImage
]
})
export class SharedModule { }
