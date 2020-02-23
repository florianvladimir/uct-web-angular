import {Component, OnInit} from '@angular/core';
import {INFOCUP, PROFIL, ROUTE, STAGES} from '../../text-welcome';
import {ENTRY_CARD, PRICE_CARD} from "../../../assets/text/entry";
import {NewsService} from "../services/news.service";
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let Annotations = require('highcharts/modules/annotations')

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
Annotations(Highcharts);


@Component({
  selector: 'information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.css']
})
export class InformationPageComponent implements OnInit {


  info = INFOCUP;

  route = ROUTE;

  profil = PROFIL;

  temp = STAGES;

  entry = ENTRY_CARD;

  price = PRICE_CARD;

  routeData: any[];

  shortRouteData: any[];


  public options: any = {
    chart: {
      type: 'area',
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      height: 700,
      scrollablePlotArea: {
        minWidth: 600
      }
    },
    title: {
      text: null
    },

    accessibility: {
      description: 'Image description: An annotated line graph illustrates the Niederhorn Berglauf from the start point in Beatenbucht to the finish line at the Niederhorn.'
    },
    credits: {
      enabled: true
    },

    annotations: [{
      labelOptions: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        verticalAlign: 'top',
        y: 15
      },
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 3.8,
          y: 1133
        },
        text: 'Beatenberg'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 7.0,
          y: 1582
        },
        text: 'Vorsass'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 9.9,
          y: 1840
        },
        text: 'Oberburgfeld'
      }]
    }],

    xAxis: {
      labels: {
        format: '{value} km'
      },
      minRange: 1,
      title: {
        text: 'Distanz'
      },
      accessibility: {
        rangeDescription: 'Range: 0 to 11.7km.'
      }
    },

    yAxis: {
      startOnTick: false,
      endOnTick: false,
      maxPadding: 0.35,
      title: {
        text: null
      },
      labels: {
        format: '{value} m'
      }
    },

    tooltip: {
      headerFormat: 'Distance: {point.x:.1f} km<br>',
      pointFormat: '{point.y} m ü M.',
      shared: true
    },

    legend: {
      enabled: false
    },

    series: [
      {
        accessibility: {
          keyboardNavigation: {
            enabled: false
          }
        },
        data: null,
        lineColor: Highcharts.getOptions().colors[1],
        color: Highcharts.getOptions().colors[1],
        fillOpacity: 0.5,
        name: 'Elevation',
        marker: {
          enabled: false
        },
        threshold: null
      }]
  };


  constructor(public newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getFullRoute().subscribe(value => {
      this.routeData = [...value];
      this.shortRouteData = [...this.routeData];
      this.options.series[0].data = this.routeData;
      Highcharts.chart('altitude', this.options);
    });
  }

  setShortRoute(event) {
    if (event.value === "1") {
      this.options.series[0].data = this.routeData;
      Highcharts.chart('altitude', this.options);
    } else if(event.value === "3" ){
      this.options.series[0].data = this.routeData.slice(0, 299);
      Highcharts.chart('altitude', this.options);
    } else {
      // const tempData = [...this.shortRouteData.slice(299)];
      // for (const i of tempData) {
      //   i[0] = i[0]-7;
      // }
      const tempData  = [];
      for (let i of this.routeData.slice(299)) {
        tempData.push([i[0]-7,i[1]]);
      }
      this.options.series[0].data =  tempData;
      this.options.xAxis.accessibility.rangeDescription = "Range: 0 to 4.7km.";
      Highcharts.chart('altitude', this.options);
    }
  }

}
