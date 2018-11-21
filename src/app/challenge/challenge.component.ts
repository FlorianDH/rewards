
import { Component, OnInit, ReflectiveInjector, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../interfaces/challenge';
import { Request } from '../interfaces/request';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html'
})
export class ChallengeComponent implements OnInit {
  closeResult: string;

  challengesList: Challenge[] = [];
  @Input() request: Request;
  today = new Date ();
  jstoday = '';

  constructor(public challengeService: ChallengeService, private modalService: NgbModal) {}

  ngOnInit() {
    this.challengesList = this.challengeService.getChallenges();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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


    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+00:00');




    console.log("HIER MOET EEN TITEL KOMEN :" + this.challengesList[i].title);
    console.log("HIER MOET EEN TITEL KOMEN :" + this.challengesList[i].points);
    console.log("HIER MOET EEN TITEL KOMEN :" + this.challengesList[i]._id);
    console.log("HIER MOET EEN TITEL KOMEN :" + document.getElementById("tekst" + i));
    const motivation= ((document.getElementById("tekst" + i) as HTMLInputElement).value);
    console.log("HIER MOET EEN TITEL KOMEN :" + motivation);
    console.log("HIER MOET EEN datum KOMEN :" + this.jstoday);

    this.request = {
      points : this.challengesList[i].points,
      title : this.challengesList[i].title,
      _id : '',
      motivation : motivation,
      challenge_id : this.challengesList[i]._id,
      date : this.jstoday,
      isAccepted : false,
      };

      // this.challengeService.addChallangeRequest(this.request).subscribe(test => this)

    }



  }

