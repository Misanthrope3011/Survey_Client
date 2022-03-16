import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {FetchSurveyDataService} from '../../services/fetch-survey-data.service';


@Component({
  selector: 'app-questions-database',
  templateUrl: './questions-database.component.html',
  styleUrls: ['./questions-database.component.scss']
})
export class QuestionsDatabaseComponent implements OnInit {

  constructor(private fetchData: FetchSurveyDataService, private builder: FormBuilder) { }


  categories: any;

  questionAttributes = new FormGroup({
    questionContent: new FormControl(),
    optionA: new FormControl(),
    optionB: new FormControl(),
    optionC: new FormControl(),
    optionD: new FormControl(),
    correctAnswer: new FormControl(),
    image: new FormControl(),
    answerTimeSec: new FormControl(),
    category: new FormControl()
  });
 
  ngOnInit(): void {

    this.categories = this.fetchData.surveyCategories;
    console.log(this.categories);
    this.questionAttributes = this.builder.group({
      question: ['pytanie'],
      answerA: [''],
      answerB: [''],
      answerC: [''],
      answerD: [''],
      correctAnswer: [''],
      image: [],
      answerTimeSec: [20],
      categoryParser: []
    });
  
  }

  getImage($event) {
  }

  addQuestion() {
    this.questionAttributes.controls['correctAnswer'].setValue(this.questionAttributes.controls['correctAnswer'].value.toString()); 
    this.fetchData.submitNewQuestion(this.questionAttributes.getRawValue())
                                  .subscribe(err => console.log(err))
  }

}
