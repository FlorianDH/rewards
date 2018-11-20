import { Component, OnInit, ReflectiveInjector, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { ChallengeService } from './services/challenge.service';
import { Challenge } from '../interfaces/challenge';
import { Request } from '../interfaces/request';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `],
  
})
export class ChallengeComponent implements OnInit {


  challengesList : Challenge[] = [];
  @Input() request : Request;
  today = new Date ();
  jstoday ='';
  
  constructor(private challengeService : ChallengeService) {  }

  
  ngOnInit() {   
    this.challengesList = this.challengeService.getChallenges();
    this.request = {
      points : "",
    title : "",
    _id : "",
    motivation : "",
    challenge_id : "",
    date : "",
    isAccepted : false,
    };
  }


  challengeExecuted(i){
    
    
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+00:00');


    // alle challenge gegevens moeten opgeslagen worden in request gegevens
    // request wegschrijven naar API
    // bij het submitten --> alert met "aangevraagd".

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
      _id : "",
      motivation : motivation,
      challenge_id : this.challengesList[i]._id,
      date : this.jstoday,
      isAccepted : false,
      }

      //this.challengeService.addChallangeRequest(this.request).subscribe(test => this)

    }


   
  }
