import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './medewerkerForm.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class MedewerkerFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}