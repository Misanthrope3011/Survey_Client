import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {FetchSurveyDataService} from '../../services/fetch-survey-data.service';


@Component({
  selector: 'app-questions-database',
  templateUrl: './questions-database.component.html',
  styleUrls: ['./questions-database.component.scss']
})
export class QuestionsDatabaseComponent implements OnInit {

  constructor(private fetchData: FetchSurveyDataService, private builder: FormBuilder) { }

  questionAttributes = new FormGroup({
    questionContent: new FormControl(),
    optionA: new FormControl(),
    optionB: new FormControl(),
    optionC: new FormControl(),
    optionD: new FormControl(),
    correctAnswer: new FormControl(),
    image: new FormControl()
  });
 
  ngOnInit(): void {
  
    this.questionAttributes = this.builder.group({
      questionContent: ['initalValue'],
      optionA: [''],
      optionB: [''],
      optionC: [''],
      optionD: [''],
      correctAnswer: [''],
      image: [''],
    });
  
  }

  addQuestion() {
    console.log(this.questionAttributes.getRawValue());
    this.questionAttributes.controls['questionContent'].setValue(this.questionAttributes.controls['questionContent'].value.toString()); 
    this.fetchData.submitNewQuestion(this.questionAttributes.getRawValue())
                                  .subscribe(err => console.log(err))
  }



}
