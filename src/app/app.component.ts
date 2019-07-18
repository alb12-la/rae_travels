import { Component, OnInit } from '@angular/core';

import { Marker, EarthInteractions, Coordinates, CoordinateBoundaries, Address } from './shared-classes';
import { RestHelperService } from './services/rest-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayCrosshairs = true;
  currentPosition = undefined;
  currentMapBoundaries = undefined;
  showActivities = false;
  markers: Marker[] = [];
  currentAddress: Address = undefined;

  constructor(
    private restHelperService: RestHelperService,
  ) { }

  // Mock data
  loc1: Marker = {
    latitude: 43.7696,
    longitude: 11.2558,
    title: 'Florence, Italy',
    icon: '../assets/markers/florence-marker.png',
    iconWidth: 80,
    iconHeight: 80
  };

  loc2: Marker = {
    latitude: 9.9281,
    longitude: -84.0907,
    title: 'San José, Costa Rica',
    icon: '../assets/markers/costa-rica-marker.png',
    iconWidth: 80,
    iconHeight: 80
  };

  loc3: Marker = {
    latitude: 47.6062,
    longitude: -122.3321,
    title: 'Seattle, Washington',
    icon: '../assets/markers/seattle-marker.png',
    iconWidth: 80,
    iconHeight: 80
  };

  ngOnInit() {
    // Prevent `pinch to zoom` on mobile devices;
    document.addEventListener('gesturechange', (event: Event) => {
      event.preventDefault();
    });
  }

  placeMarkers() {
    this.markers = [this.loc1, this.loc2, this.loc3];
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

  async updateCenterLocation(centerObj: EarthInteractions) {
    if (centerObj.mapCenter) {
      this.currentPosition = new Coordinates(
        centerObj.mapCenter.latitude,
        centerObj.mapCenter.longitude
      );

      // Get address from service
      this.currentAddress = await this.restHelperService.getAddressAtCoordinates(this.currentPosition);
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
