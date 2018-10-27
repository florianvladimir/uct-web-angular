export interface TextInformationCard {
  text: string;
  title: string;
  pictureUrl: string;
  pictureAlt: string;
}

export interface InputButtonInfo {
  link: string;
  value: string;
}

export interface DataInformationCard {
  textInformation: TextInformationCard;
  buttonInformation: InputButtonInfo[];
}
