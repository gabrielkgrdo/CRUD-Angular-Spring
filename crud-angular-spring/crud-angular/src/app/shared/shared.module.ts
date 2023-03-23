import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { DialogoConfirmacaoComponent } from './components/dialogo-confirmacao/dialogo-confirmacao.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipe/category.pipe';




@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    DialogoConfirmacaoComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    DialogoConfirmacaoComponent,
    CategoryPipe

  ]
})
export class SharedModule { }
