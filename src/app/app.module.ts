import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import localeDECH from '@angular/common/locales/de-CH';
import {CommonModule, registerLocaleData} from '@angular/common';
import {MainPageModule} from "./main-page/main-page.module";
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatButtonModule, MatMenuModule, MatToolbarModule, MatDialogModule} from "@angular/material";
import {ReloadHomeService} from "./main-page/services/reload-home.service";
import {StagePageModule} from "./stage-page/stage-page.module";
import {IdScrollService} from "./custom-components/id-scroll.service";
import {CustomComponentsModule} from "./custom-components/custom-components.module";
import {AllNewsComponent} from './all-news/all-news.component';
import {DeviceDetectorModule} from "ngx-device-detector";
import {ImpressumComponent} from './impressum/impressum.component';
import {MatCardModule} from "@angular/material/card";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";

registerLocaleData(localeDECH);


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AllNewsComponent,
    ImpressumComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    CustomComponentsModule,
    MainPageModule,
    StagePageModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    DeviceDetectorModule.forRoot(),
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de-CH'}, ReloadHomeService, IdScrollService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
