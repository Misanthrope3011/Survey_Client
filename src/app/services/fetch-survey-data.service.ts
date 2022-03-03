import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FetchSurveyDataService {

  constructor(private http: HttpClient) { }

  surveyConfig: any;

  setSurveyConfig(formGroup: FormGroup) {

    return this.http.post("http://localhost:8080/generateSurvey", formGroup);                
  }

  submitNewQuestion(formGroup: FormGroup) {
    return this.http.post("http://localhost:8080/addQuestion", formGroup, {responseType: 'blob'});
  }
  
}
