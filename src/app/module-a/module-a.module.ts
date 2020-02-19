import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/api';
import { ModalAComponent } from './modal-a/modal-a.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  imports: [
    CommonModule,
    DynamicDialogModule,
  ],
  declarations: [
    ModalAComponent
  ],
  entryComponents: [ModalAComponent],
  providers: [
    DialogService,
    DynamicDialogRef,
  ]
})
export class ModuleAModule { }
