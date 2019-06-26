import { Component, OnInit } from '@angular/core';
import { Marker, EarthInteractions, Coordinates, CoordinateBoundaries } from './shared-classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayCrosshairs = false;

  currentPosition: { latitude: number, longitude: number } = { latitude: 0, longitude: 0 };
  lastUserClick: Coordinates = new Coordinates(100, 2);
  currentMapBoundaries = new CoordinateBoundaries(0, 0, 0, 0);

  markers: Marker[] = [];
  loc1: Marker = {
    latitude: 43.7696,
    longitude: 11.2558,
    title: 'Florence, Italy',
    icon: ''
  };

  loc2: Marker = {
    latitude: 9.9281,
    longitude: -84.0907,
    title: 'San José, Costa Rica',
    icon: ''
  };

  loc3: Marker = {
    latitude: 47.6062,
    longitude: -122.3321,
    title: 'Seattle, Washington',
    icon: ''
  };

  ngOnInit() {
  }

  placeMarkers() {
    this.markers = [this.loc1, this.loc2, this.loc3];
  }

  toggleCrosshairs() {
    this.displayCrosshairs = !this.displayCrosshairs;
  }

  clearMarkers() {
    this.markers = [];
  }

  updateCenterLocation(centerObj: EarthInteractions) {
    this.currentPosition.latitude = centerObj.mapCenter.latitude;
    this.currentPosition.longitude = centerObj.mapCenter.longitude;

    this.lastUserClick.latitude = centerObj.userClick.latitude;
    this.lastUserClick.longitude = centerObj.userClick.longitude;

    this.currentMapBoundaries.maxLatitude = centerObj.mapBoundaries.maxLatitude;
    this.currentMapBoundaries.minLatitude = centerObj.mapBoundaries.minLatitude;
    this.currentMapBoundaries.minLongitude = centerObj.mapBoundaries.minLongitude;
    this.currentMapBoundaries.maxLongitude = centerObj.mapBoundaries.maxLongitude;
  }
}
