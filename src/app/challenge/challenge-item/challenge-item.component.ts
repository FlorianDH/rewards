import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {formatDate} from '@angular/common';
import {Request} from '../../interfaces/request';
import {ChallengeService} from '../../services/challenge.service';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html'
})
export class ChallengeItemComponent implements OnInit {

  @Input() challengesList: any;
  @Input() request: Request;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(public challengeService: ChallengeService, private modalService: NgbModal) { }
  today = new Date();
  jstoday = '';

  ngOnInit() {
  }

  open(content, i) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {}, (reason) => {});
  }

  challengeExecuted(i) {
    this.jstoday = formatDate(this.today, 'MM-dd-yyyy hh:mm:ss', 'en-US', '+00:00');

    const motivation = ((document.getElementById('motivation') as HTMLInputElement).value);

    this.request = {
      motivation : motivation,
      challenge_id : this.challengesList[i]._id,
      date : this.jstoday,
      isAccepted : false,
      user_id : this.user._id,
      _id : ''
    };

    this.challengeService.addChallangeRequest(this.request).subscribe(test => this);
    // TODO modal close
  }
}
