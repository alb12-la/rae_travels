(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<div id=\"debug-panel\">\n    <!-- Debugging panel -->\n    <!-- <div class=\"card position-fixed\">\n        <div class=\"card-body\">\n            <div class=\"form-group\">\n                <ng-container *ngIf=\"this.currentAddress\">\n                    <label class=\"mt-2\">Address</label>\n                    <h3 class=\"form-text\">\n                        {{this.currentAddress.country}},{{this.currentAddress.city}},{{this.currentAddress.street}}\n                    </h3>\n                </ng-container>\n\n                <ng-container *ngIf=\"this.currentPosition else emptyState\">\n                    <label class=\"mt-2\">Coordinates</label>\n                    <h3 class=\"form-text\">\n                        {{this.currentPosition.latitude}},{{this.currentPosition.longitude}}\n                    </h3>\n                </ng-container>\n                <ng-template #emptyState>\n                    You're too far away! Zoom in closer.\n                </ng-template>\n            </div>\n        </div>\n    </div> -->\n\n\n\n    <!-- Crosshairs -->\n    <div [ngClass]=\"[displayCrosshairs ? '': 'd-none']\">\n        <div class=\"v-line\"></div>\n        <div class=\"h-line\"></div>\n    </div>\n</div>\n\n<div class=\"slide-out-container\">\n    <div id=\"slide-out-controls\" class=\"w-100 d-flex justify-content-center\">\n        <!-- <a class=\"btn btn-primary m-2\" (click)=\"this.placeMarkers()\">News</a>\n        <a class=\"btn btn-secondary m-2\" (click)=\"this.toggleActivities()\">Activities</a> -->\n    </div>\n    <!-- Pop out container-->\n    <div [ngClass]=\"['slide-out overflow-auto ', showActivities ? 'expand':'']\">\n        <div class=\"exit-slide-out font-weight-bold\" (click)=\"toggleActivities()\">x</div>\n        <div *ngIf=\"this.selectedMarker\" class=\"jumbotron\">\n            <h1 class=\"display-4\">{{this.selectedMarker.title}}</h1>\n\n            <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention\n                to\n                featured content or information.</p>\n            <hr class=\"my-4\">\n\n            <div *ngIf=\"this.selectedMarker.associatedContent\">\n                <ng-container *ngFor=\"let content of this.selectedMarker.associatedContent\">\n                    <img [src]=\"content.url\" class=\"rounded w-100 m-2\" alt=\"...\">\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<app-globe-view (selectedMarker)=\"selectMarker($event)\" (getCenterEmitter)=\"this.updateCenterLocation($event)\"\n    [inputMarkers]=\"markers\"></app-globe-view>\n\n</html>\n<router-outlet>\n</router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/globe-view.component.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/globe-view.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #earth id=\"earth_div\"></div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-classes */ "./src/app/shared-classes.ts");
/* harmony import */ var _services_rest_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/rest-helper.service */ "./src/app/services/rest-helper.service.ts");




