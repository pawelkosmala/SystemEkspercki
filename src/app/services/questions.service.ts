import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  public questions: Array<any> = [
    {
      question: "Na co masz ochotę?",
      question_group_name: "mealType",
      answers: [
        "Śniadanie",
        "Lunch",
        "Obiad",
        "Kolacja"
      ]
    },
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
      question: "Czy interesuje Cię oferta wegetariańska/wegańska?",
      question_group_name: "vegan",
      answers: [
        "Tak",
        "Nie"
      ]
    },
    {
      question: "Ile planujesz wydać na jedno danie?",
      question_group_name: "price",
      answers: [
        "10-20 zł",
        "20-50 zł",
        "50-100 zł",
        "Więcej"
      ]
    },
    {
      question: "Czy potrzebujesz zapłacić kartą?",
      question_group_name: "cashless",
      answers: [
        "Tak",
        "Nie"
      ]
    },
    {
      question: "Czy restauracja powinna mieć WiFi?",
      question_group_name: "wifi",
      answers: [
        "Tak",
        "Nie"
      ]
    },
    {
      question: "Czy zależy Ci na miejscu parkingowym?",
      question_group_name: "parking",
      answers: [
        "Tak",
        "Nie"
      ]
    },
    {
      question: "Czy planujesz wybrać się z dziećmi?",
      question_group_name: "kids",
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
