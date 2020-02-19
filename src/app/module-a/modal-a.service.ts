import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/api';
import { Observable } from 'rxjs';
import { ModalAComponent } from './modal-a/modal-a.component';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class ModalAService {

  constructor(
              private dialogService: DialogService,
             ) {
     }

  /**
   * Display the diaplog A modal
   *
   */
  public displayModalA(): Observable<any> {
      // get the home reference name
      this.dialogService['displayLoginModal'] = 1;
      const modalRef: DynamicDialogRef = this.dialogService.open(ModalAComponent, {
        showHeader: false,
        closeOnEscape: false,
        contentStyle: {
          overflow: 'auto',
          backgroundColor: '#fff',
          'min-width': '800px',
          'min-height': '600px'
        }
      });

      return modalRef.onClose;
  }
}
