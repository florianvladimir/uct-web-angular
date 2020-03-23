import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { NewsService } from 'src/app/main-page/services/news.service';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  selectedCourse: string;

  route: any[];
  originalRoute: any[];

  secondLeg: any[];

  map: Mapboxgl.Map;
  style = 'mapbox://styles/florianvladimir/ck82yff7y0hy01iqmykqmiazy';
  // style = 'mapbox://styles/mapbox/streets-v11'
  lng = 7.77190;
  lat = 46.69774;



  constructor(public newsService: NewsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.selectedCourse.firstChange) {
      this.route = [...this.originalRoute];
      this.secondLeg= [];
      if (this.selectedCourse === '2') {
        this.route = this.route.slice(299);

      } else if (this.selectedCourse === '1') {
        // this.route = [...this.originalRoute];
      } else {
        // First Leg
        this.route = this.route.slice(0, 300);
        this.drawSecondLeg();
      }
      this.drawNewRoute('route', this.route);
      this.drawNewRoute('route2', this.secondLeg);
    }
  }
  ngAfterViewInit(): void {


    this.map = new Mapboxgl.Map({
      container: 'my-mapbox-id',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat]
    });

    this.map.on('load', (value) => {
      this.map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': this.route
          }
        }
      });

      this.map.addSource('route2', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': []
          }
        }
      });

      this.map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': 'rgba(255, 105, 59, .7)',
          'line-width': 4
        }
      });
      
      this.map.addLayer({
        'id': 'route2',
        'type': 'line',
        'source': 'route2',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': 'rgba(228, 37, 69, .7)',
          'line-width': 4
        }
      })
    });
    this.map.addControl(new Mapboxgl.FullscreenControl());
  }

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.newsService.getRoute().subscribe((value) => {
      this.route = value;
      this.originalRoute = [...this.route];
      this.secondLeg = [];
    })
  }

  drawNewRoute(name: string, route: any) {
    this.map.getSource(name).setData(
      {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': route
        }
      }
    );
  }

  drawSecondLeg() {
    this.secondLeg = [...this.originalRoute].slice(299);
    this.drawNewRoute('route2', this.secondLeg);
  }

}
