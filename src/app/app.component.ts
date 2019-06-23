import { Component, OnInit } from '@angular/core';
import { Marker } from './shared-classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  markers: Marker[] = [];

  ngOnInit() {
    const loc1: Marker = {
      latitude: 43.7696,
      longitude: 11.2558,
      title: 'Florence, Italy',
      icon: ''
    };

    const loc2: Marker = {
      latitude: 9.9281,
      longitude: -84.0907,
      title: 'San José, Costa Rica',
      icon: ''
    };

    const loc3: Marker = {
      latitude: 47.6062,
      longitude: -122.3321,
      title: 'Seattle, Washington',
      icon: ''
    };

    this.markers = [loc1, loc2, loc3]
  }

}
