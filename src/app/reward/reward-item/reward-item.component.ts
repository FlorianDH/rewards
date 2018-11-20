import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward-item',
  templateUrl: './reward-item.component.html',
  styles: []
})
export class RewardItemComponent implements OnInit {

  @Input() fdc: any;        // (1)
  Constructor() { }

  ngOnInit() {
  }

}
