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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-classes */ "./src/app/shared-classes.ts");
/* harmony import */ var _services_rest_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/rest-helper.service */ "./src/app/services/rest-helper.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(restHelperService) {
        this.restHelperService = restHelperService;
        this.displayCrosshairs = false;
        this.currentPosition = undefined;
        this.currentMapBoundaries = undefined;
        this.showActivities = false;
        this.markers = [];
        this.currentAddress = undefined;
        // Mock data
        this.loc1 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](48.684820, -123.213830, 'Cattle Point Lighthouse', '../assets/markers/cattle-point-lighthouse-marker.png', [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/cattle-point-lighthouse-2.jpg'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/cattle-point-lighthouse.jpg'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/cattle-point-lighthouse-3.jpg'),
        ], "Cattle Point Lighthouse\u00A0is a\u00A0lighthouse\u00A0on the southeastern tip of\u00A0San Juan Island\u00A0overlooking\n     the\u00A0Strait of Juan de Fuca\u00A0where the\u00A0Haro Straits\u00A0meet the San Juan Channel, in\u00A0San Juan County,\u00A0\n     Washington. The light lies adjacent to the state's Cattle Point Natural Resources Conservation Area\n     and, as of 2013, is part of the\u00A0San Juan Islands National Monument.", 'Winter 2018');
        this.loc2 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](32.752310, -117.194640, 'San Diego, California', '../assets/markers/san-diego-marker.png', [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/san-diego-featured.jpg'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/san-diego-3.jpg', 'The beautiful scenery here makes time stand still.'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/san-diego-1.jpg'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/san-diego-2.jpg', 'Beautiful flamingos.'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/san-diego-4.jpg', 'Giant Tortoise older than my parents.'),
        ], "California just keeps surprising me with how beautiful it's cities are.\n     A weekend in San Diego is all you need to get you feeling like you just came back from a great summer vacation.\n     We got to visit the San Diego zoo, which apparently has received numerous\n     awards for its exhibits, programs, and reproduction and conservation efforts. ", 'Summer 2019');
        this.loc4 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](41.403191, 2.174840, 'Barcelona, Spain', '../assets/markers/barcelona-marker.png', [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/barcelona-7.jpg', 'Pan con Tomate!'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/barcelona-3.jpg'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/barcelona-5.jpg', 'Plaza de España! '),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/barcelona-6.jpg', 'So much beautiful architecture.'),
        ], "Barcelona can be summed up as a week of non-stop eating and walking.\n     Within the span of one day we'd average about 30 miles of walking and about 6 small meals throughout the day.", 'Spring 2019', '../assets/images/barcelona-featured.jpg');
        this.loc5 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](36.172501, -115.144508, 'Las Vegas, Nevada', '../assets/markers/vegas-marker.png', [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/las-vegas-2.jpg', 'Tryna stay out of the scorching sun. '),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/hoover-dam-1.jpg', 'What a neat dam.'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/hoover-dam-2.jpg', 'Mingling with some desert locals on route 66'),
        ], "First time going to vegas as an adult and I gotta say, I now understand the hype around a playground for adults.\n    Though a little to decadent for my taste, its fun to see all the kinds entertainment available to someone with a pocket full of cash. \n    We evened out the decadence by taking a tour bus from Vegas to the Grand Canyon", 'Summer 2019', '../assets/images/las-vegas-1.jpg');
        this.loc7 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](9.909580, -84.054060, 'San Jose Cost Rica', '../assets/markers/costa-rica-marker.png', [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, 'assets/images/costa-rica-1.jpg'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, 'assets/images/costa-rica-2.jpg'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, 'assets/images/costa-rica-3.jpg'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, 'assets/images/costa-rica-4.jpg', 'MOUTH OF A VOLCANO, how dope is that?'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, 'assets/images/costa-rica-5.jpg')
        ], "If I could summarize Costa Rica in one word, it\u2019d be adventure. \n    In my one month there I hiked volcanos, danced on boats and zip lined \n    through the rain forest. I celebrated the fourth of July with illegal \n    fireworks and taught a bar full of people how to \u2018Wobble\u2019. I sang karaoke \n    at the top my lungs while arguing with misplaced Texans and remained \n    completely enamored with the peaceful culture of the Ticas. ", 'Spring 2012', '../assets/images/costa-rica-featured.jpg');
        this.loc8 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](41.882107, -87.622955, 'Cloud Gate, Chicago', '../assets/markers/chicago-marker.png', [], "No one ever talks about how beautiful Chicago is at night, especially\n     when you\u2019re kayaking down the river and between the breweries. \n    No one ever talks about the art hidden throughout downtown or the\n    underground tunnels that lead to some of the best Speakeasies in the country.\n    No one ever talks about Chicago\u2019s elaborate park and rec spaces nor the electric\n    energy that pulses through the city on perfect spring days as people crowd around\n    free outdoor concerts.   They\u2019re keeping Chicago a secret. ", 'Spring 2014', '../assets/images/chicago-featured.jpg');
        this.loc9 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](13.756331, 100.501762, 'Bangkok, Thailand', '../assets/markers/bangkok-marker.png', [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/thailand-1.jpg'),
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/thailand-2.jpg')
        ], "I knew Thailand for a week yet still cannot tell you who she is.\n     Cool evenings are spent on rooftops and hot days on crystal beaches.\n     You can trek through the jungle on a Tuesday to bathe an elephant and\n     still make it back for a series of massages by nightfall. I balanced\n     on the head of a small boat just to catch the moonrise over the ocean\n     and gambled with the locals during Muay Thai matches.\n     A choose your own adventure track like none other.\n\n    Oh, and there were also elephants.", 'Winter 2018', '../assets/images/thailand-featured.jpg');
        this.loc10 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](45.512230, -122.658722, 'Portland, Oregon', '../assets/markers/portland-marker.png', [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/portland-1.jpg')
        ], 'Portland is the city of dreams', '01/20/2019', '../assets/images/portland-featured.jpg');
        this.loc11 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](25.512230, -122.658722, 'Rome, Italy', '../assets/markers/portland-marker.png', [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/portland-1.jpg')
        ], "Trevi Fountain, the Sistine Chapel, the Vatican. I was amazed then\n    , nearly then years ago stepping my first foot in Europe, Rome, the past.\n    I can only imagine how I\u2019ll feel when I finally go back. Whose history will I be traipsing in? My own?", '01/20/2019', '../assets/images/portland-featured.jpg');
        this.loc12 = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Marker"](49.512230, -122.658722, 'Capri Island', '../assets/markers/portland-marker.png', [
            new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Content"](_shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"].IMAGE, '../assets/images/portland-1.jpg')
        ], "I left the country for the first time in 2009 and on that trip I visited\n     what I still believe is the most beautiful place I\u2019ve ever seen. I told\n      myself I\u2019d retire there or even bring someone to share it with. I mean look,\n       I even took a great photo with a digital camera from 2009, models\n       don\u2019t even photograph this well.", 'Summer 2009', '../assets/images/portland-featured.jpg');
    }
    AppComponent.prototype.ngOnInit = function () {
        // Prevent `pinch to zoom` on mobile devices;
        document.addEventListener('gesturechange', function (event) {
            event.preventDefault();
        });
        this.placeMarkers();
    };
    AppComponent.prototype.placeMarkers = function () {
        this.markers = [this.loc1, this.loc2, this.loc4, this.loc5, this.loc7, this.loc9];
    };
    AppComponent.prototype.toggleActivities = function () {
        this.showActivities = !this.showActivities;
    };
    AppComponent.prototype.toggleCrosshairs = function () {
        this.displayCrosshairs = !this.displayCrosshairs;
    };
    AppComponent.prototype.clearMarkers = function () {
        this.markers = [];
    };
    AppComponent.prototype.selectMarker = function (marker) {
        this.selectedMarker = marker;
        this.showActivities = true;
        console.log('updated marker to', marker);
    };
    AppComponent.prototype.deSelectMarker = function () {
        this.selectedMarker = undefined;
        this.showActivities = false;
    };
    AppComponent.prototype.updateCenterLocation = function (centerObj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                return [2 /*return*/];
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rest_helper_service__WEBPACK_IMPORTED_MODULE_3__["RestHelperService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _globe_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globe-view.component */ "./src/app/globe-view.component.ts");
/* harmony import */ var _detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-view/detail-view.component */ "./src/app/detail-view/detail-view.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-classes */ "./src/app/shared-classes.ts");



var DetailViewComponent = /** @class */ (function () {
    function DetailViewComponent() {
        this.ContentType = _shared_classes__WEBPACK_IMPORTED_MODULE_2__["ContentType"];
    }
    DetailViewComponent.prototype.ngOnInit = function () {
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
    return DetailViewComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-classes */ "./src/app/shared-classes.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var GlobeViewComponent = /** @class */ (function () {
    function GlobeViewComponent() {
        this.getCenterEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedMarker = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeMarkers = [];
        this.interactions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    GlobeViewComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // Debounce UpdateCoordinates to help limit api calls
                this.interactions.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(function (event) {
                    _this.updateCoordinates(event);
                });
                // mousewheel listener
                this.earthContainer.nativeElement.addEventListener('mousewheel', function (event) { return _this.interactions.next(event); });
                // // touch device listener
                this.earthContainer.nativeElement.addEventListener('touchend', function (event) { return _this.interactions.next(event); });
                // // click listener
                this.earthContainer.nativeElement.addEventListener('click', function (event) {
                    _this.selectedOutside.emit(true);
                });
                return [2 /*return*/];
            });
        });
    };
    GlobeViewComponent.prototype.ngOnChanges = function (changes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!changes.inputMarkers.firstChange) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Apply or update markers provided by parents
                        if (this.inputMarkers.length > 0) {
                            this.inputMarkers.forEach(function (marker) {
                                _this.addMarker(marker);
                            });
                        }
                        else {
                            // Input markers list is empty, remove any previously existing markers
                            this.clearMarkers();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GlobeViewComponent.prototype.initialize = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var earth;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('Initializing Earth');
                earth = new WE.map('earth_div', {
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
                return [2 /*return*/];
            });
        });
    };
    GlobeViewComponent.prototype.updateCoordinates = function (e) {
        /**
         * Get Earth center
         * @returns Coordinates(Lat, lng)
         * What the cross hairs are pointed at
         */
        var center = this.earth.getCenter();
        var centerCoordinates = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Coordinates"](center[0], center[1]);
        /**
         * Get Earth bounds
         * @returns [minLat,minLong],[maxLat,maxLng]
         * If the zoomed out too far, this returns null;
         */
        var mapBounds = this.earth.getBounds();
        var mapCoordinateBoundaries;
        if (mapBounds !== null) {
            mapCoordinateBoundaries = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["CoordinateBoundaries"](mapBounds[0], mapBounds[1], mapBounds[2], mapBounds[3]);
        }
        /**
         * Emit EarthInteractions to parent
         */
        this.getCenterEmitter.emit(new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["EarthInteractions"](centerCoordinates, mapCoordinateBoundaries));
    };
    GlobeViewComponent.prototype.addMarker = function (marker) {
        var _this = this;
        console.log('Adding', marker);
        // iconUrl:string?, width:number?, height:number?)
        var markerObj = this.webGL.marker([marker.latitude, marker.longitude], marker.icon || '', marker.iconWidth || 80, marker.iconHeight || 80).addTo(this.earth);
        // HTML inside of marker popup
        // markerObj.bindPopup(`<b>${marker.title}</b>`);
        // Call back function on marker
        markerObj.on('click', function (event) {
            // Necessary to determine when user clicks outside of marker
            event.stopPropagation();
            _this.selectedMarker.emit(marker);
        });
        // Add to internal list of markers
        this.activeMarkers.push(markerObj);
    };
    GlobeViewComponent.prototype.clearMarkers = function () {
        var _this = this;
        this.activeMarkers.forEach(function (marker) {
            marker.removeFrom(_this.earth);
        });
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
    return GlobeViewComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-classes */ "./src/app/shared-classes.ts");




