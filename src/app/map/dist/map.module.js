"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var map_routing_module_1 = require("./map-routing.module");
var ngx_1 = require("@ionic-native/geolocation/ngx");
var ngx_2 = require("@ionic-native/native-geocoder/ngx");
var angular_1 = require("@ionic/angular");
var ngx_3 = require("@ionic-native/splash-screen/ngx");
var ngx_4 = require("@ionic-native/status-bar/ngx");
var map_page_1 = require("./map.page");
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                map_routing_module_1.MapPageRoutingModule
            ],
            providers: [
                ngx_4.StatusBar,
                ngx_3.SplashScreen,
                ngx_1.Geolocation,
                ngx_2.NativeGeocoder,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
            ],
            declarations: [map_page_1.MapPage]
        })
    ], MapPageModule);
    return MapPageModule;
}());
exports.MapPageModule = MapPageModule;
