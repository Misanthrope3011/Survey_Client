import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {FetchSurveyDataService} from '../../services/fetch-survey-data.service';
import {QuizLogic} from '../../QuizLogic';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {


  quizLogic: QuizLogic;
  questionIndex: number;
  currentDisplayedQuestion: any;


  constructor(private fetchData: FetchSurveyDataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.questionIndex = params['id'];
    });
    this.quizLogic = new QuizLogic();
   }

  ngOnInit(): void {

    this.fetchData.fetchSingleQuestion(this.questionIndex - 1)
                                    .subscribe(response => {
                                      this.currentDisplayedQuestion = response
                                    });
    console.log(this.fetchData.getSurveyConfig()[0]);
    this.currentDisplayedQuestion = this.fetchData.getSurveyConfig()[this.questionIndex]
  } 

  

  
  nextQuestion() {

    this.quizLogic.incrementQuestionNumber();
}



}
