export const TEXTWELCOME: DataInformationCard[] = [
  {
    textInformation:
      {
        title: 'Uphill Champion Thun',
        pictureUrl: './assets/IMG2237.jpg',
        pictureAlt: 'Blick Richtung Laufgelände',
        text: 'Weit über der Stadt und dem See thront das Ziel des Uphill Champions Thun Cups: Der Vesuv. Der Weg dorthin ist\n' +
          '  schwer. Drei harte und steile Strecken warten darauf, bis sich die ersten Läufer des Berglauf-Cups an ihnen die Zähne\n' +
          '  ausbeissen. Die erste Etappe durch die wunderschöne Cholere-Schlucht ist eine kurze aber intensive Etappe. Bei den\n' +
          '  zwei anderen Etappen gibt es mehr Höhenmeter und eine «Bergankunft». Oben angekommen wartet auf die Teilnehmer nebst\n' +
          '  sauren Beinen und einem rasenden Herz eine schöne Aussicht auf die mächtige Bergwelt, die Stadt und den See.'
      },
    buttonInformation: null
  },
  {
    textInformation:
      {
        title: 'Bärner Bärgloufcup',
        pictureUrl: 'http://www.baergloufcup.ch/images/logo.svg',
        pictureAlt: 'Logo Bärner Bärgloufcup',
        text: '20 Kilometer nördlich von Thun, rund um die Bundeshauptstadt, findet anfangs August jeweils der Bärner Bärgloufcup\n' +
          '  statt. 5 Etappen, unter anderem auch der Gurten, absolvieren die begeisterten Teilnehmenden.\n' +
          '  Fünf Läufe in fünf Tagen – für einmal nehmen es die Bernerinnen und Berner nicht gemütlich!'
      },
    buttonInformation: {
      link: 'http://www.baergloufcup.ch/',
      value: 'Mehr'
    }
  }
];

import {DataInformationCard, TextInformationCard} from './custom-components/information-card/model/data-information-card.interface';
