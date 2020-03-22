import {RaceDetail} from "../../app/main-page/models/race-detail.interface";

export const STAGES: RaceDetail[] = [
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
