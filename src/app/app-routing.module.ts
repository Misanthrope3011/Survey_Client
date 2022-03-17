import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {QuestionsDatabaseComponent} from './components/questions-database/questions-database.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'quiz/:id', component: QuizComponent},
  {path: 'addQuestion', component: QuestionsDatabaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
