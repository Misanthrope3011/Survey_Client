import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {FetchSurveyDataService} from '../services/fetch-survey-data.service';
import {QuizLogic} from '../QuizLogic';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {


  quizLogic: QuizLogic;

  constructor(private fetchData: FetchSurveyDataService) {
    this.quizLogic = new QuizLogic();
   }

  ngOnInit(): void {
    console.log(this.fetchData.surveyConfig);
  }

  
  nextQuestion() {
    this.quizLogic.incrementQuestionNumber();
}



}
