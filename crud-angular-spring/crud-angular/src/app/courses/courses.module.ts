import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CursoListaComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatSidenavModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
