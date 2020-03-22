import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataInformationCard} from "../../custom-components/information-card/model/data-information-card.interface";
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable()
export class NewsService  {

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  getNews(): Observable<any[]> {
    return this.db.list('news').valueChanges();
  }

  getFullRoute(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/niederhorn-full-route.json');
  }

  getUCT2020() {
    return this.http.get('assets/data/uct2020.json')
  }
}
