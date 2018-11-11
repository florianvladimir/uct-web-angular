import {ContactCardInformation} from './custom-components/contact-card/model/contact-card-text.interface';

export const TEXTWELCOME: DataInformationCard[] = [
  {
    textInformation:
      {
        title: 'Uphill Champion Thun',
        pictureUrl: './assets/stockhorn.jpg',
        pictureAlt: 'Blick Richtung Laufgelände',
        text: 'Weit über der Stadt und dem See thront das Ziel des Uphill Champions Thun Cups:  Der Vesuv. \n Der Weg dorthin ist' +
          '  schwer. Drei harte und steile Strecken warten darauf, bis sich die ersten Läufer des Berglauf-Cups an ihnen die Zähne' +
          '  ausbeissen. Die erste Etappe durch die wunderschöne Cholere-Schlucht ist eine kurze aber intensive Etappe. Bei den' +
          '  zwei anderen Etappen gibt es mehr Höhenmeter und eine «Bergankunft». Oben angekommen wartet auf die Teilnehmer nebst' +
          '  sauren Beinen und einem rasenden Herz eine schöne Aussicht auf die mächtige Bergwelt, die Stadt und den See.'
      },
    buttonInformation: [
      {
        link: '',
        value: 'UCT 2019'
      },
      {
        link: '',
        value: 'zum Team'
      }
    ]
  },
  {
    textInformation:
      {
        title: 'Uphill Champion Thun 2018',
        pictureUrl: './assets/cholere.jpg',
        pictureAlt: 'Ziel auf dem Vesuv',
        text: 'Im Juni 2018 fand die erste Austragung des Uphill Champion Thun statt. Bei wunderschönem Wetter kämpften an 3 ' +
          'verschiedenen Abende circa 50 Teilnehmer um den sagenumworbenen Gesamtsieg. Ihre Gegner waren nicht nur die anderen ' +
          'Teilenehmer und das hochkarätige Starterfeld, sondern auch die taffen und teils sehr steilen Strecken. Der Lauf wurde ' +
          'seinem Namen allemal gerecht. Kim Hadorn und Florian Schneider waren bei diesen Streckenprofielen kaum zu bremsen. ' +
          'Zurecht wurden sie mit dem Adelstitel "Uphill Champion" geehrt. Bei den Junioren setzten sich Dominic Müller und Lea ' +
          'Troxler souverän durch.'
      },
    buttonInformation: [
      {
        link: 'http://www.uphillchampion.ch/',
        value: 'Mehr'
      },
      {
        link: 'https://pictures.uphillchampion.ch/',
        value: 'Fotos'
      }
    ]
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
    buttonInformation: [
      {
        link: 'http://www.baergloufcup.ch/',
        value: 'Mehr'
      }

    ]
  }
];

export const CARDTEAM: ContactCardInformation[] = [
  {
    photoPath: './assets/team/simi.jpg',
    title: 'Simon Dubach',
    subTitle: 'Laufleiter',
    text: 'Versucht die Übersicht zu halten in der Organisation und die motivierte Gruppe zu koordinieren.'
  },
  {
    photoPath: './assets/team/flo.jpg',
    title: 'Florian Moser',
    subTitle: 'Webdesigner',
    text: 'Unser Künstler im Team ist für die Website zuständig und übernimmt die ' +
      'kreativen Aufgaben wie das Logo, Flyer etc. designen.'
  },
  {
    photoPath: './assets/team/riina.jpg',
    title: 'Riina Jordi',
    subTitle: 'Finanzen/Administration',
    text: 'Hat unsere Finanzen im Griff und ist verantwortlich für unsere überlebenswichtigen Sponsoren.'
  },
  {
    photoPath: './assets/team/nici.jpg',
    title: 'Nicolas Müller',
    subTitle: 'Medien/Werbung',
    text: 'Regelt unsere Probleme mit den Behörden und rechtlichen Angelegenheiten. ' +
      'Meistens kaum zu bremsen mit wilden Ideen.'
  },
  {
    photoPath: './assets/team/mara.jpeg',
    title: 'Mara Brügger',
    subTitle: 'Infrastruktur',
    text: 'Unser Mädchen für Alles. Ist für die Infrastruktur des WKZ zuständig ' +
      'und betreut unsere Social-Media Kanäle.'
  },
  {
    photoPath: './assets/team/andri.jpg',
    title: 'Andri Jordi',
    subTitle: 'Streckenchef',
    text: 'Unser Streckenchef kennt jeden Stein und alle Kurven auf dem steilen Weg nach oben.' +
      ' Die Königsetappe führt fast direkt zu seiner Haustür.'
  },
  {
    photoPath: './assets/team/joey.jpg',
    title: 'Joey Hadorn',
    subTitle: 'Joker',
    text: 'Unser Super-Joker im Team mit seinen Kontakten in der Laufszene und Sponsoren.' +
      ' Als einer der schnellsten Läufer' +
      ' der Schweiz setzt er die Richtzeiten auf den drei Strecken. Seine Zeiten gilt es zu schlagen!'
  }
  ];

import {DataInformationCard, TextInformationCard} from './custom-components/information-card/model/data-information-card.interface';
