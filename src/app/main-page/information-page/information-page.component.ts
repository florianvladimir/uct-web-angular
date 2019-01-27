import {Component, OnInit} from '@angular/core';
import {INFOCUP} from '../../text-welcome';
import {RaceDetail} from "../models/race-detail.interface";

@Component({
  selector: 'information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent implements OnInit {


  info = INFOCUP;

  temp: RaceDetail[] = [
    {
      stage: 'Etappe 1',
      stageName: 'Rabeflue',
      distance: 2.7,
      altitude: 280,
      date: new Date(2019, 6, 4).getTime(),
      timeToBeat: '???',
      map: 'https://map.geo.admin.ch/embed.html?lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,KML%7C%7Chttps:%2F%2Fpublic.geo.admin.ch%2FggUK-4rVSa2o0j_aP4mVDQ&layers_visibility=false,false,false,false,true&layers_timestamp=18641231,,,,&E=2615190.74&N=1179493.86&zoom=7',
      description: '<h2></h2>'
    },
    {
      stage: 'Etappe 2',
      stageName: 'Haltenegg',
      distance: 4,
      altitude: 480,
      date: new Date(2019, 6, 5).getTime(),
      timeToBeat: '???',
      map: 'https://map.geo.admin.ch/embed.html?lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,KML%7C%7Chttps:%2F%2Fpublic.geo.admin.ch%2FhnUZTKAIS-Wajwb-god9DQ&layers_visibility=false,false,false,false,true&layers_timestamp=18641231,,,,&E=2617136.77&N=1177022.97&zoom=7',
      description: '<h2></h2><p></p>'
    },
    {
      stage: 'Etappe 3',
      stageName: 'Vesuv',
      distance: 5.1,
      altitude: 560,
      date: new Date(2019, 6, 6).getTime(),
      timeToBeat: '25:00',
      map: 'https://map.geo.admin.ch/embed.html?lang=de&topic=ech&bgLayer=ch.swisstopo.pixelkarte-farbe&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill,KML%7C%7Chttps:%2F%2Fpublic.geo.admin.ch%2FQlpUvDZ1QM602IlIL6eUOA&layers_visibility=false,false,false,false,false,true&layers_timestamp=18641231,,,,,&catalogNodes=457,458,491,510&E=2617192.73&N=1177136.71&zoom=7',
      description: '<h2>Die Königsetappe </h2>' +
        '<p>Alles oder nichts - In der letzten Etappe wird sicher herausstellen wer noch die meisten Kräfte besitzt und ' +
        'bei der längsten und härtesten Etappe mit 5.1km und über 560m Höhenmeter, die letzten Energiereserven auspacken kann.' +
        ' Gleich nach dem Start folgt ein kleiner coupierter Pfad der zuerst in einer angenehmen Steigung durch den Wald geht. ' +
        'Doch aufpassen wer zu früh angreifen will, die letzten Kilometer haben es in sich! Ab da gilt es kämpfen und auf die Zähne beissen. ' +
        'Die Säure in den Beinen wird brennen doch das Leiden wird sich auszahlen, wenn man die letzten Meter vor sich hat und den Aussichtspunk «Vesuv» ' +
        'in Heiligenschwendi erreicht und im Hintergrund die wunderschöne Aussicht mit der imposanten Bergkulisse bestaunen kann.' +
        ' Durch den Jagdstart der Besten der Cupwertung ist für ein spannendes Finale gesorgt! Wer wird Uphill Champion 2019?' +
        ' Mit dem guten Gefühl den Aufstieg geschafft zu haben, fällt der Abstieg deutlich leichter und auch die Beine fühlen sich bestimmt besser an.</p>'
    },

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
