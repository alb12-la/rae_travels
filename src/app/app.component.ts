import { Component, OnInit } from '@angular/core';

import { Marker, EarthInteractions, Coordinates, CoordinateBoundaries, Address, Content, ContentType } from './shared-classes';
import { RestHelperService } from './services/rest-helper.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayCrosshairs = false;
  currentPosition = undefined;
  currentMapBoundaries = undefined;
  showActivities = false;
  markers: Marker[] = [];
  currentAddress: Address = undefined;
  selectedMarker: Marker;

  constructor(
    private restHelperService: RestHelperService,
  ) { }

  // Mock data
  loc1: Marker = new Marker(
    48.684820,
    -123.213830,
    'Cattle Point Lighthouse',
    '../assets/markers/cattle-point-lighthouse-marker.png',
    [new Content(ContentType.TEXT, null, 'This is a poem')],
  );

  loc2: Marker = {
    latitude: 32.752310,
    longitude: -117.194640,
    title: 'Old Town, San Diego',
    icon: '../assets/markers/san-diego-marker.png',
    iconWidth: 100,
    iconHeight: 100
  };

  loc3: Marker = {
    latitude: 35.417440,
    longitude: -113.042250,
    title: 'Copper Cart, Rte 66',
    icon: '../assets/markers/route-66-marker.png',
    iconWidth: 100,
    iconHeight: 100
  };

  loc4 = new Marker(
    41.403191, 2.174840,
    'Barcelona',
    '../assets/markers/barcelona-marker.png',
    [
      new Content(ContentType.IMAGE, '../assets/images/barcelona2.jpg'),
      new Content(ContentType.TEXT, null, 'Beautiful time in Barcelona')
    ],
    'Barcelona is an amazing place',
    '10/20/08',
    '../assets/images/barcelona-featured.jpg'
  );

  loc5: Marker = {
    latitude: 36.172501,
    longitude: -115.144508,
    title: 'Hotel California',
    icon: '../assets/markers/vegas-marker.png',
    iconWidth: 100,
    iconHeight: 100
  };

  loc6: Marker = new Marker(
    52.370216,
    4.895168,
    'Amsterdam',
    '../assets/markers/amsterdam-marker.png',
    [],
    'Amsterdam is the city of dreams',
    '01/20/2019',
    '../assets/images/amsterdam-featured.jpg'
  );

  loc7: Marker = new Marker(
    9.909580,
    -84.054060,
    'San Jose Cost Rica',
    '../assets/markers/costa-rica-marker.png',
    [],
    'Costa Rica is the city of dreams',
    '01/20/2019',
    '../assets/images/costa-rica-featured.jpg'
  );

  loc8: Marker = new Marker(
    41.882107,
    -87.622955,
    'Cloud Gate, Chicago',
    '../assets/markers/chicago-marker.png',
    [],
    'Chicago is the city of dreams',
    '01/20/2019',
    '../assets/images/chicago-featured.jpg'
  );

  loc9: Marker = new Marker(
    13.756331,
    100.501762,
    'Bangkok, Thailand',
    '../assets/markers/bangkok-marker.png',
    [
      new Content(ContentType.IMAGE, '../assets/images/thailand-1.jpg'),
      new Content(ContentType.IMAGE, '../assets/images/thailand-2.jpg')
    ],
    'Bangkok is the city of dreams',
    '01/20/2019',
    '../assets/images/thailand-featured.jpg'
  );

  loc10: Marker = new Marker(
    45.512230,
    -122.658722,
    'Portland, Oregon',
    '../assets/markers/portland-marker.png',
    [
      new Content(ContentType.IMAGE, '../assets/images/portland-1.jpg')
    ],
    'Portland is the city of dreams',
    '01/20/2019',
    '../assets/images/portland-featured.jpg'
  );


  ngOnInit() {
    // Prevent `pinch to zoom` on mobile devices;
    document.addEventListener('gesturechange', (event: Event) => {
      event.preventDefault();
    });
    this.placeMarkers();
  }

  placeMarkers() {
    this.markers = [this.loc1, this.loc2, this.loc3, this.loc4, this.loc5, this.loc6, this.loc7, this.loc8, this.loc9, this.loc10];
  }

  toggleActivities() {
    this.showActivities = !this.showActivities;
  }

  toggleCrosshairs() {
    this.displayCrosshairs = !this.displayCrosshairs;
  }

  clearMarkers() {
    this.markers = [];
  }

  selectMarker(marker: Marker) {
    this.selectedMarker = marker;
    this.showActivities = true;

    console.log('updated marker to', marker);
  }

  deSelectMarker() {
    this.selectedMarker = undefined;
    this.showActivities = false;
  }

  async updateCenterLocation(centerObj: EarthInteractions) {
    if (centerObj.mapCenter) {
      this.currentPosition = new Coordinates(
        centerObj.mapCenter.latitude,
        centerObj.mapCenter.longitude
      );

      // Get address from service
      // this.currentAddress = await this.restHelperService.getAddressAtCoordinates(this.currentPosition);
    } else {
      this.currentPosition = undefined;
    }

    if (centerObj.mapBoundaries) {
      this.currentMapBoundaries = new CoordinateBoundaries(
        centerObj.mapBoundaries.minLatitude,
        centerObj.mapBoundaries.maxLatitude,
        centerObj.mapBoundaries.minLongitude,
        centerObj.mapBoundaries.maxLongitude);
    } else {
      this.currentMapBoundaries = undefined;
    }
  }
}
