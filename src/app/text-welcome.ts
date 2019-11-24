import {ContactCardInformation} from './custom-components/contact-card/model/contact-card-text.interface';
import {DataInformationCard} from './custom-components/information-card/model/data-information-card.interface';
import {DateCardInformation} from './custom-components/date-card/model/date-card-information.interface';
import {RaceDetail} from "./main-page/models/race-detail.interface";

export const TEXTWELCOME: DataInformationCard[] = [
  {
    textInformation:
      {
        title: 'UCT 2019 - E2: Haltenegg',
        pictureUrl: './assets/haltenegg/IMG_E2.JPG',
        pictureAlt: 'Blick Richtung Laufgelände',
        text: 'Auch dieses Jahr führte der Uphill Champion wieder auf die Haltenegg. Gleiches Ziel aber eine total andere Strecke. ' +
          'Wie es den Teilnehmenden bei der zweiten UCT-Etappe gelaufen ist, kannst du in den Resultaten nachlesen!\n '
      },
    buttonInformation: [
      {
        link: './assets/files/UPHILL2019E2_Results.pdf',
        value: 'Resultate E2',
        type: 'newPage'
      }
    ]
  },
  {
    textInformation:
      {
        title: 'UCT 2019 - E1: Rabeflueh',
        pictureUrl: './assets/rabeflue/IMG_20190604_193526.jpg',
        pictureAlt: 'Blick Richtung Laufgelände',
        text: 'Der Berglaufcup ist auf der Rabenflueh angekommen! \n \n Über 30 Läuferinnen und Läufer absolvierten die wunderschöne und anspruchsvolle 2.7 Kilometer lange Strecke. ' +
          'Oben angekommen, konnten sie die Aussicht auf die kanpp 300m tiefer gelegene Stadt Thun und die Umgebung geniessen. \n \n  Trotz des warmen Wetters wurden sehr schnelle Zeiten gelaufen. ' +
          'Das UCT-OK gratuliert allen Teilnehmenden\n '
      },
    buttonInformation: [
            {
        link: './assets/files/UPHILL2019E1_Results.pdf',
        value: 'Resultate E1',
        type: 'newPage'
      }
    ]
  },
  {
    textInformation:
      {
        title: 'Uphill Champion Thun',
        pictureUrl: './assets/stockhorn.jpg',
        pictureAlt: 'Blick Richtung Laufgelände',
        text: 'Weit über der Stadt und dem See thront das Ziel des Uphill Champions Thun Cups:\n  Der Vesuv.\n \n Der Weg dorthin ist' +
          '  schwer. Drei harte und steile Strecken warten darauf, bis sich die Läuferinnen und Läufer des Berglauf-Cups an ihnen die Zähne' +
          '  ausbeissen. Die erste Etappe auf die Rabeflue ist eine eher kurze aber trotzdem intensive Etappe. Bei den' +
          '  zwei anderen Etappen gibt es mehr Höhenmeter und eine «Bergankunft». Oben angekommen wartet auf die Teilnehmer nebst' +
          '  sauren Beinen und einem rasenden Herz eine schöne Aussicht auf die mächtige Bergwelt, die Stadt und den See.'
      },
    buttonInformation: [
      {
        link:  'btn1',
        value: 'UCT 2019',
        type: 'scrollTo'
      },
      {
        link: 'http://entry.picoevents.ch/',
        type: 'newPage',
        value: 'Anmelden'
      },
      {
        link: './assets/files/Weisungen_UCT_2019.pdf',
        value: 'Weisungen',
        type: 'newPage'
      }
    ]
  },
  {
    textInformation:
      {
        title: 'Uphill Champion Thun 2018',
        pictureUrl: './assets/IMG_3341.JPG',
        pictureAlt: 'Ziel auf dem Vesuv',
        text: 'Im Juni 2018 fand die erste Austragung des Uphill Champion Thun statt. Bei wunderschönem Wetter kämpften an 3 ' +
          'verschiedenen Abenden circa 50 Teilnehmer um den sagenumworbenen Gesamtsieg. Ihre Gegner waren nicht ' +
          'nur das hochkarätige Starterfeld, sondern auch die taffen und teils sehr steilen Strecken. \n \n Der Lauf wurde ' +
          'seinem Namen allemal gerecht. Kim Hadorn und Florian Schneider waren bei diesen Streckenprofilen kaum zu bremsen. \n ' +
          'Zurecht wurden sie mit dem Adelstitel "Uphill Champion" geehrt. Bei den Junioren setzten sich Dominic Müller und Lea ' +
          'Troxler souverän durch.'
      },
    buttonInformation: [
      {
        link: 'https://2018.uphillchampion.ch',
        value: 'Mehr',
        type: 'newPage'
      },
      {
        link: 'https://pictures.uphillchampion.ch/',
        value: 'Fotos',
        type: 'newPage'
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
        value: 'Mehr',
        type: 'newPage'
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

export const INFOCUP: DataInformationCard = {
  textInformation:
    {
      text: 'Auch 2019 findet der Uphill Champion Thun statt. In der ersten Juniwoche vom <strong>4. Juni - 6. Juni</strong> suchen wir den zweiten Uphill Champion. <br> \r\n' +
        'Der Uphill Champion Thun 2019 ist auf keinen Fall weniger hart als die erste Ausgabe. ' +
        'Mit Einzelstart, Massenstart und Verfolgung bieten wir dieses Jahr auch wieder ein abwechslungsreiches Programm. \n ' +
        'Auf die Läufer und Läuferinnen warten unteranderem zwei neue, wunderschöne aber harte Strecken: \n ' +
        'Neu fällt der Startschuss für den Berglauf-Cup in Steffisburg. Von dort führt die Strecke auf die Rabeflue.' +
        'Bei der zweiten Etappe haben wir die Streckenführung etwas angepasst: Die Teilnehmenden müssen sich nicht mehr vom quasi überhängenden Streckenverlauf fürchten.' +
        '<br><br> Weiterführende Informationen:'
      ,
      title: 'Uphill Champion Thun 2019',
      pictureUrl: '',
      pictureAlt: ''
    },
  buttonInformation: [
    {
      link: './assets/files/Weisungen_UCT_2019.pdf',
      value: 'Weisungen',
      type: 'newPage'
    },
    {
      link: '/stages',
      value: 'Strecken',
      type: 'thisPage'
    }
  ]
};

export const STAGES:  RaceDetail[] = [
  {
    stage: 'Etappe 1',
    stageName: 'Rabeflue',
    distance: 2.7,
    altitude: 280,
    date: new Date(2019, 5, 4).getTime(),
    timeToBeat: '12:02',
    map: 'https://map.geo.admin.ch/embed.html?lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,KML%7C%7Chttps:%2F%2Fpublic.geo.admin.ch%2FggUK-4rVSa2o0j_aP4mVDQ&layers_visibility=false,false,false,false,true&layers_timestamp=18641231,,,,&E=2615190.74&N=1179493.86&zoom=7',
    description: '<h2>Top of Thun</h2>' +
      '<p class="text">Auf die Plätze, fertig, los! Die diesjährige Ausgabe des Uphill Champions wird wieder à la Prolog mit Einzelstart stattfinden.' +
      ' Der erste Abschnitt im Wald ist mit einer leichten Steigung ein angenehmer Einstieg.' +
      ' Doch dieser erste Kilometer bedeutet nur die Ruhe vor dem Sturm, denn dann kommt die Wand!' +
      ' Vergleichbar mit dem Mörderbacken im Langlauf wird in diesem berühmten Aufstieg wohl die Entscheidung dieses Prologs fallen.' +
      ' Doch es sollte nicht die gesamte Energie in diesen Aufstieg gesteckt werden, denn oben angekommen, führt der letzte Abschnitt fast flach bis zum Aussichtspunkt der Rabeflue' +
      ' und der Zielarena der ersten Etappe.\n' +
      '\n' +
      'Die idyllische Zielkulisse auf der Rabeflue bietet für alle wie immer den verdienten Lohn für den steilen Aufstieg und den absolvierten 280 Höhenmetern.\n' +
      '\n' +
      'Runter geht’s dann gemütlicher und ohne Zeitdruck zurück zum WKZ. Dort wartet bereits ein kleines Buffet mit Kuchen und Früchten,' +
      ' um möglichst schnell die Energiereserven für die nächsten zwei Etappen aufzufüllen.</p>',
    images: [
      './assets/rabeflue/IMG_20190119_152233.jpg',
      './assets/rabeflue/IMG-20180321-WA0014.jpg',
      './assets/rabeflue/IMG_20190119_145831.jpg',
      './assets/rabeflue/IMG_20190119_150706.jpg',
      './assets/rabeflue/IMG-20180321-WA0009.jpg',

    ]
  },
  {
    stage: 'Etappe 2',
    stageName: 'Haltenegg',
    distance: 4,
    altitude: 480,
    date: new Date(2019, 5, 5).getTime(),
    timeToBeat: '21:20',
    map: 'https://map.geo.admin.ch/embed.html?lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,KML%7C%7Chttps:%2F%2Fpublic.geo.admin.ch%2FhnUZTKAIS-Wajwb-god9DQ&layers_visibility=false,false,false,false,true&layers_timestamp=18641231,,,,&E=2617136.77&N=1177022.97&zoom=7',
    description: '<h2>Steil ist geil</h2>' +
      '<p class="text">Die diesjährige Ausgabe der berüchtigten Haltenegg-Etappe wurde etwas entschärft.' +
      ' Die Strecke - man nennt sie auch die Streif von Thun - startet im historischen Schlosspark Hünegg.' +
      ' Nach einer Seightseeing-Runde im Park kommt ein erster Steilhang durchs Dorf.' +
      ' Dieser darf nicht zu scharf attakiert werden, denn die 4km lange Strecke hat es in sich.' +
      ' Nach dem sogenannten "Loueli-cheer" im Wald sollte noch genug Energie in den Beinen sein, um die Waldgrenze zu durchbrechen.' +
      ' Nach einer Traverse ("Achtung: Es geht sogar runter!") kommt ein harter Schlussaufstieg auf die Haltenegg. ' +
      'Dort wartet wie immer ein einzigartiges Panorama auf die Läufer und Läuferinnen, welche sich wagemutig den Berg hinauf spurteten. ' +
      'Insgesamt wurden hier 480 Höhenmeter überwunden und wahrscheinlich kann man von hier oben jedem einzelnen Meter einen Gipfel im Panorama zuordnen.' +
      ' Um die Regeneration anzukurbeln wird empfohlen, genussvoll den Abstieg zu Fuss anzutreten. Wem aber die Beine versagen, wird auch ein Shuttle angeboten.</p>',
    images: [
      './assets/haltenegg/IMG_3255.JPG',
      './assets/haltenegg/IMG_3299.JPG',
      './assets/haltenegg/IMG_3274.JPG',
    ]
  },
  {
    stage: 'Etappe 3',
    stageName: 'Vesuv',
    distance: 5.1,
    altitude: 560,
    date: new Date(2019, 5, 6).getTime(),
    timeToBeat: '25:00',
    map: 'https://map.geo.admin.ch/embed.html?lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,KML%7C%7Chttps:%2F%2Fpublic.geo.admin.ch%2FQlpUvDZ1QM602IlIL6eUOA&layers_visibility=false,false,false,false,false,true&layers_timestamp=18641231,,,,,&catalogNodes=457,458,491,510&E=2617192.73&N=1177136.71&zoom=7',
    description: '<h2>Die Königsetappe </h2>' +
      '<p class="text">Alles oder nichts - In der letzten Etappe wird sicher herausstellen wer noch die meisten Kräfte besitzt und ' +
      'bei der längsten und härtesten Etappe mit 5.1km und über 560m Höhenmeter, die letzten Energiereserven auspacken kann.' +
      ' Gleich nach dem Start folgt ein kleiner coupierter Pfad der zuerst in einer angenehmen Steigung durch den Wald geht. ' +
      'Doch aufpassen wer zu früh angreifen will, die letzten Kilometer haben es in sich! Ab da gilt es kämpfen und auf die Zähne beissen. ' +
      'Die Säure in den Beinen wird brennen doch das Leiden wird sich auszahlen, wenn man die letzten Meter vor sich hat und den Aussichtspunk «Vesuv» ' +
      'in Heiligenschwendi erreicht und im Hintergrund die wunderschöne Aussicht mit der imposanten Bergkulisse bestaunen kann.' +
      ' Durch den Jagdstart der Besten der Cupwertung ist für ein spannendes Finale gesorgt! Wer wird Uphill Champion 2019?' +
      ' Mit dem guten Gefühl den Aufstieg geschafft zu haben, fällt der Abstieg deutlich leichter und auch die Beine fühlen sich bestimmt besser an.</p>',
    images: [
      './assets/vesuv/IMG-20180322-WA0001.jpg',
      './assets/vesuv/IMG_3449.JPG',
      './assets/vesuv/IMG-20180324-WA0002.jpg',
    ]
  },

];

