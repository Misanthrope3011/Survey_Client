import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionsDatabaseComponent} from './components/questions-database/questions-database.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path : '' , redirectTo : '/home' , pathMatch : 'full'},
  {path: 'quiz', component: QuizComponent},
  {path: 'addQuestion', component: QuestionsDatabaseComponent},
  {path: '**', component: QuestionsDatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
