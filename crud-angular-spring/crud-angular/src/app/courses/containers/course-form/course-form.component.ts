import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: ['']
  });

  constructor(
    private formBuilder : NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
    ) {
    this.form
    const course: Course = this.route.snapshot.data['course'];
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
    });
  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(sucesso =>  this.onSucess(), erro => this.onError());
  }

  private onSucess(){
    this._snackBar.open("Curso adicionado com Sucesso!", '', { duration: 5000});
    this.onCancel();
  }

  private onError(){
    this._snackBar.open("Erro ao salvar o curso", '', { duration: 5000});
  }

  onCancel(){
    this.location.back();
  }
}
