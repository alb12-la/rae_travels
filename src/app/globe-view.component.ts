import { Component, ViewChild, OnInit, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Marker, Coordinates, EarthInteractions, CoordinateBoundaries } from './shared-classes';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
})
export class GlobeViewComponent implements OnInit, OnChanges {
  @ViewChild('earth', { static: true }) earthContainer: ElementRef;
  @Input() inputMarkers: Marker[];
  @Output() getCenterEmitter: EventEmitter<EarthInteractions> = new EventEmitter();
  earth: any;
  webGL: any;
  activeMarkers: any[] = [];
  private interactions = new Subject<Event>();

  constructor() { }

  async ngOnInit() {

    this.interactions.pipe(
      debounceTime(500)
    ).subscribe((event) => {
      this.updateCoordinates(event);
    });

    // mousewheel listener
    this.earthContainer.nativeElement.addEventListener('mousewheel', (event: Event) => this.interactions.next(event));

    // // touch device listener
    this.earthContainer.nativeElement.addEventListener('touchend', (event: Event) => this.interactions.next(event));

    // // click listener
    this.earthContainer.nativeElement.addEventListener('click', (event: Event) => this.interactions.next(event));
  }

  async ngOnChanges(changes: SimpleChanges) {
    // If It's the first change, Make sure globe has been initialized
    if (changes.inputMarkers.firstChange) {
      await this.initialize();
    }

    if (this.inputMarkers.length > 0) {
      // Add markers provided by parent
      this.inputMarkers.forEach(marker => {
        this.addMarker(marker);
      });
    } else {
      this.clearMarkers();
    }
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
  }

  updateCoordinates(e: Event) {
    /**
     * Get Earth center
     * @returns Coordinates(Lat, lng)
     * What the cross hairs are pointed at
     */
    const center = this.earth.getCenter();
    const centerCoordinates = new Coordinates(center[0], center[1]);

    /**
     * Get Earth bounds
     * @returns [minLat,minLong],[maxLat,maxLng]
     * If the zoomed out too far, this returns null;
     */
    const mapBounds = this.earth.getBounds();
    let mapCoordinateBoundaries: CoordinateBoundaries;
    if (mapBounds !== null) {
      mapCoordinateBoundaries = new CoordinateBoundaries(mapBounds[0], mapBounds[1], mapBounds[2], mapBounds[3]);
    }

    /**
     * Emit EarthInteractions to parent
     */
    this.getCenterEmitter.emit(
      new EarthInteractions(centerCoordinates, mapCoordinateBoundaries)
    );
  }

  addMarker(marker: Marker) {
    console.log('Adding', marker);
    // iconUrl:string?, width:number?, height:number?)
    const markerObj = this.webGL.marker
      (
        [marker.latitude, marker.longitude],
        marker.icon || '',
        marker.iconWidth || 80,
        marker.iconHeight || 80
      ).addTo(this.earth);
    markerObj.bindPopup(`<b>${marker.title}</b>`);
    this.activeMarkers.push(markerObj);
  }

  clearMarkers() {
    this.activeMarkers.forEach(marker => {
      marker.removeFrom(this.earth);
    });
  }
}
