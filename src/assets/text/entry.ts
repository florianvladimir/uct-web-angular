import {DataInformationCard} from "../../app/custom-components/information-card/model/data-information-card.interface";

export const PRICE_CARD: DataInformationCard=
  {
    textInformation:
      {
        title: 'Preis',
        pictureUrl: '',
        pictureAlt: '',
        text: ''
      },
    buttonInformation: [

    ]
  };

export const ENTRY_CARD: DataInformationCard=
  {
    textInformation:
      {
        title: 'Anmeldung',
        pictureUrl: '',
        pictureAlt: '',
        text: 'Anmelden kann man sich Online vom \n <strong>1. März bis am 2. Juni.</strong> \n ' +
          'Um die Teilnehmerzahl möglichst gut abschätzen zu können, ist die Onlineanmeldung erwünscht. \n ' +
          'Nachmeldungen am Lauftag bis 30 Minuten vor dem Start sind für einen Zuschlag von 2 Franken möglich. ' +
          'Das Startgeld wird bei der Startnummernausgabe bezahlt.'
      },
    buttonInformation: [
      {
        link: 'http://entry.picoevents.ch/',
        type: 'newPage',
        value: 'Anmelden',
        param: null
      }
    ]
  };