var RestHelperService = /** @class */ (function () {
    function RestHelperService(http) {
        this.http = http;
        /**
         * FULL DOCUMENTATION:
         * https://developer.mapquest.com/documentation/geocoding-api/reverse/get/
         */
        this.apiKey = 'a96bRRUWLMGr90r3HGN9c5oVROjJa6lA';
        this.resourceURL = 'http://www.mapquestapi.com/geocoding/v1/reverse';
        // MOCK DATA
        // tslint:disable-next-line:max-line-length
        this.mockResults = "{\"info\":{\"statuscode\":0,\"copyright\":{\"text\":\"\u00A9 2019 MapQuest, Inc.\",\"imageUrl\":\"http://api.mqcdn.com/res/mqlogo.gif\",\"imageAltText\":\"\u00A9 2019 MapQuest, Inc.\"},\"messages\":[]},\"options\":{\"maxResults\":1,\"thumbMaps\":true,\"ignoreLatLngInput\":false},\"results\":[{\"providedLocation\":{\"latLng\":{\"lat\":43.7696,\"lng\":11.2558}},\"locations\":[{\"street\":\"Fontana del Nettuno\",\"adminArea6\":\"\",\"adminArea6Type\":\"Neighborhood\",\"adminArea5\":\"Florence\",\"adminArea5Type\":\"City\",\"adminArea4\":\"\",\"adminArea4Type\":\"County\",\"adminArea3\":\"Tuscany\",\"adminArea3Type\":\"State\",\"adminArea1\":\"IT\",\"adminArea1Type\":\"Country\",\"postalCode\":\"50122\",\"geocodeQualityCode\":\"P1AAA\",\"geocodeQuality\":\"POINT\",\"dragPoint\":false,\"sideOfStreet\":\"N\",\"linkId\":\"0\",\"unknownInput\":\"\",\"type\":\"s\",\"latLng\":{\"lat\":43.769596,\"lng\":11.255981},\"displayLatLng\":{\"lat\":43.769596,\"lng\":11.255981},\"mapUrl\":\"http://www.mapquestapi.com/staticmap/v5/map?key=pemyzdGTMUoqyLXClEl8XAjGwkFatXmi&type=map&size=225,160&locations=43.7695957,11.2559808|marker-sm-50318A-1&scalebar=true&zoom=15&rand=-1621384462\",\"nearestIntersection\":null}]}]}";
    }
    RestHelperService.prototype.getAddressAtCoordinates = function (coordinates) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var builtURL, response, fistAddress, returnAddress;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        builtURL = this.resourceURL + "?key=" + this.apiKey + "&location=" + coordinates.latitude + "," + coordinates.longitude;
                        return [4 /*yield*/, this.get(builtURL)];
                    case 1:
                        response = _a.sent();
                        fistAddress = response.results[0].locations[0];
                        returnAddress = new _shared_classes__WEBPACK_IMPORTED_MODULE_3__["Address"](fistAddress.street, fistAddress.adminArea3, fistAddress.adminArea1, fistAddress.adminArea5);
                        return [2 /*return*/, returnAddress];
                }
            });
        });
    };
    // TODO: Use proper try catch techniques.
    RestHelperService.prototype.get = function (getUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(getUrl).subscribe(function (response) {
                console.log(response);
                resolve(response);
            }, reject);
        });
    };
    RestHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestHelperService);
    return RestHelperService;
}());



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
var Marker = /** @class */ (function () {
    function Marker(latitude, longitude, title, icon, associatedContent, description, date, featuredImage, iconHeight, iconWidth) {
        if (iconHeight === void 0) { iconHeight = 100; }
        if (iconWidth === void 0) { iconWidth = 100; }
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
    return Marker;
}());

var ContentType;
(function (ContentType) {
    ContentType["IMAGE"] = "IMAGE";
    ContentType["TEXT"] = "TEXT";
    ContentType["INSTAGRAM_POST"] = "INSTAGRAM_POST";
})(ContentType || (ContentType = {}));
var Content = /** @class */ (function () {
    function Content(type, url, body) {
        this.type = type;
        this.url = url;
        this.body = body;
    }
    return Content;
}());

var Coordinates = /** @class */ (function () {
    function Coordinates(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return Coordinates;
}());

var CoordinateBoundaries = /** @class */ (function () {
    function CoordinateBoundaries(minLatitude, maxLatitude, minLongitude, maxLongitude) {
        this.minLatitude = minLatitude;
        this.maxLatitude = maxLatitude;
        this.minLongitude = minLongitude;
        this.maxLongitude = maxLongitude;
    }
    return CoordinateBoundaries;
}());

var EarthInteractions = /** @class */ (function () {
    function EarthInteractions(mapCenter, mapBoundaries) {
        this.mapCenter = mapCenter;
        this.mapBoundaries = mapBoundaries;
    }
    return EarthInteractions;
}());

var Address = /** @class */ (function () {
    function Address(street, country, county, city) {
        this.street = street;
        this.country = country;
        this.county = county;
        this.city = city;
    }
    return Address;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map