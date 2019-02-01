import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question;

  @Output() nextQuestionEmmiter = new EventEmitter<any>();

  public chosenAnswer: any;

  constructor() { }

  ngOnInit() {
  }

  onNextQuestion() {
    this.nextQuestionEmmiter.emit(this.chosenAnswer);
  }
}
