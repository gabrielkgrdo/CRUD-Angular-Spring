import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent {

  @Input() courses: Course [] = [];

  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category','actions']

  constructor(){}

  onAdd(){
    this.add.emit(true);
  }
}

