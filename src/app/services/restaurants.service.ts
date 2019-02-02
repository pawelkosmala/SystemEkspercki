import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  public restaurantList = [
    {
      "name": "Udon Noodle Bar",
      "address": "ul. Marszałkowska 85",
      "kitchen": "azjatycka",
      "cashless": "Nie",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Tak",
      "price": "30"
    },
    {
      "name": "Pho Lovers",
      "address": "ul. Tamka 45a",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Nie",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "Pera",
      "address": "ul. Krakowska 248",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad",
        "kolacja"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "60"
    },
    {
      "name": "Pho Ever Yum",
      "address": "ul. Świętokrzyska 34",
      "kitchen": "azjatycka",
      "cashless": "Nie",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "Pani Onigiri",
      "address": "al. Rzeczpospolitej 2A",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "śniadanie",
        "lunch"
      ],
      "parking": "Nie",
      "kids": "Tak",
      "price": "15"
    },
    {
      "name": "Skok na wok",
      "address": "ul. Zawiszy 14",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Tak",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "Mango Vegan Street Food",
      "address": "ul. Dobra 52",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Nie",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "Mao",
      "address": "ul. Marszałkowska 62",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": "lunch",
      "parking": "Tak",
      "kids": "Tak",
      "price": "30"
    },
    {
      "name": "Vietnamka",
      "address": "ul. Poznańska 7",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "Shiso Noodle Bar",
      "address": "pl. Żelaznej Bramy 1",
      "kitchen": "azjatycka",
      "cashless": "Nie",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Nie",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "Bao Bao Pierogi na parze",
      "address": "ul. Josepha Conrada 5",
      "kitchen": "azjatycka",
      "cashless": "Nie",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": "lunch",
      "parking": "Tak",
      "kids": "Tak",
      "price": "15"
    },
    {
      "name": "Pan Bao",
      "address": "ul. Żelazna 58/62",
      "kitchen": "azjatycka",
      "cashless": "Nie",
      "wifi": "Tak",
      "vegan": "Nie",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Nie",
      "price": "20"
    },
    {
      "name": "Don Don",
      "address": "ul. Pańska 59",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Nie",
      "mealType": "lunch",
      "parking": "Tak",
      "kids": "Tak",
      "price": "30"
    },
    {
      "name": "5 składników",
      "address": "ul. Narbutta 85",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Nie",
      "price": "25"
    },
    {
      "name": "Pho Kwadrat",
      "address": "ul. Leszczyńska 3",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "30"
    },
    {
      "name": "Miss Kimchi",
      "address": "ul. Żelazna 58/62",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad",
        "kolacja"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "50"
    },
    {
      "name": "Yatta Ramen",
      "address": "ul. Bartoszewicza 3",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Tak",
      "kids": "Nie",
      "price": "50"
    },
    {
      "name": "RABARBAR",
      "address": "ul. Radna 12",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "śniadanie",
        "lunch"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "30"
    },
    {
      "name": "Reginabar",
      "address": "ul. Koszykowa 1",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "śniadanie",
        "lunch",
        "kolacja"
      ],
      "parking": "Nie",
      "kids": "Tak",
      "price": "30"
    },
    {
      "name": "Powidoki",
      "address": "ul. Wybrzeże Kościuszkowskie 22",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad",
        "kolacja"
      ],
      "parking": "Tak",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "THAISTY",
      "address": "pl. Bankowy 4",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad",
        "kolacja"
      ],
      "parking": "Nie",
      "kids": "Nie",
      "price": "50"
    },
    {
      "name": "Vegan Ramen Shop",
      "address": "ul. Finlandzka 12a",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": "obiad",
      "parking": "Tak",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "The Cool Cat",
      "address": "ul. Solec 38",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "śniadanie",
        "lunch"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "40"
    },
    {
      "name": "Pumpui Thai Food",
      "address": "ul. Dąbrowskiego 15a",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad",
        "kolacja"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "40"
    },
    {
      "name": "Chef Panda",
      "address": "ul. Konstruktorska 10c/u5",
      "kitchen": "azjatycka",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "20"
    },
    {
      "name": "Pyzy Flaki Gorące",
      "address": "ul. Brzeska 29-31",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": "obiad",
      "parking": "Tak",
      "kids": "Tak",
      "price": "20"
    },
    {
      "name": "Le'pię",
      "address": "ul.Topiel 12",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Nie",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "Jaś i Małgosia",
      "address": "al. Jana Pawła II 57",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad",
        "kolacja"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "20"
    },
    {
      "name": "Schabowy",
      "address": "ul. Obrzeźna 1",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": "obiad",
      "parking": "Tak",
      "kids": "Nie",
      "price": "50"
    },
    {
      "name": "Warszawa Wschodnia",
      "address": "ul. Mińska 25",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "obiad",
        "kolacja"
      ],
      "parking": "Tak",
      "kids": "Nie",
      "price": "80"
    },
    {
      "name": "Kongresówka",
      "address": "ul. Krucza 16/22",
      "kitchen": "polska",
      "cashless": "Nie",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Nie",
      "price": "70"
    },
    {
      "name": "Polny Bar Mleczny",
      "address": "ul. Waryńskiego 3a",
      "kitchen": "polska",
      "cashless": "Nie",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": "lunch",
      "parking": "Tak",
      "kids": "Tak",
      "price": "15"
    },
    {
      "name": "Gruby Josek",
      "address": "ul. Elektoralna 24",
      "kitchen": "polska",
      "cashless": "Nie",
      "wifi": "Tak",
      "vegan": "Nie",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Tak",
      "price": "60"
    },
    {
      "name": "Fork Restaurant",
      "address": "ul. Wspólna 35",
      "kitchen": "polska",
      "cashless": "Nie",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Tak",
      "kids": "Nie",
      "price": "60"
    },
    {
      "name": "Polana Smaków",
      "address": "ul. Emilii Plater 14",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": [
        "lunch",
        "obiad",
        "kolacja"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "30"
    },
    {
      "name": "Opasły Tom",
      "address": "ul. Wierzbowa 9",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Nie",
      "mealType": [
        "obiad",
        "kolacja"
      ],
      "parking": "Nie",
      "kids": "Nie",
      "price": "50"
    },
    {
      "name": "Światło",
      "address": "ul. Nowogrodzka 10",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "śniadanie",
        "lunch"
      ],
      "parking": "Tak",
      "kids": "Nie",
      "price": "50"
    },
    {
      "name": "Restauracja Warszawska",
      "address": "pl. Powstańców Warszawy 9",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "obiad",
        "kolacja"
      ],
      "parking": "Tak",
      "kids": "Nie",
      "price": "80"
    },
    {
      "name": "Pasta Brother",
      "address": "ul. Tamka 22/24",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Nie",
      "price": "20"
    },
    {
      "name": "Ferment Praski",
      "address": "pl. Konesera 10a",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": "obiad",
      "parking": "Tak",
      "kids": "Nie",
      "price": "40"
    },
    {
      "name": "Bistro Po Sąsiedzku",
      "address": "ul. Baleya 3",
      "kitchen": "polska",
      "cashless": "Nie",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Nie",
      "price": "20"
    },
    {
      "name": "Sypka Mąka i Masło",
      "address": "ul. Rydygiera 13",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Nie",
      "mealType": "lunch",
      "parking": "Nie",
      "kids": "Nie",
      "price": "30"
    },
    {
      "name": "W Weku",
      "address": "ul. Jana Kazimierza 47",
      "kitchen": "polska",
      "cashless": "Nie",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "śniadanie",
        "lunch"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "30"
    },
    {
      "name": "Bistro Magnat Catergin",
      "address": "ul. Nowolipki 15",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "śniadanie",
        "lunch"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "20"
    },
    {
      "name": "LAS - Lokalna Atrakcja Stolicy",
      "address": "ul. Solec 44",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Nie",
      "mealType": [
        "lunch",
        "obiad",
        "kolacja"
      ],
      "parking": "Nie",
      "kids": "Tak",
      "price": "40"
    },
    {
      "name": "Letnisko",
      "address": "ul. Patriotów 47",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "lunch",
        "obiad"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "60"
    },
    {
      "name": "Restauracja ZONI",
      "address": "pl. Konesera 1",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": [
        "śniadanie",
        "lunch",
        "obiad",
        "kolacja"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "40"
    },
    {
      "name": "Farszem Nadziane",
      "address": "al. Jerozolimska 121/123",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Tak",
      "vegan": "Tak",
      "mealType": "lunch",
      "parking": "Tak",
      "kids": "Tak",
      "price": "15"
    },
    {
      "name": "Future",
      "address": "ul. Pokorna 2",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie",
      "vegan": "Tak",
      "mealType": [
        "śniadanie",
        "lunch"
      ],
      "parking": "Tak",
      "kids": "Tak",
      "price": "40"
    },
    {
      "name": "The Bite",
      "address": "ul. Ledóchowskiej 12",
      "kitchen": "polska",
      "cashless": "Tak",
      "wifi": "Nie ",
      "vegan": "Nie",
      "mealType": [
        "śniadanie",
        "lunch"
      ],
      "parking": "Nie",
      "kids": "Nie",
      "price": "40"
    }
  ]
  
  constructor() { }
}
