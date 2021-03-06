import { Component, Output, Input, OnInit , EventEmitter} from '@angular/core';
import { RewardService } from '../../services/reward.service';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import { Claim } from '../../interfaces/claim';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reward-item',
  templateUrl: './reward-item.component.html',
  styles: []
})
export class RewardItemComponent implements OnInit {

  @Input() rewardsList: any;
  @Input() claim: Claim;
  @Output() msgEvent = new EventEmitter<string> ();
  user = JSON.parse(localStorage.getItem('user'));

  constructor(public rewardService: RewardService,
              private modalService: NgbModal,
              private userService: UserService,
              private http: HttpClient) { }
  today = new Date();
  jstoday = '';
  modalReference: NgbModalRef;
  closeResult;
  currentPoints = 0;
  enoughPoints = false;
  ngOnInit() {
    this.http.get<any>('https://reward-platform-api.herokuapp.com/users/'+ this.user._id).subscribe(
      data => {
        this.user = data.user;
      }
    );
  }

  rewardClaimed(content, i) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    if (this.rewardService.points > this.rewardsList[i].points){

      this.jstoday = formatDate(this.today, 'MM-dd-yyyy hh:mm:ss', 'en-US', '+00:00');
      this.claim = {
        reward_id : this.rewardsList[i]._id,
        date : this.jstoday,
        received : false,
        user_id : this.user._id,
        _id : ''
      };

      this.user.currentPoints = this.user.currentPoints - this.rewardsList[i].points;
      localStorage.setItem("user",JSON.stringify(this.user))
      this.msgEvent.emit(this.user.currentPoints);
      this.rewardService.points = this.user.currentPoints;
      this.userService.updateUser(this.user._id,this.user.currentPoints,this.user.totalPoints)
      this.rewardService.addRewardClaim(this.claim).subscribe();
      this.enoughPoints = true;
    }else{

      this.enoughPoints = false;
    }

  }
  close() {
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
}
