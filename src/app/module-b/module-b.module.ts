import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/api';
import { ModalBComponent } from './modal-b/modal-b.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  imports: [
    CommonModule,
    DynamicDialogModule,
  ],
  declarations: [
    ModalBComponent
  ],
  entryComponents: [ModalBComponent],
  providers: [
    DialogService,
    DynamicDialogRef,
  ]
})
export class ModuleBModule { }
