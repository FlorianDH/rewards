import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { ChallengeService } from './services/challenge.service';
import { Challenge } from '../interfaces/challenge';

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

  

  constructor(public challengeService : ChallengeService) { 
   
  
  
  }

  ngOnInit() {
    console.log("HALLLOOOO");
    


    //hier gebleven : er is een fout in de constructor 
    //console.log("alle challenges : " + this.challengeService.getChallenges());
  }

}
