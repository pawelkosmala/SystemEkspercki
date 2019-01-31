import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() activeQuestion: any;
  @Input() questionsLength: any;

  public percentProgress: any;

  constructor() {
    
   }

  ngOnInit() {

  }

  ngOnChanges() {
    this.percentProgress = ((this.activeQuestion + 1) * 100) / this.questionsLength;
  }

}
