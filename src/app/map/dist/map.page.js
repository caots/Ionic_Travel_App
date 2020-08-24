"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapPage = void 0;
var core_1 = require("@angular/core");
var MapPage = /** @class */ (function () {
    function MapPage(geolocation, nativeGeocoder) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    MapPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.map.addListener('dragend', function () {
                _this.latitude = _this.map.center.lat();
                _this.longitude = _this.map.center.lng();
                _this.getAddressFromCoords(_this.map.center.lat(), _this.map.center.lng());
            });
        })["catch"](function (error) {
            console.log('Error getting location', error);
        });
    };
    MapPage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then(function (result) {
            _this.address = "";
            var responseAddress = [];
            for (var _i = 0, _a = Object.entries(result[0]); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (var _c = 0, responseAddress_1 = responseAddress; _c < responseAddress_1.length; _c++) {
                var value = responseAddress_1[_c];
                _this.address += value + ", ";
            }
            _this.address = _this.address.slice(0, -2);
        })["catch"](function (error) {
            _this.address = "Address Not Available!";
        });
    };
    __decorate([
        core_1.ViewChild('map', { static: false })
    ], MapPage.prototype, "mapElement");
    MapPage = __decorate([
        core_1.Component({
            selector: 'app-map',
            templateUrl: './map.page.html',
            styleUrls: ['./map.page.scss']
        })
    ], MapPage);
    return MapPage;
}());
exports.MapPage = MapPage;
