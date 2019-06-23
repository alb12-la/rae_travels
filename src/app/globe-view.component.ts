import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Marker } from './shared-classes';
declare var WE: {
  map: any;
  marker: any;
  polygon: any;
  tileLayer: any;
  tileLayerJSON: any;
};

@Component({
  selector: 'app-globe-view',
  templateUrl: './globe-view.component.html',
  styles: []
})
export class GlobeViewComponent implements OnInit, OnChanges {
  @Input() inputMarkers: Marker[];
  earth: any;
  webGL: any;
  activeMarkers: any[] = [];

  constructor() { }

  async ngOnInit() {
  }

  async ngOnChanges(changes: SimpleChanges) {
    // If It's the first change, Make sure globe has been initialized
    if (changes.inputMarkers.firstChange) {
      await this.initialize();
    }

    // Add markers provided by parent
    this.inputMarkers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  async initialize() {
    console.log('Initializing');

    // Earth
    const earth = new WE.map('earth_div');
    this.earth = earth;
    console.log('Earth', this.earth);

    // WEBGL
    this.webGL = WE;
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
    console.log('webGL', this.webGL);


    this.earth.on('click', (e) => {
      console.log('clickEvent', e);
    });
  }


  addMarker(marker: Marker) {
    console.log('Adding', marker);
    const markerObj = this.webGL.marker([marker.latitude, marker.longitude]).addTo(this.earth);
    markerObj.bindPopup(`<b>${marker.title}</b>`);
    this.activeMarkers.push(markerObj);
  }

  active() {
    console.log(this.activeMarkers);
  }

  clearMarkers() {
    this.activeMarkers.forEach(marker => {
      marker.removeFrom(this.earth);
    });
  }
}
