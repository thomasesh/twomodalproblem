import { Component, OnInit } from '@angular/core';
import { ModalAService } from './module-a';
import { ModalBService } from './module-b';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  resultA: any;
  resultB: any;

  constructor(private modalAService: ModalAService,
              private modalBService: ModalBService) {

  }

  ngOnInit() {
    setTimeout(() => this.openModalA(), 1000);
    setTimeout(() => this.openModalB(), 5000);
  }

  openModalA() {
    this.modalAService.displayModalA().subscribe(
      (result) => {
        console.log('displayModalA: Closed with:', result);
        this.resultA = result;
    },
      (error) => {
        console.log('displayModalA: Error:', error);
        this.resultA = 'Error';
      }
    );
  }

  openModalB() {
    this.modalBService.displayModalB().subscribe(
      (result) => {
        console.log('displayModalB: Closed with:', result);
        this.resultB = result;
    },
      (error) => {
        console.log('displayModalB: Error:', error);
        this.resultB = 'Error';
      }
    );
  }
}
