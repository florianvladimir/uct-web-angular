import {ContactCardInformation} from './custom-components/contact-card/model/contact-card-text.interface';
import {DataInformationCard} from './custom-components/information-card/model/data-information-card.interface';
import {DateCardInformation} from './custom-components/date-card/model/date-card-information.interface';
import {RaceDetail} from "./main-page/models/race-detail.interface";

export const CARDTEAM: ContactCardInformation[] = [
  {
    photoPath: './assets/team/simi.jpg',
    title: 'Simon'
  },
  {
    photoPath: './assets/team/riina.jpg',
    title: 'Riina'
  },
  {
    photoPath: './assets/team/andri.jpg',
    title: 'Andri'
  },
  {
    photoPath: './assets/team/mara.jpeg',
    title: 'Mara'
  },
  {
    photoPath: './assets/team/nici.jpg',
    title: 'Nicolas'
  },
  {
    photoPath: './assets/team/tim.jpg',
    title: 'Tim'
  },
  {
    photoPath: './assets/team/flo.jpg',
    title: 'Florian'
  },
  {
    photoPath: './assets/team/siri.jpg',
    title: 'Siri'
  },
  {
    photoPath: './assets/team/joey.jpg',
    title: 'Joey'
  }
];

export const RACEDATE: DateCardInformation[] = [
  {
    // Month starts with 0
    date: new Date(2019, 5, 19),
    etappe: 'Etappe 1',
    title: ''
  },

  {
    date: new Date(2019, 5, 20),
    etappe: 'Etappe 2',
    title: ''
  },

  {
    date: new Date(2019, 5, 21),
    etappe: 'Etappe 3',
    title: ''
  }
];


export const ROUTE: DataInformationCard = {
  textInformation: {
    text: '',
    title: 'Strecken',
    pictureAlt: '',
    pictureUrl: '',
  },
  buttonInformation: []
};

export const PROFIL: DataInformationCard = {
  textInformation: {
    text: '',
    title: 'Streckenprofil',
    pictureAlt: '',
    pictureUrl: '',
  },
  buttonInformation: []
};

export const MORE_NEWS: DataInformationCard = {
  textInformation: {
    text: null,
    title: 'Alle News',
    pictureAlt: '',
    pictureUrl: '',
  },
  buttonInformation: [{
    link: '/news',
    param: null,
    value: 'Hier kannst du alle News finden',
    type: 'thisPage'
  }]
};

export const ABOUT_US: DataInformationCard = {
  textInformation: {
    text: 'Wir sind ein engagiertes Team von jungen OL-Läufern aus der Region Thun. Von ambitionierten Hobbyläufern bis zum Nationalkaderläufer teilen wir alle die Begeisterung am Laufen. Die Idee zum Uphill Champion ist uns während einem gemeinsamen Training gekommen und hat sich auch während und nach den Trainings weiterentwickelt. Im Winter 2018 folgten aus unseren Ideen Taten. Wir bildeten ein siebenköpfiges Organisationsteam welches mit viel Enthusiasmus und Motivation dieses Projekt umsetzte. So fand im Juni 2018 die erste Austragung statt. Von Hünibach aus fanden an drei Abenden drei Läufe statt. Ein Jahr später gab es mit neuen Strecken die zweite Austragung des Berglauf-Cups. \n' +
      'Wir organisieren den Anlass jeweils in einem einfachen und familiären Rahmen. Durch unsere Freude und Leidenschaft am Laufen wollen wir für ein tolles Lauferlebnis sorgen. Neben der physischen Herausforderung sollen auch der Spass und das Knüpfen und Pflegen von Bekanntschaften neben den Läufen nicht zu kurz kommen.\n',
    title: 'Über uns',
    pictureUrl: '',
    pictureAlt: ''
  },
  buttonInformation: []
};

