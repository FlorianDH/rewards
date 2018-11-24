import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
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
  closeResult;
  modalReference:NgbModalRef;
  ngOnInit() {
  }

  open(content, i) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  close(){
    this.modalReference.close();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
    this.modalReference.close();
  }
}
