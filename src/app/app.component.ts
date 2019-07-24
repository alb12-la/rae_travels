import { Component, OnInit } from '@angular/core';

import { Marker, EarthInteractions, Coordinates, CoordinateBoundaries, Address, Content } from './shared-classes';
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
  loc1: Marker = {
    latitude: 48.684820,
    longitude: -123.213830,
    title: 'Cattle Point Lighthouse',
    icon: '../assets/markers/cattle-point-lighthouse-marker.png',
    iconWidth: 100,
    iconHeight: 100
  };

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

  barcelonaContent1: Content = {
    type: 'img',
    url: '../assets/images/barcelona1.jpg'
  };

  barcelonaContent2: Content = {
    type: 'img',
    url: '../assets/images/barcelona2.jpg'
  };

  loc4: Marker = {
    latitude: 41.403191,
    longitude: 2.174840,
    title: 'Barcelona',
    icon: '../assets/markers/barcelona-marker.png',
    iconWidth: 100,
    iconHeight: 100,
    associatedContent: [this.barcelonaContent1, this.barcelonaContent2]
  };

  loc5: Marker = {
    latitude: 36.172501,
    longitude: -115.144508,
    title: 'Hotel California',
    icon: '../assets/markers/vegas-marker.png',
    iconWidth: 100,
    iconHeight: 100
  };

  ngOnInit() {
    // Prevent `pinch to zoom` on mobile devices;
    document.addEventListener('gesturechange', (event: Event) => {
      event.preventDefault();
    });
    this.placeMarkers();
  }

  placeMarkers() {
    this.markers = [this.loc1, this.loc2, this.loc3, this.loc4, this.loc5];
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
