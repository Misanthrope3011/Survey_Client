import { Component, OnInit, OnDestroy } from '@angular/core';
import {FetchSurveyDataService} from './services/fetch-survey-data.service';
import {FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

    title = 'SurveyClient';

    constructor(private surveyData: FetchSurveyDataService, private builder: FormBuilder, private router: Router) {

    }

    survey = this.builder.group({
      size: ('10'),
      category: ('Inne'),
    });

    ngOnInit() {
    }

    ngOnDestroy() {

    }

    generateQuiz() {
      console.log(this.survey.getRawValue())
      this.surveyData.setSurveyConfig(this.survey.getRawValue())
                                    .subscribe(err => {
                                      this.surveyData.surveyConfig = err;
                                      this.router.navigateByUrl("/quiz");
                                    })
    }
}
