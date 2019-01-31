import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  public questions: Array<any>;
  public activeQuestion: any;
  public userAnswers: any = [];
  public questionsLength;

  constructor(public questionsService: QuestionsService,
    private router: Router) { }

  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
    this.activeQuestion = 0;
    this.questionsLength = this.questions.length;
  }

  nextQuestion() {
    this.activeQuestion += 1;

    if (this.activeQuestion >= this.questions.length) {
      this.router.navigate(['/result']);
    }
  }
}
