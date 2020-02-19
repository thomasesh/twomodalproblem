import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/api';
import { Observable } from 'rxjs';
import { ModalBComponent } from './modal-b/modal-b.component';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class ModalBService {

  constructor(
              private dialogService: DialogService,
             ) {
     }

  /**
   * Display the display modal B
   *
   */
  public displayModalB(): Observable<any> {
      // get the home reference name
      this.dialogService['displayLoginModal'] = 1;
      const modalRef: DynamicDialogRef = this.dialogService.open(ModalBComponent, {
        showHeader: false,
        closeOnEscape: false,
        contentStyle: {
          overflow: 'auto',
          backgroundColor: '#fff',
          'min-width': '300px',
          'min-height': '100px'
        }
      });

      return modalRef.onClose;
  }
}
