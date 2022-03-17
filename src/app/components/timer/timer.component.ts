import { Component, OnInit, Input } from '@angular/core';
import {FetchSurveyDataService} from '../../services/fetch-survey-data.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(private fetchData: FetchSurveyDataService) { }
  
  @Input() timeForAnswer: number;

  ngOnInit(): void {
    this.timeForAnswer = this.fetchData.getSurveyConfig()[0].answerTimeSec;

    setInterval(() => {
      if(this.timeForAnswer > 0)
        this.timeForAnswer--;
      else { 
        
      }
    }, 1000);
  }


}
