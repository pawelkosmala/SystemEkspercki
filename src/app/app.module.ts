import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SurveyComponent,
    ProgressBarComponent,
    QuestionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
