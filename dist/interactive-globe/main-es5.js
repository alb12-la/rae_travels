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

module.exports = "<html>\n<div id=\"debug-panel\">\n    <!-- Debugging Buttons -->\n    <div id=\"debug-controls\">\n        <a class=\"btn btn-primary m-2\" (click)=\"this.placeMarkers()\">Place Markers</a>\n        <a class=\"btn btn-secondary m-2\" (click)=\"this.clearMarkers()\">Clear Markers</a>\n        <a class=\"btn btn-secondary m-2\" (click)=\"this.toggleCrosshairs()\">Toggle Crosshairs</a>\n    </div>\n    <!-- Debugging panel -->\n    <div class=\"card ml-2 position-fixed\">\n        <div class=\"card-body\">\n            <div class=\"form-group\">\n                <ng-container *ngIf=\"this.currentAddress\">\n                    <label class=\"mt-2\">Current</label>\n                    <samp class=\"form-text\">\n                        {{this.currentAddress.country}},{{this.currentAddress.city}},{{this.currentAddress.street}}\n                    </samp>\n                </ng-container>\n                <!-- Current center -->\n                <ng-container *ngIf=\"this.currentPosition\">\n                    <label class=\"mt-2\">Current Center</label>\n                    <samp class=\"form-text\">\n                        {{this.currentPosition.latitude}},{{this.currentPosition.longitude}}\n                    </samp>\n                </ng-container>\n\n                <!-- Current map boundaries -->\n                <label class=\"mt-2\">Current map boundaries</label>\n                <samp class=\"form-text\">\n                    <ng-container *ngIf=\"this.currentMapBoundaries else emptyState\">\n                        {{this.currentMapBoundaries.minLatitude}},{{this.currentMapBoundaries.maxLatitude}},\n                        <br>\n                        {{this.currentMapBoundaries.minLongitude}},{{this.currentMapBoundaries.maxLongitude}}\n                    </ng-container>\n                    <ng-template #emptyState>\n                        zoomed out too far\n                    </ng-template>\n                </samp>\n            </div>\n        </div>\n    </div>\n\n    <!-- Crosshairs -->\n    <div [ngClass]=\"[displayCrosshairs ? '': 'd-none']\">\n        <div class=\"v-line\"></div>\n        <div class=\"h-line\"></div>\n    </div>\n</div>\n\n<!-- Slide out container -->\n<div class=\"slide-out-container\">\n    <div id=\"slide-out-controls\" class=\"w-100 d-flex justify-content-center\">\n        <a class=\"btn btn-primary m-2\" (click)=\"this.placeMarkers()\">News</a>\n        <a class=\"btn btn-secondary m-2\" (click)=\"this.toggleActivities()\">Activities</a>\n    </div>\n\n    <div [ngClass]=\"['slide-out ', showActivities ? 'expand':'']\">\n        <div class=\"jumbotron\">\n            <h1 class=\"display-4\">Hello, world!</h1>\n            <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention\n                to\n                featured content or information.</p>\n            <hr class=\"my-4\">\n            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n            <ng-container *ngIf=\"this.currentAddress\">\n                <h2>{{this.currentAddress.country}}</h2>\n                <h3>{{this.currentAddress.city}},{{this.currentAddress.street}}</h3>\n            </ng-container>\n\n        </div>\n    </div>\n</div>\n\n<app-globe-view (getCenterEmitter)=\"this.updateCenterLocation($event)\" [inputMarkers]=\"markers\"></app-globe-view>\n\n</html>\n<router-outlet>\n</router-outlet>"

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
        this.loc1 = {
            latitude: 43.7696,
            longitude: 11.2558,
            title: 'Florence, Italy',
            icon: '../assets/markers/florence-marker.png',
            iconWidth: 80,
            iconHeight: 80
        };
        this.loc2 = {
            latitude: 9.9281,
            longitude: -84.0907,
            title: 'San José, Costa Rica',
            icon: '../assets/markers/costa-rica-marker.png',
            iconWidth: 80,
            iconHeight: 80
        };
        this.loc3 = {
            latitude: 47.6062,
            longitude: -122.3321,
            title: 'Seattle, Washington',
            icon: '../assets/markers/seattle-marker.png',
            iconWidth: 80,
            iconHeight: 80
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        // Prevent `pinch to zoom` on mobile devices;
        document.addEventListener('gesturechange', function (event) {
            event.preventDefault();
        });
    };
    AppComponent.prototype.placeMarkers = function () {
        this.markers = [this.loc1, this.loc2, this.loc3];
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
    AppComponent.prototype.updateCenterLocation = function (centerObj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!centerObj.mapCenter) return [3 /*break*/, 2];
                        this.currentPosition = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["Coordinates"](centerObj.mapCenter.latitude, centerObj.mapCenter.longitude);
                        // Get address from service
                        _a = this;
                        return [4 /*yield*/, this.restHelperService.getAddressAtCoordinates(this.currentPosition)];
                    case 1:
                        // Get address from service
                        _a.currentAddress = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.currentPosition = undefined;
                        _b.label = 3;
                    case 3:
                        if (centerObj.mapBoundaries) {
                            this.currentMapBoundaries = new _shared_classes__WEBPACK_IMPORTED_MODULE_2__["CoordinateBoundaries"](centerObj.mapBoundaries.minLatitude, centerObj.mapBoundaries.maxLatitude, centerObj.mapBoundaries.minLongitude, centerObj.mapBoundaries.maxLongitude);
                        }
                        else {
                            this.currentMapBoundaries = undefined;
                        }
                        return [2 /*return*/];
                }
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







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
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
                this.earthContainer.nativeElement.addEventListener('click', function (event) { return _this.interactions.next(event); });
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
                earth = new WE.map('earth_div');
                this.earth = earth;
                console.log('Earth', this.earth);
                // WEBGL
                this.webGL = WE;
                WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
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
        console.log('Adding', marker);
        // iconUrl:string?, width:number?, height:number?)
        var markerObj = this.webGL.marker([marker.latitude, marker.longitude], marker.icon || '', marker.iconWidth || 80, marker.iconHeight || 80).addTo(this.earth);
        // HTML inside of marker popup
        markerObj.bindPopup("<b>" + marker.title + "</b>");
        // Call back function on marker
        markerObj.on('click', function (event) { return console.log('Ive been clicked: ', marker.title); });
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
        this.apiKey = 'pemyzdGTMUoqyLXClEl8XAjGwkFatXmi';
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
                        console.log(returnAddress);
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
/*! exports provided: Marker, Coordinates, CoordinateBoundaries, EarthInteractions, Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinates", function() { return Coordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateBoundaries", function() { return CoordinateBoundaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthInteractions", function() { return EarthInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Marker = /** @class */ (function () {
    function Marker(latitude, longitude, title, icon, iconWidth, iconHeight) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.title = title;
        this.icon = icon;
        this.iconWidth = iconWidth;
        this.iconHeight = iconHeight;
    }
    return Marker;
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

module.exports = __webpack_require__(/*! /Users/alb17/interactive-globe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map