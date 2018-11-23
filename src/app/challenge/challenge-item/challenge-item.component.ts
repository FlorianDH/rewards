import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {formatDate} from '@angular/common';
import {Request} from '../../interfaces/request';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html'
})
export class ChallengeItemComponent implements OnInit {

  @Input() challengesList: any;
  closeResult: string; // resultaat van de modal
  constructor(private modalService: NgbModal) { }
  @Input() request: Request;
  today = new Date();
  jstoday = '';

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  challengeExecuted(i) {

    this.jstoday = formatDate(this.today, 'MM-dd-yyyy hh:mm:ss', 'en-US', '+00:00');

    // console.log('HIER MOET EEN TITEL KOMEN :' + this.challengesList[i].title);
    // console.log('HIER MOET EEN TITEL KOMEN :' + this.challengesList[i].points);
    // console.log('HIER MOET EEN TITEL KOMEN :' + this.challengesList[i]._id);
    // console.log("HIER MOET EEN TITEL KOMEN :" + document.getElementById("tekst" + i));
    const motivation = ((document.getElementById('tekst' + i) as HTMLInputElement).value);
    // console.log('HIER MOET EEN TITEL KOMEN :' + motivation);
    // console.log('HIER MOET EEN datum KOMEN :' + this.jstoday);

    this.request = {
      motivation : motivation,
      challenge_id : this.challengesList[i]._id,
      date : this.jstoday,
      isAccepted : false,
      user_id : '5bf548c4673f2b0016b84958' // user1 hardcoded
    };

    this.challengeService.addChallangeRequest(this.request).subscribe(test => this);
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
}