let AppComponent = class AppComponent {
    constructor(restHelperService) {
        this.restHelperService = restHelperService;
        this.displayCrosshairs = true;
        this.currentPosition = undefined;
        this.currentMapBoundaries = undefined;
        this.showActivities = false;
        this.markers = [];
        this.currentAddress = undefined;
        // Mock data
        this.loc1 = {
            latitude: 48.684820,
            longitude: -123.213830,
            title: 'Cattle Point Lighthouse',
            icon: '../assets/markers/cattle-point-lighthouse-marker.png',
            iconWidth: 100,
            iconHeight: 100
        };
        this.loc2 = {
            latitude: 32.752310,
            longitude: -117.194640,
            title: 'Old Town, San Diego',
            icon: '../assets/markers/san-diego-marker.png',
            iconWidth: 100,
            iconHeight: 100
        };
        this.loc3 = {
            latitude: 35.417440,
            longitude: -113.042250,
            title: 'Copper Cart, Rte 66',
            icon: '../assets/markers/route-66-marker.png',
            iconWidth: 100,
            iconHeight: 100
        };
        this.barcelonaContent1 = {
            type: 'img',
            url: '../assets/images/barcelona1.jpg'
        };
        this.barcelonaContent2 = {
            type: 'img',
            url: '../assets/images/barcelona2.jpg'
        };
        this.loc4 = {
            latitude: 41.403191,
            longitude: 2.174840,
            title: 'Barcelona',
            icon: '../assets/markers/barcelona-marker.png',
            iconWidth: 100,
            iconHeight: 100,
            associatedContent: [this.barcelonaContent1, this.barcelonaContent2]
        };
        this.loc5 = {
            latitude: 36.172501,
            longitude: -115.144508,
            title: 'Hotel California',
            icon: '../assets/markers/vegas-marker.png',
            iconWidth: 100,
            iconHeight: 100
        };
    }
    ngOnInit() {
        // Prevent `pinch to zoom` on mobile devices;
        document.addEventListener('gesturechange', (event) => {
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
    selectMarker(marker) {
        this.selectedMarker = marker;
        this.showActivities = true;
        console.log('updated marker to', marker);
    }
    updateCenterLocation(centerObj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (centerObj.mapCenter) {
                this.currentPosition = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Coordinates"](centerObj.mapCenter.latitude, centerObj.mapCenter.longitude);
                // Get address from service
                // this.currentAddress = await this.restHelperService.getAddressAtCoordinates(this.currentPosition);
            }
            else {
                this.currentPosition = undefined;
            }
            if (centerObj.mapBoundaries) {
                this.currentMapBoundaries = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["CoordinateBoundaries"](centerObj.mapBoundaries.minLatitude, centerObj.mapBoundaries.maxLatitude, centerObj.mapBoundaries.minLongitude, centerObj.mapBoundaries.maxLongitude);
            }
            else {
                this.currentMapBoundaries = undefined;
            }
        });
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_helper_service__WEBPACK_IMPORTED_MODULE_3__["RestHelperService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _globe_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globe-view.component */ "./src/app/globe-view.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _globe_view_component__WEBPACK_IMPORTED_MODULE_6__["GlobeViewComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/globe-view.component.ts":
/*!*****************************************!*\
  !*** ./src/app/globe-view.component.ts ***!
  \*****************************************/
/*! exports provided: GlobeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobeViewComponent", function() { return GlobeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-classes */ "./src/app/shared-classes.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let GlobeViewComponent = class GlobeViewComponent {
    constructor() {
        this.getCenterEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedMarker = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeMarkers = [];
        this.interactions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Debounce UpdateCoordinates to help limit api calls
            this.interactions.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe((event) => {
                this.updateCoordinates(event);
            });
            // mousewheel listener
            this.earthContainer.nativeElement.addEventListener('mousewheel', (event) => this.interactions.next(event));
            // // touch device listener
            this.earthContainer.nativeElement.addEventListener('touchend', (event) => this.interactions.next(event));
            // // click listener
            this.earthContainer.nativeElement.addEventListener('click', (event) => this.interactions.next(event));
        });
    }
    ngOnChanges(changes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // If It's the first change, Make sure globe has been initialized
            if (changes.inputMarkers.firstChange) {
                yield this.initialize();
            }
            // Apply or update markers provided by parents
            if (this.inputMarkers.length > 0) {
                this.inputMarkers.forEach(marker => {
                    this.addMarker(marker);
                });
            }
            else {
                // Input markers list is empty, remove any previously existing markers
                this.clearMarkers();
            }
        });
    }
    initialize() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('Initializing Earth');
            // Earth
            const earth = new WE.map('earth_div');
            this.earth = earth;
            console.log('Earth', this.earth);
            // WEBGL
            this.webGL = WE;
            WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
            console.log('webGL', this.webGL);
        });
    }
    updateCoordinates(e) {
        /**
         * Get Earth center
         * @returns Coordinates(Lat, lng)
         * What the cross hairs are pointed at
         */
        const center = this.earth.getCenter();
        const centerCoordinates = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Coordinates"](center[0], center[1]);
        /**
         * Get Earth bounds
         * @returns [minLat,minLong],[maxLat,maxLng]
         * If the zoomed out too far, this returns null;
         */
        const mapBounds = this.earth.getBounds();
        let mapCoordinateBoundaries;
        if (mapBounds !== null) {
            mapCoordinateBoundaries = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["CoordinateBoundaries"](mapBounds[0], mapBounds[1], mapBounds[2], mapBounds[3]);
        }
        /**
         * Emit EarthInteractions to parent
         */
        this.getCenterEmitter.emit(new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["EarthInteractions"](centerCoordinates, mapCoordinateBoundaries));
    }
    addMarker(marker) {
        console.log('Adding', marker);
        // iconUrl:string?, width:number?, height:number?)
        const markerObj = this.webGL.marker([marker.latitude, marker.longitude], marker.icon || '', marker.iconWidth || 80, marker.iconHeight || 80).addTo(this.earth);
        // HTML inside of marker popup
        // markerObj.bindPopup(`<b>${marker.title}</b>`);
        // Call back function on marker
        markerObj.on('click', (event) => {
            this.selectedMarker.emit(marker);
        });
        // Add to internal list of markers
        this.activeMarkers.push(markerObj);
    }
    clearMarkers() {
        this.activeMarkers.forEach(marker => {
            marker.removeFrom(this.earth);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('earth', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GlobeViewComponent.prototype, "earthContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], GlobeViewComponent.prototype, "inputMarkers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GlobeViewComponent.prototype, "getCenterEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GlobeViewComponent.prototype, "selectedMarker", void 0);
GlobeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-globe-view',
        template: __webpack_require__(/*! raw-loader!./globe-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/globe-view.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GlobeViewComponent);



/***/ }),

/***/ "./src/app/services/rest-helper.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/rest-helper.service.ts ***!
  \*************************************************/
/*! exports provided: RestHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestHelperService", function() { return RestHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-classes */ "./src/app/shared-classes.ts");




let RestHelperService = class RestHelperService {
    constructor(http) {
        this.http = http;
        /**
         * FULL DOCUMENTATION:
         * https://developer.mapquest.com/documentation/geocoding-api/reverse/get/
         */
        this.apiKey = 'a96bRRUWLMGr90r3HGN9c5oVROjJa6lA';
        this.resourceURL = 'http://www.mapquestapi.com/geocoding/v1/reverse';
        // MOCK DATA
        // tslint:disable-next-line:max-line-length
        this.mockResults = `{"info":{"statuscode":0,"copyright":{"text":"© 2019 MapQuest, Inc.","imageUrl":"http://api.mqcdn.com/res/mqlogo.gif","imageAltText":"© 2019 MapQuest, Inc."},"messages":[]},"options":{"maxResults":1,"thumbMaps":true,"ignoreLatLngInput":false},"results":[{"providedLocation":{"latLng":{"lat":43.7696,"lng":11.2558}},"locations":[{"street":"Fontana del Nettuno","adminArea6":"","adminArea6Type":"Neighborhood","adminArea5":"Florence","adminArea5Type":"City","adminArea4":"","adminArea4Type":"County","adminArea3":"Tuscany","adminArea3Type":"State","adminArea1":"IT","adminArea1Type":"Country","postalCode":"50122","geocodeQualityCode":"P1AAA","geocodeQuality":"POINT","dragPoint":false,"sideOfStreet":"N","linkId":"0","unknownInput":"","type":"s","latLng":{"lat":43.769596,"lng":11.255981},"displayLatLng":{"lat":43.769596,"lng":11.255981},"mapUrl":"http://www.mapquestapi.com/staticmap/v5/map?key=pemyzdGTMUoqyLXClEl8XAjGwkFatXmi&type=map&size=225,160&locations=43.7695957,11.2559808|marker-sm-50318A-1&scalebar=true&zoom=15&rand=-1621384462","nearestIntersection":null}]}]}`;
    }
    getAddressAtCoordinates(coordinates) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const builtURL = `${this.resourceURL}?key=${this.apiKey}&location=${coordinates.latitude},${coordinates.longitude}`;
            /**
             * Switch between real / mock results below
             */
            const response = yield this.get(builtURL);
            // const response = JSON.parse(this.mockResults);
            const fistAddress = response.results[0].locations[0];
            // Extract address
            const returnAddress = new _shared_classes__WEBPACK_IMPORTED_MODULE_3__["Address"](fistAddress.street, fistAddress.adminArea3, fistAddress.adminArea1, fistAddress.adminArea5);
            return returnAddress;
        });
    }
    // TODO: Use proper try catch techniques.
    get(getUrl) {
        return new Promise((resolve, reject) => {
            this.http.get(getUrl).subscribe((response) => {
                console.log(response);
                resolve(response);
            }, reject);
        });
    }
};
RestHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RestHelperService);



