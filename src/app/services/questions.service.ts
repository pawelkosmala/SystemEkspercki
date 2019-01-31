import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  public questions: Array<any> = [
    {
      question: "Jaki typ kuchni preferujesz?",
      question_group_name: "kitchen",
      answers: [
        "Włoska",
        "Azjatycka",
        "Polska",
        "Inna"
      ]
    },
    {
      question: "Czy zależy Ci na miejscu parkingowym?",
      question_group_name: "parking",
      answers: [
        "Tak",
        "Nie"
      ]
    }
  ]

  constructor() {}

  getQuestions() {
    return this.questions;
  }
}
