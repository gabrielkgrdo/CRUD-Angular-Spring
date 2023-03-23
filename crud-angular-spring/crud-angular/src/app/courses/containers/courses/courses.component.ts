import { DialogoConfirmacaoComponent } from '../../../shared/components/dialogo-confirmacao/dialogo-confirmacao.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable <Course[]> | null = null;


  //coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router : Router,
    private _snackBar: MatSnackBar,
    private route : ActivatedRoute
    ) {
    //this.coursesService = new CoursesService();
    this.refresh();
  }

  refresh(){
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.erro("Erro ao carregar os cursos");
        return of([])
      })
    );
  }


  erro(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd(){
    this.router.navigate(['adicionar-curso'], {relativeTo: this.route});
  }

  onEdit(course: Course){
    this.router.navigate(['editar', course._id], {relativeTo: this.route});
  }

  onDelete(course: Course){
    const dialogRef = this.dialog.open(DialogoConfirmacaoComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result : boolean) => {
      if(result){
        this.coursesService.remove(course._id).subscribe(
          () => {
            this.refresh();
            this._snackBar.open("Curso removido com Sucesso!", '', {
               duration: 5000,
               verticalPosition: 'top',
               horizontalPosition: 'center'
              });
          },
          () => this.erro('Erro ao tentar remover o curso.')
        );
      }
    });
  }
}
