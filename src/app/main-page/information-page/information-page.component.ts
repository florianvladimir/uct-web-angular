import { Component, OnInit, ViewChild } from '@angular/core';
import { PROFIL, ROUTE } from '../../text-welcome';
import { ENTRY_CARD, PRICE_CARD } from "../../../assets/text/entry";
import { NewsService } from "../services/news.service";
import * as Highcharts from 'highcharts';
import { DataInformationCard } from "../../custom-components/information-card/model/data-information-card.interface";
import { CompetitionRulesComponent } from 'src/app/competition-rules/competition-rules.component';

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



  public info: DataInformationCard;

  route = ROUTE;

  profil = PROFIL;

  entry = ENTRY_CARD;

  price = PRICE_CARD;

  routeElevationData: any[];

  public selectedCourse: string = '1';

  public isReduced: boolean = false;

  categories: any[] = [
    {
      id: 1,
      name: {
        f: 'Seniorinnen Ü40',
        m: 'Senioren Ü40'
      },
      price: {
        normal: 30,
        reduced: 20
      }
    },
    {
      id: 2,
      name: {
        f: 'Frauen',
        m: 'Männer'
      },
      price: {
        normal: 30,
        reduced: 20
      }
    },
    {
      id: 3,
      name: {
        f: 'Juniorinnen U16',
        m: 'Junioren U16'
      },
      price: {
        normal: 20,
        reduced: 20
      }
    },
    {
      id: 4,
      name: {
        f: 'Staffel',
        m: 'Staffel'
      },
      price: {
        normal: 65,
        reduced: 55
      }
    }
  ]

  categoryInfos: any[] = [

    {
      name: 'Hauptlauf',
      course: [{
        name: 'Lang',
        distance: 11.8,
        elevation: 1470,
      }],
      categories: []
    },
    {
      name: 'Kurz',
      course: [{
        name: 'Kurz',
        distance: 4.8,
        elevation: 400
      }],
      categories: []
    },
    {
      name: 'Staffel',
      course: [{
        name: '1. Streke',
        distance: 7,
        elevation: 1070
      },
      {
        name: '2. Streke',
        distance: 4.8,
        elevation: 400
      }],
      categories: []
    }


  ]





  public options: any = {
    chart: {
      type: 'area',
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      height: 500,
      scrollablePlotArea: {
        minWidth: 200
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
    this.categoryInfos
  }

  ngOnInit(): void {
    this.newsService.getRouteElevation().subscribe(value => {
      this.routeElevationData = [...value];
      this.options.series[0].data = this.routeElevationData;
      Highcharts.chart('altitude', this.options);
    });
    this.newsService.getUCT2020().subscribe(value => {
      this.info = value['generalInfo'];
    });
    this.addCategories();
  }
  

  setShortRoute(event) {
    //Reset relay change lable
    if (this.options.annotations.length > 1) {
      this.options.annotations.pop();
    }
    this.selectedCourse = event.value;

    this.options.annotations[0].labels[2].point.x = 9.9;
    // Different Categories: 1-Hauptlauf, 2-Kurz,3-Staffel
    if (event.value === "1") {
      this.options.series[0].data = this.routeElevationData;
      Highcharts.chart('altitude', this.options);
    } else if (event.value === "3") {
      this.setRelayElevation();
    } else {
      this.setShortElevation();
    }
  }

  setShortElevation() {
    const tempData = [];
    for (let i of this.routeElevationData.slice(299)) {
      tempData.push([i[0] - 7, i[1]]);
    }
    this.options.series[0].data = tempData;
    this.options.xAxis.accessibility.rangeDescription = "Range: 0 to 4.7km.";
    this.options.annotations[0].labels[2].point.x = 2.9;
    Highcharts.chart('altitude', this.options);
  }


  setRelayElevation() {
    this.options.series[0].data = this.routeElevationData;
    let newLabel = {
      labelOptions: {
        shape: 'connector',
        align: 'right',
        justify: false,
        crop: true,
        style: {
          fontSize: '1em',
          textOutline: '1px white',
        }
      },
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 7.0,
          y: 1582
        },
        text: 'Wechsel'
      }]
    };
    this.options.annotations.push(newLabel);
    Highcharts.chart('altitude', this.options);
  }

  getCategoryInfos() {
    return this.categoryInfos[parseInt(this.selectedCourse) - 1].course;
  }

  addCategories() {
    // Hauptlauf
    let temp = this.categoryInfos.filter((value) => {
      return value.name === 'Hauptlauf'
    })[0];
    temp.categories.push(this.getCategoryById(1));
    temp.categories.push(this.getCategoryById(2));

    // Kurz
    temp = this.categoryInfos.filter((value) => {
      return value.name === 'Kurz'
    })[0];
    temp.categories.push(this.getCategoryById(2));
    temp.categories.push(this.getCategoryById(3));

    // Staffel
    temp = this.categoryInfos.filter((value) => {
      return value.name === 'Staffel'
    })[0];
    temp.categories.push(this.getCategoryById(4));
  }

  getCategoryById(id) {
    return this.categories.filter((value) => value.id == id)[0];
  }

}
