import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';
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
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    category: ['', [Validators.required]]
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

  getErrorMessage(fieldName: string){
    const field = this.form.get(fieldName);
    if(field?.hasError('required')){
      return 'Campo obrigatório';
    }

    if(field?.hasError('minlength')){
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if(field?.hasError('maxlength')){
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 100;
      return `Tamanho máximo de ${requiredLength} caracteres excedito.`;
    }
    return 'Campo inválido';
  }
}
