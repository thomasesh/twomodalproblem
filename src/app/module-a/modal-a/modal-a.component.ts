import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/api';

@Component({
  selector: 'app-modal-a',
  templateUrl: './modal-a.component.html',
  styleUrls: ['./modal-a.component.css']
})
export class ModalAComponent {

  constructor(public activeModal: DynamicDialogRef ) { }

  close() {
    this.activeModal.close('true');
  }
}
