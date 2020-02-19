import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/api';

@Component({
  selector: 'app-modal-b',
  templateUrl: './modal-b.component.html',
  styleUrls: ['./modal-b.component.css']
})
export class ModalBComponent {

  constructor(public activeModal: DynamicDialogRef ) { }

  close() {
    this.activeModal.close('true');
  }
}
