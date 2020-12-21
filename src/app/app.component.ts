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
  baseRoot = '/rae_travels';

  constructor(
    private restHelperService: RestHelperService,
  ) { }

  // Mock data
  loc1: Marker = new Marker(
    48.684820,
    -123.213830,
    'Cattle Point Lighthouse',
    `${this.baseRoot}/assets/markers/cattle-point-lighthouse-marker.png`,
    [
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/cattle-point-lighthouse-2.jpg`),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/cattle-point-lighthouse.jpg`),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/cattle-point-lighthouse-3.jpg`),
    ],
    `Cattle Point Lighthouse is a lighthouse on the southeastern tip of San Juan Island overlooking
     the Strait of Juan de Fuca where the Haro Straits meet the San Juan Channel, in San Juan County, 
     Washington. The light lies adjacent to the state's Cattle Point Natural Resources Conservation Area
     and, as of 2013, is part of the San Juan Islands National Monument.`,
    'Winter 2018'
  );

  loc2: Marker = new Marker(
    32.752310,
    -117.194640,
    'San Diego, California',
    `${this.baseRoot}/assets/markers/san-diego-marker.png`,
    [
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/san-diego-featured.jpg`),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/san-diego-3.jpg`,
        'The beautiful scenery here makes time stand still.'),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/san-diego-1.jpg`),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/san-diego-2.jpg`, 'Beautiful flamingos.'),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/san-diego-4.jpg`, 'Giant Tortoise older than my parents.'),
    ],
    `California just keeps surprising me with how beautiful it's cities are.
     A weekend in San Diego is all you need to get you feeling like you just came back from a great summer vacation.
     We got to visit the San Diego zoo, which apparently has received numerous
     awards for its exhibits, programs, and reproduction and conservation efforts. `,
    'Summer 2019'
  );



  loc4 = new Marker(
    41.403191, 2.174840,
    'Barcelona, Spain',
    `${this.baseRoot}/assets/markers/barcelona-marker.png`,
    [

      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/barcelona-7.jpg`, 'Pan con Tomate!'),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/barcelona-3.jpg`),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/barcelona-5.jpg`, 'Plaza de España! '),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/barcelona-6.jpg`, 'So much beautiful architecture.'),
    ],
    `Barcelona can be summed up as a week of non-stop eating and walking.
     Within the span of one day we\'d average about 30 miles of walking and about 6 small meals throughout the day.`,
    'Spring 2019',
    `${this.baseRoot}/assets/images/barcelona-featured.jpg`
  );

  loc5 = new Marker(
    36.172501, -115.144508,
    'Las Vegas, Nevada',
    `${this.baseRoot}/assets/markers/vegas-marker.png`,
    [
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/las-vegas-2.jpg`, 'Tryna stay out of the scorching sun. '),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/hoover-dam-1.jpg`, 'What a neat dam.'),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/hoover-dam-2.jpg`, 'Mingling with some desert locals on route 66'),
    ],
    `First time going to vegas as an adult and I gotta say, I now understand the hype around a playground for adults.
    Though a little to decadent for my taste, its fun to see all the kinds entertainment available to someone with a pocket full of cash. 
    We evened out the decadence by taking a tour bus from Vegas to the Grand Canyon`,
    'Summer 2019',
    `${this.baseRoot}/assets/images/las-vegas-1.jpg`
  );


  loc7: Marker = new Marker(
    9.909580,
    -84.054060,
    'San Jose Cost Rica',
    `${this.baseRoot}/assets/markers/costa-rica-marker.png`,
    [
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/costa-rica-1.jpg`),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/costa-rica-2.jpg`),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/costa-rica-3.jpg`),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/costa-rica-4.jpg`, 'MOUTH OF A VOLCANO, how dope is that?'),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/costa-rica-5.jpg`)
    ],
    `If I could summarize Costa Rica in one word, it’d be adventure. 
    In my one month there I hiked volcanos, danced on boats and zip lined 
    through the rain forest. I celebrated the fourth of July with illegal 
    fireworks and taught a bar full of people how to ‘Wobble’. I sang karaoke 
    at the top my lungs while arguing with misplaced Texans and remained 
    completely enamored with the peaceful culture of the Ticas. `,
    'Spring 2012',
    `${this.baseRoot}/assets/images/costa-rica-featured.jpg`
  );

  loc8: Marker = new Marker(
    41.882107,
    -87.622955,
    'Cloud Gate, Chicago',
    `${this.baseRoot}/assets/markers/chicago-marker.png`,
    [],
    `No one ever talks about how beautiful Chicago is at night, especially
     when you’re kayaking down the river and between the breweries. 
    No one ever talks about the art hidden throughout downtown or the
    underground tunnels that lead to some of the best Speakeasies in the country.
    No one ever talks about Chicago’s elaborate park and rec spaces nor the electric
    energy that pulses through the city on perfect spring days as people crowd around
    free outdoor concerts.   They’re keeping Chicago a secret. `,
    'Spring 2014',
    `${this.baseRoot}/assets/images/chicago-featured.jpg`
  );

  loc9: Marker = new Marker(
    13.756331,
    100.501762,
    'Bangkok, Thailand',
    `${this.baseRoot}/assets/markers/bangkok-marker.png`,
    [
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/thailand-1.jpg`),
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/thailand-2.jpg`)
    ],
    `I knew Thailand for a week yet still cannot tell you who she is.
     Cool evenings are spent on rooftops and hot days on crystal beaches.
     You can trek through the jungle on a Tuesday to bathe an elephant and
     still make it back for a series of massages by nightfall. I balanced
     on the head of a small boat just to catch the moonrise over the ocean
     and gambled with the locals during Muay Thai matches.
     A choose your own adventure track like none other.

    Oh, and there were also elephants.`,
    'Winter 2018',
    `${this.baseRoot}/assets/images/thailand-featured.jpg`
  );

  loc10: Marker = new Marker(
    45.512230,
    -122.658722,
    'Portland, Oregon',
    `${this.baseRoot}/assets/markers/portland-marker.png`,
    [
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/portland-1.jpg`)
    ],
    'Portland is the city of dreams',
    '01/20/2019',
    `${this.baseRoot}/assets/images/portland-featured.jpg`
  );

  loc11: Marker = new Marker(
    25.512230,
    -122.658722,
    'Rome, Italy',
    `${this.baseRoot}/assets/markers/portland-marker.png`,
    [
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/portland-1.jpg`)
    ],
    `Trevi Fountain, the Sistine Chapel, the Vatican. I was amazed then
    , nearly then years ago stepping my first foot in Europe, Rome, the past.
    I can only imagine how I’ll feel when I finally go back. Whose history will I be traipsing in? My own?`,
    '01/20/2019',
    `${this.baseRoot}/assets/images/portland-featured.jpg`
  );

  loc12: Marker = new Marker(
    49.512230,
    -122.658722,
    'Capri Island',
    `${this.baseRoot}/assets/markers/portland-marker.png`,
    [
      new Content(ContentType.IMAGE, `${this.baseRoot}/assets/images/portland-1.jpg`)
    ],
    `I left the country for the first time in 2009 and on that trip I visited
     what I still believe is the most beautiful place I’ve ever seen. I told
      myself I’d retire there or even bring someone to share it with. I mean look,
       I even took a great photo with a digital camera from 2009, models
       don’t even photograph this well.`,
    'Summer 2009',
    `${this.baseRoot}/assets/images/portland-featured.jpg`
  );


  ngOnInit() {
    // Prevent `pinch to zoom` on mobile devices;
    document.addEventListener('gesturechange', (event: Event) => {
      event.preventDefault();
    });
    this.placeMarkers();
  }

  placeMarkers() {
    this.markers = [this.loc1, this.loc2, this.loc4, this.loc5, this.loc7, this.loc9];
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
