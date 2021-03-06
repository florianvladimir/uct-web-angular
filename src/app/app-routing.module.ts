import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {StagesComponent} from "./stage-page/stages/stages.component";
import {AllNewsComponent} from "./all-news/all-news.component";
import {ImpressumComponent} from "./impressum/impressum.component";
import { CompetitionRulesComponent, CompetitionRulesDialog } from './competition-rules/competition-rules.component';
import { MainPageModule } from './main-page/main-page.module';

const appRoutes: Routes = [
  {path: 'home', component: MainPageComponent},
  {path: 'stages', component: StagesComponent},
  {path: 'news', component: AllNewsComponent},
  {path: 'competition-rules', redirectTo: '/home?showCopmetitionRules=true'},
  {path: 'impressum', component: ImpressumComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
