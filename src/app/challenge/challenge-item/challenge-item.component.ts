import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html'
})
export class ChallengeItemComponent implements OnInit {

  @Input() challengesList: any;
  constructor() { }

  ngOnInit() {
  }

}
