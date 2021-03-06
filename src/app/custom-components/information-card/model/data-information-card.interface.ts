export interface TextInformationCard {
  text: string;
  title: string;
  pictureUrl: string;
  pictureAlt: string;
}

export interface InputButtonInfo {
  link: any;
  value: string;
  type: string;
  param: any
}

export interface DataInformationCard {
  textInformation: TextInformationCard;
  buttonInformation: InputButtonInfo[];
}
