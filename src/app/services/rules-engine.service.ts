import { Injectable } from '@angular/core';
import { Engine } from 'json-rules-engine';
import { RestaurantsService } from './restaurants.service';

@Injectable({
  providedIn: 'root'
})
export class RulesEngineService {
  public engine = new Engine();

  public rules = [{
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'all',
      params: {
        message: 'Jesteś bardzo wymagający/a, oby rezultat był satysfakcjonujący!'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'nothing',
      params: {
        message: 'Nasze propozycje na dzisiaj to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kids',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'wifi',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające wifi to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'cashless',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające płatność kartą to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'vegan',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające opcje wegetariańskie/wegańskie to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'parking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsWifi',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci oraz wifi to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsCashless',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci oraz płatność kartą to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsVegan',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci oraz propozycje wegetariańskie/wegańskie to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci oraz miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'wifiCashless',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające wifi oraz płatność kartą to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'wifiVegan',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające wifi oraz propozycje wegetariańskie/wegańskie to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'wifiParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające wifi oraz miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'cashlessVegan',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające płatność kartą oraz propozycje wegetariańskie/wegańskie to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'cashlessParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające płatność kartą oraz miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'veganParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające miejsce parkingowe oraz propozycje wegetariańskie/wegańskie to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsWifiCashless',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające: dzieci, wifi, płatność kartą to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsWifiVegan',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci, wifi, propozycje wegetariańskie/wegańskie to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsWifiParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci, wifi oraz miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsCashlessVegan',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci, płatność kartą, propozycje wegetariańskie/wegańskie to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsCashlessParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci, płatność kartą, miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsVeganParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci, propozycje wegetariańskie/wegańskie, miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'wifiCashlessVegan',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające wifi, płatność kartą, propozycje wegetariańskie/wegańskie to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'wifiCashlessParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające wifi, płatność kartą, miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'wifiVeganParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające wifi, propozycje wegetariańskie/wegańskie, miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'cashlessVeganParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające płatność kartą, propozycje wegetariańskie/wegańskie, miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsWifiCashlessVegan',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci, wifi, płatność kartą, propozycje wegetariańskie/wegańskie to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsWifiCashlessParking',
      params: {
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci, wifi, płatność kartą, miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsCashlessVeganParking',
      params: {
        // tslint:disable-next-line:max-line-length
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci, płatność kartą, propozycje wegetariańskie/wegańskie, miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Nie'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Tak'
      }]
    },
    event: {
      type: 'kidsWifiVeganParking',
      params: {
        // tslint:disable-next-line:max-line-length
        message: 'Nasze propozycje na dzisiaj, uwzględniające dzieci, wifi, propozycje wegetariańskie/wegańskie, miejsce parkingowe to:'
      }
    }
  },
  {
    conditions: {
      all: [{
        fact: 'parking',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'vegan',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'cashless',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'wifi',
        operator: 'equal',
        value: 'Tak'
      },
      {
        fact: 'kids',
        operator: 'equal',
        value: 'Nie'
      }]
    },
    event: {
      type: 'wifiCashlessVeganParking',
      params: {
        // tslint:disable-next-line:max-line-length
        message: 'Nasze propozycje na dzisiaj, uwzględniające wifi, płatność kartą, propozycje wegetariańskie/wegańskie, miejsce parkingowe to:'
      }
    }
  },
  ];

  constructor(public restaurantsService: RestaurantsService) {
    this.addRulesToEngine();
  }

  addRulesToEngine() {
    this.rules.forEach((rule) => {
      this.engine.addRule(rule);
    });
  }

  runTheEngine(facts) {
    const promise = new Promise((resolve, reject) => {
      this.engine
        .run(facts)
        .then(events => {
          let price;

          switch (facts.price) {
            case '10-20 zł': {
              price = 20;
              break;
            }
            case '20-50 zł': {
              price = 50;
              break;
            }
            case '50-100 zł': {
              price = 100;
              break;
            }
            default: {
              price = 1000;
              break;
            }
          }

          let restaurants = this.restaurantsService.filterByKitchenPriceMeal(facts.kitchen, price, facts.mealType);

          switch (events[0].type) {
            case 'all': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.wifi === 'Tak' &&
                  restaurant.parking === 'Tak' &&
                  restaurant.vegan === 'Tak' &&
                  restaurant.cashless === 'Tak' &&
                  restaurant.kids === 'Tak');
              });
              break;
            }
            case 'nothing': {
              break;
            }
            case 'kids': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.kids === 'Tak');
              });
              break;
            }
            case 'wifi': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.wifi === 'Tak');
              });
              break;
            }
            case 'cashless': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.cashless === 'Tak');
              });
              break;
            }
            case 'vegan': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.vegan === 'Tak');
              });
              break;
            }
            case 'parking': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.parking === 'Tak');
              });
              break;
            }
            case 'kidsWifi': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.wifi === 'Tak' &&
                  restaurant.kids === 'Tak');
              });
              break;
            }
            case 'kidsCashless': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.cashless === 'Tak' &&
                  restaurant.kids === 'Tak');
              });
              break;
            }
            case 'kidsVegan': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.vegan === 'Tak' &&
                  restaurant.kids === 'Tak');
              });
              break;
            }
            case 'kidsParking': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.parking === 'Tak' &&
                  restaurant.kids === 'Tak');
              });
              break;
            }
            case 'wifiCashless': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.wifi === 'Tak' &&
                  restaurant.cashless === 'Tak');
              });
              break;
            }
            case 'wifiVegan': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.wifi === 'Tak' &&
                  restaurant.vegan === 'Tak');
              });
              break;
            }
            case 'wifiParking': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.wifi === 'Tak' &&
                  restaurant.parking === 'Tak');
              });
              break;
            }
            case 'cashlessVegan': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.vegan === 'Tak' &&
                  restaurant.cashless === 'Tak');
              });
              break;
            }
            case 'cashlessParking': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.parking === 'Tak' &&
                  restaurant.cashless === 'Tak');
              });
              break;
            }
            case 'veganParking': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.parking === 'Tak' &&
                  restaurant.vegan === 'Tak');
              });
              break;
            }
            case 'kidsWifiCashless': {
              restaurants = restaurants.filter((restaurant) => {
                return (restaurant.wifi === 'Tak' &&
                  restaurant.cashless === 'Tak' &&
                  restaurant.kids === 'Tak');
              });
              break;
            }
            default: {
              break;
            }
          }
          console.log(restaurants);
          resolve({ events, restaurants });
        });
    });

    return promise;
  }
}
