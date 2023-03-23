import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent,
    CursoListaComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatSidenavModule,
    AppMaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CoursesModule { }
