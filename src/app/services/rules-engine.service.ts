import { Injectable } from '@angular/core';
import { Engine } from 'json-rules-engine';

@Injectable({
  providedIn: 'root'
})
export class RulesEngineService {
  public engine = new Engine();

  public rules = [
    {
      conditions: {
        any: [{
          all: [{
            fact: 'kitchen',
            operator: 'equal',
            value: 'Azjatycka'
          }, {
            fact: 'parking',
            operator: 'equal',
            value: 'Nie'
          }]
        }, {
          all: [{
            fact: 'kitchen',
            operator: 'equal',
            value: 'Włoska'
          }, {
            fact: 'parking',
            operator: 'equal',
            value: 'Nie'
          }]
        }]
      },
      event: {
        type: 'withoutParking',
        params: {
          message: 'No parking for you'
        }
      }
    }
  ]

  constructor() {
    this.addRulesToEngine();
  }

  addRulesToEngine() {
    this.rules.forEach((rule) => {
      this.engine.addRule(rule);
    })
  }

  runTheEngine(facts) {
    let promise = new Promise((resolve, reject) => {
      this.engine
      .run(facts)
      .then(events => { 
        resolve(events);
      })
    })
    
    return promise;
  }
}