/***/ }),

/***/ "./src/app/shared-classes.ts":
/*!***********************************!*\
  !*** ./src/app/shared-classes.ts ***!
  \***********************************/
/*! exports provided: Marker, Content, Coordinates, CoordinateBoundaries, EarthInteractions, Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinates", function() { return Coordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateBoundaries", function() { return CoordinateBoundaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthInteractions", function() { return EarthInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
class Marker {
    constructor(latitude, longitude, title, icon, iconWidth, iconHeight, associatedContent) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.title = title;
        this.icon = icon;
        this.iconWidth = iconWidth;
        this.iconHeight = iconHeight;
        this.associatedContent = associatedContent;
    }
}
class Content {
    constructor(type, url) {
        this.type = type;
        this.url = url;
    }
}
class Coordinates {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
class CoordinateBoundaries {
    constructor(minLatitude, maxLatitude, minLongitude, maxLongitude) {
        this.minLatitude = minLatitude;
        this.maxLatitude = maxLatitude;
        this.minLongitude = minLongitude;
        this.maxLongitude = maxLongitude;
    }
}
class EarthInteractions {
    constructor(mapCenter, mapBoundaries) {
        this.mapCenter = mapCenter;
        this.mapBoundaries = mapBoundaries;
    }
}
class Address {
    constructor(street, country, county, city) {
        this.street = street;
        this.country = country;
        this.county = county;
        this.city = city;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alb17/rae_travels/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map