import {Component, OnInit} from '@angular/core';
import {RACEDATE} from '../../text-welcome';
import {DataInformationCard} from "../../custom-components/information-card/model/data-information-card.interface";

@Component({
  selector: 'information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent implements OnInit {


  info: DataInformationCard = {
    textInformation:
      {
      text: 'Auch 2019 findet der Uphill Champion Thun statt.\n In der ersten Juniwoche vom <strong>4. Juni - 6. Juni</strong> suchen wir den zweiten Uphill Champion.<br>\r\n' +
        '    Können die beiden Vorjahressieger Kim Hadorn und Florian Schneider auch auf neuem Terrain überzeugen und den Titel erfolgreich verteidigen?\n <br>' +
        '      Fakt ist: Uphill Champion Thun 2019 wird auf keinen Fall weniger hart als die erste Ausgabe. \n \n Mehr Informationen folgen...',
      title: 'Uphill Champion Thun 2019',
      pictureUrl: '',
      pictureAlt: ''
    },
    buttonInformation: [
      {
        link: 'http://2018.uphillchampion.ch/',
        value: 'Uphill Champion 2018',
        type: 'newPage'
      },
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
