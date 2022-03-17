import { Component, OnInit, OnDestroy } from '@angular/core';
import {FetchSurveyDataService} from './services/fetch-survey-data.service';
import {FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { QuizLogic } from './QuizLogic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

    title = 'SurveyClient';
    getSurveyData: any;

    constructor(public surveyData: FetchSurveyDataService, private builder: FormBuilder, private router: Router) {
    }

    survey = this.builder.group({
      size: ('10'),
      category: ('INNE')
    });

    ngOnInit() {
      
    
      this.surveyData.getAllCategories()
                        .subscribe(data => {
                          this.getSurveyData = data;
                          this.surveyData.surveyCategories = data;
                        })

    }

    ngOnDestroy() {

    }


    generateQuiz() {
      console.log(this.survey.getRawValue())
      this.surveyData.setSurveyConfig(this.survey.getRawValue())
                                    .subscribe(err => {
                                      this.surveyData.setterSurveyConfig(err);
                                      this.router.navigateByUrl("/quiz/1");
                                    })
    }

}
