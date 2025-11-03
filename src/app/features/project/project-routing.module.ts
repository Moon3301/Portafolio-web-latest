import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';
import { ProjectListPageComponent } from './pages/project-list-page/project-list-page.component';

const routes: Routes = [
  
  {
    path: 'list',
    component: ProjectListPageComponent
  },
  {
    path: ':id',
    component: ProjectDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
