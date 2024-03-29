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

module.exports = "<html>\n\n<div id=\"site-title\" class=\"card bg-transparent border-0 text-white position-absolute\" style=\"pointer-events: none;\">\n    <div class=\"card-body\">\n        <h1 class=\"display-1 cursive-font\">Rae's Travels</h1>\n        <p class=\"card-text\">Interact with the globe! No really, Get out there!</p>\n    </div>\n</div>\n\n<div id=\"debug-panel\">\n    <!-- Debugging panel -->\n    <!-- <div class=\"card position-fixed\">\n        <div class=\"card-body\">\n            <div class=\"form-group\">\n                <ng-container *ngIf=\"this.currentAddress\">\n                    <label class=\"mt-2\">Address</label>\n                    <h3 class=\"form-text\">\n                        {{this.currentAddress.country}},{{this.currentAddress.city}},{{this.currentAddress.street}}\n                    </h3>\n                </ng-container>\n\n                <ng-container *ngIf=\"this.currentPosition else emptyState\">\n                    <label class=\"mt-2\">Coordinates</label>\n                    <h3 class=\"form-text\">\n                        {{this.currentPosition.latitude}},{{this.currentPosition.longitude}}\n                    </h3>\n                </ng-container>\n                <ng-template #emptyState>\n                    You're too far away! Zoom in closer.\n                </ng-template>\n            </div>\n        </div>\n    </div> -->\n\n\n\n    <!-- Crosshairs -->\n    <div [ngClass]=\"[displayCrosshairs ? '': 'd-none']\">\n        <div class=\"v-line\"></div>\n        <div class=\"h-line\"></div>\n    </div>\n</div>\n\n<div class=\"slide-out-container\">\n    <!-- Pop out container-->\n    <div [ngClass]=\"['slide-out overflow-auto ', showActivities ? 'expand':'']\">\n        <!-- exit button -->\n        <div class=\"exit-slide-out font-weight-bold\" (click)=\"toggleActivities()\">x</div>\n        <!-- Detail view -->\n        <app-detail-view *ngIf=\"this.selectedMarker\" [marker]=\"selectedMarker\"></app-detail-view>\n    </div>\n</div>\n\n<app-globe-view (selectedMarker)=\"selectMarker($event)\" (selectedOutside)=\"deSelectMarker()\" [inputMarkers]=\"markers\">\n</app-globe-view>\n\n</html>\n<router-outlet>\n</router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/detail-view/detail-view.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail-view/detail-view.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"marker\" class=\"p-5\">\n  <!-- Title -->\n  <h1 class=\"display-4\">{{marker.title}}</h1>\n\n  <!-- Date -->\n  <p *ngIf=\"marker.date\">{{marker.date}}</p>\n\n  <!-- Description -->\n  <p *ngIf=\"marker.description\" class=\"lead\">{{marker.description}}</p>\n\n  <!-- Featured Image -->\n  <div class=\"container justify-content-center\">\n    <img *ngIf=\"marker.featuredImage\" [src]=\"marker.featuredImage\" class=\"rounded w-100 my-2\" alt=\"...\">\n  </div>\n\n  <!-- Additional content-->\n  <div class=\"container justify-content-center\">\n    <div *ngIf=\"marker.associatedContent\">\n      <ng-container *ngFor=\"let content of marker.associatedContent\">\n\n        <!-- VIEW BASED ON CONTENT -->\n        <ng-container [ngSwitch]=\"content.type\">\n          <!-- IMAGE -->\n          <div *ngSwitchCase=\"ContentType.IMAGE\" class=\"card my-2\">\n            <img [src]=\"content.url\" class=\"card-img-top\" alt=\"...\">\n\n            <div *ngIf=\"content.body\" class=\"card-body\">\n              <p class=\"card-text\">{{content.body}}</p>\n            </div>\n          </div>\n\n          <!-- TEXT / POEM  -->\n          <div *ngSwitchCase=\"ContentType.TEXT\" class=\"card my-5\" style=\"font-style: italic; font-size: 2rem\">\n            <div class=\"card-body display-4\" style=\"font-size: 2rem\">\n              {{content.body}}\n            </div>\n          </div>\n\n        </ng-container>\n        <!-- content text -->\n      </ng-container>\n    </div>\n  </div>\n</div>"

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
        this.displayCrosshairs = false;
        this.currentPosition = undefined;
        this.currentMapBoundaries = undefined;
        this.showActivities = false;
        this.markers = [];
        this.currentAddress = undefined;
        this.baseRoot = '/rae_travels';
        // Mock data
        this.loc1 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](48.684820, -123.213830, 'Cattle Point Lighthouse', `${this.baseRoot}/assets/markers/cattle-point-lighthouse-marker.png`, [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/cattle-point-lighthouse-2.jpg`),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/cattle-point-lighthouse.jpg`),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/cattle-point-lighthouse-3.jpg`),
        ], `Cattle Point Lighthouse is a lighthouse on the southeastern tip of San Juan Island overlooking
     the Strait of Juan de Fuca where the Haro Straits meet the San Juan Channel, in San Juan County, 
     Washington. The light lies adjacent to the state's Cattle Point Natural Resources Conservation Area
     and, as of 2013, is part of the San Juan Islands National Monument.`, 'Winter 2018');
        this.loc2 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](32.752310, -117.194640, 'San Diego, California', `${this.baseRoot}/assets/markers/san-diego-marker.png`, [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/san-diego-featured.jpg`),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/san-diego-3.jpg`, 'The beautiful scenery here makes time stand still.'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/san-diego-1.jpg`),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/san-diego-2.jpg`, 'Beautiful flamingos.'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/san-diego-4.jpg`, 'Giant Tortoise older than my parents.'),
        ], `California just keeps surprising me with how beautiful it's cities are.
     A weekend in San Diego is all you need to get you feeling like you just came back from a great summer vacation.
     We got to visit the San Diego zoo, which apparently has received numerous
     awards for its exhibits, programs, and reproduction and conservation efforts. `, 'Summer 2019');
        this.loc4 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](41.403191, 2.174840, 'Barcelona, Spain', `${this.baseRoot}/assets/markers/barcelona-marker.png`, [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/barcelona-7.jpg`, 'Pan con Tomate!'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/barcelona-3.jpg`),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/barcelona-5.jpg`, 'Plaza de España! '),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/barcelona-6.jpg`, 'So much beautiful architecture.'),
        ], `Barcelona can be summed up as a week of non-stop eating and walking.
     Within the span of one day we\'d average about 30 miles of walking and about 6 small meals throughout the day.`, 'Spring 2019', `${this.baseRoot}/assets/images/barcelona-featured.jpg`);
        this.loc5 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](36.172501, -115.144508, 'Las Vegas, Nevada', `${this.baseRoot}/assets/markers/vegas-marker.png`, [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/las-vegas-2.jpg`, 'Tryna stay out of the scorching sun. '),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/hoover-dam-1.jpg`, 'What a neat dam.'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/hoover-dam-2.jpg`, 'Mingling with some desert locals on route 66'),
        ], `First time going to vegas as an adult and I gotta say, I now understand the hype around a playground for adults.
    Though a little to decadent for my taste, its fun to see all the kinds entertainment available to someone with a pocket full of cash. 
    We evened out the decadence by taking a tour bus from Vegas to the Grand Canyon`, 'Summer 2019', `${this.baseRoot}/assets/images/las-vegas-1.jpg`);
        this.loc7 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](9.909580, -84.054060, 'San Jose Cost Rica', `${this.baseRoot}/assets/markers/costa-rica-marker.png`, [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/costa-rica-1.jpg`),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/costa-rica-2.jpg`),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/costa-rica-3.jpg`),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/costa-rica-4.jpg`, 'MOUTH OF A VOLCANO, how dope is that?'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/costa-rica-5.jpg`)
        ], `If I could summarize Costa Rica in one word, it’d be adventure. 
    In my one month there I hiked volcanos, danced on boats and zip lined 
    through the rain forest. I celebrated the fourth of July with illegal 
    fireworks and taught a bar full of people how to ‘Wobble’. I sang karaoke 
    at the top my lungs while arguing with misplaced Texans and remained 
    completely enamored with the peaceful culture of the Ticas. `, 'Spring 2012', `${this.baseRoot}/assets/images/costa-rica-featured.jpg`);
        this.loc8 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](41.882107, -87.622955, 'Cloud Gate, Chicago', `${this.baseRoot}/assets/markers/chicago-marker.png`, [], `No one ever talks about how beautiful Chicago is at night, especially
     when you’re kayaking down the river and between the breweries. 
    No one ever talks about the art hidden throughout downtown or the
    underground tunnels that lead to some of the best Speakeasies in the country.
    No one ever talks about Chicago’s elaborate park and rec spaces nor the electric
    energy that pulses through the city on perfect spring days as people crowd around
    free outdoor concerts.   They’re keeping Chicago a secret. `, 'Spring 2014', `${this.baseRoot}/assets/images/chicago-featured.jpg`);
        this.loc9 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](13.756331, 100.501762, 'Bangkok, Thailand', `${this.baseRoot}/assets/markers/bangkok-marker.png`, [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/thailand-1.jpg`),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/thailand-2.jpg`)
        ], `I knew Thailand for a week yet still cannot tell you who she is.
     Cool evenings are spent on rooftops and hot days on crystal beaches.
     You can trek through the jungle on a Tuesday to bathe an elephant and
     still make it back for a series of massages by nightfall. I balanced
     on the head of a small boat just to catch the moonrise over the ocean
     and gambled with the locals during Muay Thai matches.
     A choose your own adventure track like none other.

    Oh, and there were also elephants.`, 'Winter 2018', `${this.baseRoot}/assets/images/thailand-featured.jpg`);
        this.loc10 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](45.512230, -122.658722, 'Portland, Oregon', `${this.baseRoot}/assets/markers/portland-marker.png`, [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/portland-1.jpg`)
        ], 'Portland is the city of dreams', '01/20/2019', `${this.baseRoot}/assets/images/portland-featured.jpg`);
        this.loc11 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](25.512230, -122.658722, 'Rome, Italy', `${this.baseRoot}/assets/markers/portland-marker.png`, [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/portland-1.jpg`)
        ], `Trevi Fountain, the Sistine Chapel, the Vatican. I was amazed then
    , nearly then years ago stepping my first foot in Europe, Rome, the past.
    I can only imagine how I’ll feel when I finally go back. Whose history will I be traipsing in? My own?`, '01/20/2019', `${this.baseRoot}/assets/images/portland-featured.jpg`);
        this.loc12 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](49.512230, -122.658722, 'Capri Island', `${this.baseRoot}/assets/markers/portland-marker.png`, [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, `${this.baseRoot}/assets/images/portland-1.jpg`)
        ], `I left the country for the first time in 2009 and on that trip I visited
     what I still believe is the most beautiful place I’ve ever seen. I told
      myself I’d retire there or even bring someone to share it with. I mean look,
       I even took a great photo with a digital camera from 2009, models
       don’t even photograph this well.`, 'Summer 2009', `${this.baseRoot}/assets/images/portland-featured.jpg`);
    }
    ngOnInit() {
        // Prevent `pinch to zoom` on mobile devices;
        document.addEventListener('gesturechange', (event) => {
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
    selectMarker(marker) {
        this.selectedMarker = marker;
        this.showActivities = true;
        console.log('updated marker to', marker);
    }
    deSelectMarker() {
        this.selectedMarker = undefined;
        this.showActivities = false;
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
/* harmony import */ var _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-view/detail-view.component */ "./src/app/detail-view/detail-view.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _globe_view_component__WEBPACK_IMPORTED_MODULE_6__["GlobeViewComponent"],
            _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_7__["DetailViewComponent"]
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

/***/ "./src/app/detail-view/detail-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/detail-view/detail-view.component.ts ***!
  \******************************************************/
/*! exports provided: DetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewComponent", function() { return DetailViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-classes */ "./src/app/shared-classes.ts");



let DetailViewComponent = class DetailViewComponent {
    constructor() {
        this.ContentType = _shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"])
], DetailViewComponent.prototype, "marker", void 0);
DetailViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-view',
        template: __webpack_require__(/*! raw-loader!./detail-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/detail-view/detail-view.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DetailViewComponent);



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
        this.selectedOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
            this.earthContainer.nativeElement.addEventListener('click', (event) => {
                this.selectedOutside.emit(true);
            });
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
            const earth = new WE.map('earth_div', {
                center: [36.057944835, -112.18688965],
                zoom: 3,
                maxAltitude: 15000000
            });
            this.earth = earth;
            console.log('Earth', this.earth);
            // WEBGL
            this.webGL = WE;
            this.webGL.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
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
            // Necessary to determine when user clicks outside of marker
            event.stopPropagation();
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GlobeViewComponent.prototype, "selectedOutside", void 0);
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
/*! exports provided: Marker, ContentType, Content, Coordinates, CoordinateBoundaries, EarthInteractions, Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinates", function() { return Coordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateBoundaries", function() { return CoordinateBoundaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthInteractions", function() { return EarthInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
class Marker {
    constructor(latitude, longitude, title, icon, associatedContent, description, date, featuredImage, iconHeight = 100, iconWidth = 100) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.title = title;
        this.icon = icon;
        this.associatedContent = associatedContent;
        this.description = description;
        this.date = date;
        this.featuredImage = featuredImage;
        this.iconHeight = iconHeight;
        this.iconWidth = iconWidth;
    }
}
var ContentType;
(function (ContentType) {
    ContentType["IMAGE"] = "IMAGE";
    ContentType["TEXT"] = "TEXT";
    ContentType["INSTAGRAM_POST"] = "INSTAGRAM_POST";
})(ContentType || (ContentType = {}));
class Content {
    constructor(type, url, body) {
        this.type = type;
        this.url = url;
        this.body = body;
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

module.exports = __webpack_require__(/*! /Users/alb/git/rae_travels/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map