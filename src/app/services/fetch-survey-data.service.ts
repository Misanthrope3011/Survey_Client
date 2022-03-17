import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FetchSurveyDataService {

  constructor(private http: HttpClient) { }

  private surveyConfig: any;
  surveyCategories: any;


  fetchSingleQuestion(id: number) {
    return this.http.get("http://localhost:8080/quiz/" + id);              
  }

  setSurveyConfig(formGroup: FormGroup) {
    return this.http.post("http://localhost:8080/generateSurvey", formGroup);                
  }

  submitNewQuestion(formGroup: FormGroup) {
    return this.http.post("http://localhost:8080/addQuestion", formGroup, {responseType: 'blob'});
  }

  getAllCategories() {
    return this.http.get("http://localhost:8080/getCategories");
  }

  setterSurveyConfig(surveyConfig: any) {
      this.surveyConfig = surveyConfig;
  }

  getSurveyConfig() {
    return this.surveyConfig;
}
  
}
