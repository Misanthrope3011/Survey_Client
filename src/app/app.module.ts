import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { QuestionsDatabaseComponent } from './components/questions-database/questions-database.component';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsDatabaseComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
