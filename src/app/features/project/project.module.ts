import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';
import { ProjectListPageComponent } from './pages/project-list-page/project-list-page.component';
import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { MaterialModule } from '../../material/material.module';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { OverviewComponent } from './components/overview/overview.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TechnicalDeepComponent } from './components/technical-deep/technical-deep.component';

@NgModule({
  declarations: [
    ProjectDetailPageComponent,
    ProjectListPageComponent,
    ListComponent,
    FilterComponent,
    DetailComponent,
    OverviewComponent,
    GalleryComponent,
    TechnicalDeepComponent,
   
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterialModule,
    NgOptimizedImage,
    RouterModule
]
})
export class ProjectModule { }
