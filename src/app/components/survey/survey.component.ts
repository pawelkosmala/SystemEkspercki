import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';
import { RulesEngineService } from 'src/app/services/rules-engine.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  public questions: Array<any>;
  public activeQuestion: any;
  public userAnswers: any = {
    kitchen: '',
    parking: '',

  };
  public questionsLength: any;
  public result: any = [];

  constructor(public questionsService: QuestionsService,
    public rulesEngineService: RulesEngineService,
    private router: Router) { }

  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
    this.activeQuestion = 0;
    this.questionsLength = this.questions.length;
  }

  nextQuestion(chosenAnswer) {
    this.userAnswers[this.questions[this.activeQuestion].question_group_name] = chosenAnswer;
    this.activeQuestion += 1;

    if (this.activeQuestion >= this.questions.length) {
      this.rulesEngineService.runTheEngine(this.userAnswers).then((events) => {
        for (let i in events) {
          this.result.push(events[i].params.message)
        }
      });
    }
  }
}
