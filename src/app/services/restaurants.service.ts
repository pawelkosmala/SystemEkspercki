import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  public restaurantList = [
  {
    'name': 'Udon Noodle Bar',
    'address': 'ul. Marszałkowska 85',
    'kitchen': 'azjatycka',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Pho Lovers',
    'address': 'ul. Tamka 45a',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'Pera',
    'address': 'ul. Krakowska 248',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '60'
  },
  {
    'name': 'Pho Ever Yum',
    'address': 'ul. Świętokrzyska 34',
    'kitchen': 'azjatycka',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'Pani Onigiri',
    'address': 'al. Rzeczpospolitej 2A',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '15'
  },
  {
    'name': 'Skok na wok',
    'address': 'ul. Zawiszy 14',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'Mango Vegan Street Food',
    'address': 'ul. Dobra 52',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'Mao',
    'address': 'ul. Marszałkowska 62',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Vietnamka',
    'address': 'ul. Poznańska 7',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'Shiso Noodle Bar',
    'address': 'pl. Żelaznej Bramy 1',
    'kitchen': 'azjatycka',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'Bao Bao Pierogi na parze',
    'address': 'ul. Josepha Conrada 5',
    'kitchen': 'azjatycka',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '15'
  },
  {
    'name': 'Pan Bao',
    'address': 'ul. Żelazna 58/62',
    'kitchen': 'azjatycka',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'Don Don',
    'address': 'ul. Pańska 59',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': '5 składników',
    'address': 'ul. Narbutta 85',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '25'
  },
  {
    'name': 'Pho Kwadrat',
    'address': 'ul. Leszczyńska 3',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Miss Kimchi',
    'address': 'ul. Żelazna 58/62',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '50'
  },
  {
    'name': 'Yatta Ramen',
    'address': 'ul. Bartoszewicza 3',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '50'
  },
  {
    'name': 'RABARBAR',
    'address': 'ul. Radna 12',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Reginabar',
    'address': 'ul. Koszykowa 1',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Powidoki',
    'address': 'ul. Wybrzeże Kościuszkowskie 22',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'THAISTY',
    'address': 'pl. Bankowy 4',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '50'
  },
  {
    'name': 'Vegan Ramen Shop',
    'address': 'ul. Finlandzka 12a',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['obiad'],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'The Cool Cat',
    'address': 'ul. Solec 38',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '40'
  },
  {
    'name': 'Pumpui Thai Food',
    'address': 'ul. Dąbrowskiego 15a',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '40'
  },
  {
    'name': 'Chef Panda',
    'address': 'ul. Konstruktorska 10c/u5',
    'kitchen': 'azjatycka',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': 'Pyzy Flaki Gorące',
    'address': 'ul. Brzeska 29-31',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': ['obiad'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': `Le'pię`,
    'address': 'ul.Topiel 12',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'Jaś i Małgosia',
    'address': 'al. Jana Pawła II 57',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': 'Schabowy',
    'address': 'ul. Obrzeźna 1',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': ['obiad'],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '50'
  },
  {
    'name': 'Warszawa Wschodnia',
    'address': 'ul. Mińska 25',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '80'
  },
  {
    'name': 'Kongresówka',
    'address': 'ul. Krucza 16/22',
    'kitchen': 'polska',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '70'
  },
  {
    'name': 'Polny Bar Mleczny',
    'address': 'ul. Waryńskiego 3a',
    'kitchen': 'polska',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '15'
  },
  {
    'name': 'Gruby Josek',
    'address': 'ul. Elektoralna 24',
    'kitchen': 'polska',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '60'
  },
  {
    'name': 'Fork Restaurant',
    'address': 'ul. Wspólna 35',
    'kitchen': 'polska',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '60'
  },
  {
    'name': 'Polana Smakó',
    'address': 'ul. Emilii Plater 14',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Opasły Tom',
    'address': 'ul. Wierzbowa 9',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Nie',
    'mealType': [
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '50'
  },
  {
    'name': 'Światło',
    'address': 'ul. Nowogrodzka 10',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '50'
  },
  {
    'name': 'Restauracja Warszawska',
    'address': 'pl. Powstańców Warszawy 9',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '80'
  },
  {
    'name': 'Pasta Brother',
    'address': 'ul. Tamka 22/24',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'Ferment Praski',
    'address': 'pl. Konesera 10a',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['obiad'],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '40'
  },
  {
    'name': 'Bistro Po Sąsiedzku',
    'address': 'ul. Baleya 3',
    'kitchen': 'polska',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'Sypka Mąka i Masło',
    'address': 'ul. Rydygiera 13',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'W Weku',
    'address': 'ul. Jana Kazimierza 47',
    'kitchen': 'polska',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Bistro Magnat Catergin',
    'address': 'ul. Nowolipki 15',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': 'LAS - Lokalna Atrakcja Stolicy',
    'address': 'ul. Solec 44',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '40'
  },
  {
    'name': 'Letnisko',
    'address': 'ul. Patriotów 47',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '60'
  },
  {
    'name': 'Restauracja ZONI',
    'address': 'pl. Konesera 1',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '40'
  },
  {
    'name': 'Farszem Nadziane',
    'address': 'al. Jerozolimska 121/123',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '15'
  },
  {
    'name': 'Future',
    'address': 'ul. Pokorna 2',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '40'
  },
  {
    'name': 'The Bite',
    'address': 'ul. Ledóchowskiej 12',
    'kitchen': 'polska',
    'cashless': 'Tak',
    'wifi': 'Nie ',
    'vegan': 'Nie',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '40'
  },
  {
    'name': 'La Mia Italia',
    'address': 'ul. Domaniewska 31',
    'kitchen': 'włoska',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Semolino ristorante',
    'address': 'Woronicza 31',
    'kitchen': 'włoska',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '40'
  },
  {
    'name': 'Sexy Duck',
    'address': 'pl. Konstytucji 3',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': 'Figlia di Papa',
    'address': 'ul. Branickiego 21',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'Reginabar',
    'address': 'ul. Koszykowa 1',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Ciao a Tutti',
    'address': 'al. Niepodległości 217',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'Mąka i Woda\n',
    'address': 'ul. Chmielna 13A',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '50'
  },
  {
    'name': 'Trattoria Rucola',
    'address': 'ul. Miodowa 1',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '80'
  },
  {
    'name': 'L’osteria dei Quattro Piatti',
    'address': 'ul. Stępińska 2',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '70'
  },
  {
    'name': 'Bianco e Verde',
    'address': 'ul. Bobrowiecka 10',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '60'
  },
  {
    'name': 'Le Vele Seafood Pizzeria',
    'address': 'ul. Ludna 1',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': 'Przyjaciele Pizza & Food',
    'address': 'ul. Zamkowa 3',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '60'
  },
  {
    'name': 'Spianatoia Pizza i Wino',
    'address': 'ul. Brylowska 2',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'Pasta Brother',
    'address': 'ul. Tamka 22/24',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '50'
  },
  {
    'name': 'Pazzo Due',
    'address': 'al. Jana Pawła II 26',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch',
      'obiad'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '40'
  },
  {
    'name': 'Pera',
    'address': 'al. Krakowska 248',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': 'Guravio',
    'address': 'ul. Żurawia 18',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'śniadnie',
      'lunch',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': 'Prosciutteria Powiśle',
    'address': 'ul. Solec 85',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Trattoria Bella Vista',
    'address': 'ul. Kaliny Jędrusik 5',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'Tutti Colori',
    'address': 'ul. Burakowska 15',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '50'
  },
  {
    'name': 'Il Peperoncino',
    'address': 'ul. Szaserów 104',
    'kitchen': 'włoska',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '80'
  },
  {
    'name': 'Cantine I’italia',
    'address': 'ul. Puławska 73/75',
    'kitchen': 'włoska',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '70'
  },
  {
    'name': 'L’avanti',
    'address': 'ul. Grzybowska 5',
    'kitchen': 'włoska',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '15'
  },
  {
    'name': 'Pizza di Strada',
    'address': 'ul. Fredry 9',
    'kitchen': 'włoska',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '60'
  },
  {
    'name': 'Altro Locale',
    'address': 'ul. Willowa 9',
    'kitchen': 'włoska',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '60'
  },
  {
    'name': 'Roger that Foods',
    'address': 'ul. Postępu 5',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'Między Bułkami',
    'address': 'al. Jerozolimskie 23',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['lunch'],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '50'
  },
  {
    'name': 'COCO BOWLS',
    'address': 'ul. Górnośląska 16',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': ['śniadanie'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '40'
  },
  {
    'name': 'Buena Vista Social Food',
    'address': 'ul. Koszykowa 63',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': 'Shuk',
    'address': 'ul. Grójecka 107',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'Semo Caffe',
    'address': 'ul. Konstruktorska 9',
    'kitchen': 'inna',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '30'
  },
  {
    'name': 'Pink Lobster',
    'address': 'ul. Żurawia 6/12',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'Bułkę przez Bibułkę',
    'address': 'ul. Puławska 24',
    'kitchen': 'inna',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': ['śniadanie'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '50'
  },
  {
    'name': 'Shipudei Berek',
    'address': 'ul. Jasna 24',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': [
      'śniadanie',
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '80'
  },
  {
    'name': 'The Cool Cat TR',
    'address': 'ul. Śródmieście 8',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '70'
  },
  {
    'name': 'La Catrina',
    'address': 'ul. Francuska 31',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '15'
  },
  {
    'name': 'Supperlardo',
    'address': 'ul. Chmielna 13A',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '60'
  },
  {
    'name': 'FALLA',
    'address': 'ul. Oboźna 9',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '60'
  },
  {
    'name': 'Dos Tacos',
    'address': 'ul. Jasna 22',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'DESEO',
    'address': 'ul. Angorska 27',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': ['kolacja'],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '50'
  },
  {
    'name': 'El Czori',
    'address': 'al. Lotników 1',
    'kitchen': 'inna',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '40'
  },
  {
    'name': 'Być Może',
    'address': 'ul Bagatela 14',
    'kitchen': 'inna',
    'cashless': 'Nie',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': ['śniadnie'],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'KURA',
    'address': 'ul. Nowolipki 15',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '20'
  },
  {
    'name': 'Coffeedesk',
    'address': 'ul Wilcza 42',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '30'
  },
  {
    'name': 'KUMIN',
    'address': 'ul. Belwederska 17',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '20'
  },
  {
    'name': 'Krem',
    'address': 'ul. Śniadeckich 18',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': [
      'śniadanie',
      'lunch'
    ],
    'parking': 'Tak',
    'kids': 'Tak',
    'price': '50'
  },
  {
    'name': 'Wół na Stół',
    'address': 'al. KEN 52',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Tak',
    'price': '80'
  },
  {
    'name': 'Burger Bar',
    'address': 'ul. Puławska 74/80',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Tak',
    'kids': 'Nie',
    'price': '70'
  },
  {
    'name': 'Barn Burger',
    'address': 'ul. Złota 9',
    'kitchen': 'inna',
    'cashless': 'Nie',
    'wifi': 'Tak',
    'vegan': 'Tak',
    'mealType': [
      'lunch',
      'obiad',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '15'
  },
  {
    'name': 'Big Adriano',
    'address': 'ul. Dzieci Warszawy 27a',
    'kitchen': 'inna',
    'cashless': 'Tak',
    'wifi': 'Nie',
    'vegan': 'Nie',
    'mealType': [
      'lunch',
      'kolacja'
    ],
    'parking': 'Nie',
    'kids': 'Nie',
    'price': '60'
  }
];

  constructor() { }

  filterByKitchenPriceMeal(kitchen, price, meal) {
    const result = this.restaurantList.filter((restaurant) => {
      if (restaurant.kitchen === kitchen) {
        for (const i in restaurant.mealType) {
          if (restaurant.mealType[i] === meal) {
            if (restaurant.price < price) {
              return true;
            }
          }
        }
      }

      return false;
    });

    return result;
  }
}
