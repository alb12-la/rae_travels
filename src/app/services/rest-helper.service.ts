import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Address, Coordinates } from '../shared-classes';

@Injectable({
  providedIn: 'root'
})
export class RestHelperService {
  apiKey = 'pemyzdGTMUoqyLXClEl8XAjGwkFatXmi';
  resourceURL = 'http://www.mapquestapi.com/geocoding/v1/reverse';

  // MOCK DATA
  // tslint:disable-next-line:max-line-length
  mock = `{"info":{"statuscode":0,"copyright":{"text":"© 2019 MapQuest, Inc.","imageUrl":"http://api.mqcdn.com/res/mqlogo.gif","imageAltText":"© 2019 MapQuest, Inc."},"messages":[]},"options":{"maxResults":1,"thumbMaps":true,"ignoreLatLngInput":false},"results":[{"providedLocation":{"latLng":{"lat":43.7696,"lng":11.2558}},"locations":[{"street":"Fontana del Nettuno","adminArea6":"","adminArea6Type":"Neighborhood","adminArea5":"Florence","adminArea5Type":"City","adminArea4":"","adminArea4Type":"County","adminArea3":"Tuscany","adminArea3Type":"State","adminArea1":"IT","adminArea1Type":"Country","postalCode":"50122","geocodeQualityCode":"P1AAA","geocodeQuality":"POINT","dragPoint":false,"sideOfStreet":"N","linkId":"0","unknownInput":"","type":"s","latLng":{"lat":43.769596,"lng":11.255981},"displayLatLng":{"lat":43.769596,"lng":11.255981},"mapUrl":"http://www.mapquestapi.com/staticmap/v5/map?key=pemyzdGTMUoqyLXClEl8XAjGwkFatXmi&type=map&size=225,160&locations=43.7695957,11.2559808|marker-sm-50318A-1&scalebar=true&zoom=15&rand=-1621384462","nearestIntersection":null}]}]}`

  constructor(
    private http: HttpClient,
  ) { }
  // TODO : Add debouncer to not make too many api calls
  async getAddressAtCoordinates(coordinates: Coordinates): Promise<Address> {
    const builtURL = `${this.resourceURL}?key=${this.apiKey}&location=${coordinates.latitude},${coordinates.longitude}`;
    // *Switch between real / mock results below*
    // const response = await this.get(builtURL);
    const response = JSON.parse(this.mock);
    const fistAddress = response.results[0].locations[0];

    // Extract address
    const returnAddress = new Address(
      fistAddress.street,
      fistAddress.adminArea3,
      fistAddress.adminArea1,
      fistAddress.adminArea5
    );
    console.log(returnAddress);
    return returnAddress;
  }
  // TODO: Use proper try catch techniques.
  get(getUrl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(getUrl).subscribe((response: any) => {
        console.log(response);
        resolve(response);
      }, reject);
    });
  }

}
