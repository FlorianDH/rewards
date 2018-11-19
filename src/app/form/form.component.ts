import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
