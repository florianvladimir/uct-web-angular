import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataInformationCard} from "../../custom-components/information-card/model/data-information-card.interface";

@Injectable()
export class NewsService  {

  constructor(private http: HttpClient) { }

  getNews(): Observable<DataInformationCard[]> {
    return this.http.get<DataInformationCard[]>('assets/data/news.json');
  }

  getFullRoute(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/niederhorn-full-route.json');
  }
}
