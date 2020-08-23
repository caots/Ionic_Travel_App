(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-explore-explore-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel/explore/explore.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel/explore/explore.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content *ngIf=\"!isLoading\">\n\n  <ion-toolbar class=\"padding-parent\">\n    <ion-buttons slot=\"start\" class=\"button-left-header\" (click)=\"openMenuLeft()\">\n      <ion-icon name=\"finger-print-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"title-header\">Tour List</ion-title>\n    <ion-avatar slot=\"end\" [routerLink]=\"['/login']\" [ngStyle]=\"{\n        'display':'flex',\n        'justify-content':'center',\n        'align-items':'center'\n      }\">\n      <img src=\"../../../assets/avatar.jpg\" class=\"avatar-header\">\n    </ion-avatar>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar debounce=\"500\"></ion-searchbar>\n  </ion-toolbar>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"slide-travel-hot\">\n    <p style=\"color: red;\">Hot searches <ion-icon name=\"boat-outline\"></ion-icon>\n    </p>\n    <ion-slides scroll-y=\"false\" pager=\"false\" [options]=\"slideOptsHot\" style=\"margin-top: 20px;\">\n      <ion-slide *ngFor=\"let travel of hotTravel\">\n        <div class=\"slide\">\n          <img [src]=\"travel.image\" />\n          <div class=\"content\">\n            <div class=\"name\">{{travel.title}}</div>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class=\"slide-travel-hot\">\n    <p style=\"color: #3171e0;\">flash sales <ion-icon name=\"flash-outline\"></ion-icon>\n    </p>\n    <ion-slides scroll-y=\"false\" pager=\"false\" [options]=\"slideOptsSales\">\n      <ion-slide *ngFor=\"let travel of salesTravel\">\n        <div class=\"slide slide-fix\">\n          <img\n            [src]=\"travel.image\" />\n          <div class=\"content-fix\">\n            <div class=\"name\">{{travel.title}} <span> 30%</span></div>\n          </div>\n        </div>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n\n  <p class=\"title-list\">Normal searches</p>\n\n  <div class=\"wrapper-travel\" *ngFor=\"let travel of listTravel\">\n    <div class=\"travel\" [routerLink]=\"['/travel', travel.id]\">\n      <div class=\"img-travel\">\n        <img [src]=\"travel.image\" alt=\"\">\n        <div class=\"name-place\">\n          <ion-icon name=\"heart-sharp\" [ngStyle]=\"{'color':'red'}\"></ion-icon>\n          <div class=\"title\">{{travel.title}}</div>\n        </div>\n      </div>\n      <div class=\"content-travel\">\n        <div class=\"date\">\n          <ion-icon name=\"calendar-outline\"></ion-icon> {{travel.init_date}}\n        </div>\n        <div class=\"price\">\n          {{travel.price | currency : \"USD\"}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"dark\">\n      <ion-icon name=\"share-social-sharp\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"end\">\n      <ion-fab-button color=\"light\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\">\n        <ion-icon name=\"logo-vimeo\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"light\">\n        <ion-icon name=\"logo-google\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n\n<!-- skeleton -->\n<ion-content *ngIf=\"isLoading\">\n  <div class=\"ion-padding custom-skeleton\">\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    <ion-skeleton-text animated></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n  </div>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/travel/explore/explore-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/travel/explore/explore-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ExplorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageRoutingModule", function() { return ExplorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore.page */ "./src/app/travel/explore/explore.page.ts");




const routes = [
    {
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_3__["ExplorePage"]
    }
];
let ExplorePageRoutingModule = class ExplorePageRoutingModule {
};
ExplorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExplorePageRoutingModule);



/***/ }),

/***/ "./src/app/travel/explore/explore.module.ts":
/*!**************************************************!*\
  !*** ./src/app/travel/explore/explore.module.ts ***!
  \**************************************************/
/*! exports provided: ExplorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function() { return ExplorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-routing.module */ "./src/app/travel/explore/explore-routing.module.ts");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore.page */ "./src/app/travel/explore/explore.page.ts");







let ExplorePageModule = class ExplorePageModule {
};
ExplorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExplorePageRoutingModule"]
        ],
        declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]]
    })
], ExplorePageModule);



/***/ }),

/***/ "./src/app/travel/explore/explore.page.scss":
/*!**************************************************!*\
  !*** ./src/app/travel/explore/explore.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\nion-content {\n  --background: none;\n  background-image: url(https://images.unsplash.com/photo-1510832303954-cc30cbf2b8db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-toolbar {\n  --background: none;\n}\n\n.title-header {\n  font-size: 34px;\n  color: #1e2023;\n  font-weight: 600;\n}\n\n.button-left-header {\n  font-size: 36px;\n  color: #1e2023;\n}\n\n.padding-parent {\n  padding: 15px;\n}\n\n.avatar-header {\n  width: 80%;\n  height: 80%;\n}\n\n.wrapper-travel {\n  padding: 8px 15px;\n  overflow: scroll;\n}\n\n.wrapper-travel .travel {\n  border-radius: 20px;\n  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\n.wrapper-travel .travel .img-travel {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.wrapper-travel .travel .img-travel img {\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper-travel .travel .img-travel .name-place {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  background-color: #141514c4;\n  border-radius: 20px;\n}\n\n.wrapper-travel .travel .img-travel .name-place .title {\n  color: #ffffff;\n  margin-left: 5px;\n  opacity: 1;\n}\n\n.wrapper-travel .travel .content-travel {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px 10px 10px;\n}\n\n.wrapper-travel .travel .content-travel .date {\n  font-size: 16px;\n  color: gray;\n  font-weight: 500;\n}\n\n.wrapper-travel .travel .content-travel .price {\n  color: #ffc409;\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.title-list {\n  margin: 15px;\n  color: #333;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.slide-travel-hot {\n  margin: 0 15px;\n  overflow: hidden;\n}\n\n.slide-travel-hot p {\n  color: #1e2023;\n  font-size: 24px;\n  font-weight: 600;\n  margin: 20px 0 0 0;\n}\n\n.slide {\n  border-radius: 20px;\n  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.18);\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.slide img {\n  width: 100%;\n  height: 100%;\n}\n\n.slide .content {\n  padding: 5px;\n  background-color: #141514c4;\n}\n\n.slide .content .name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ffffff;\n}\n\n.slide-fix {\n  position: relative;\n}\n\n.slide .content-fix {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  background-color: #141514c4;\n  border-radius: 20px;\n}\n\n.slide .content-fix .name {\n  color: #ffffff;\n  padding: 10px 30px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.slide .content-fix .name span {\n  padding: 0 5px;\n  color: #ffc409;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhdmVsL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0REFBQTtBQUNKOztBQUVBO0VBRUksa0JBQUE7RUFDQSw0SkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxhQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUxKOztBQVFBO0VBRUksaUJBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBUEo7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUko7O0FBV0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBUko7O0FBWUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFZQTtFQUNJLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVRKOztBQVlBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0FBVEo7O0FBWUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBVEo7O0FBWUE7RUFDSSxrQkFBQTtBQVRKOztBQVlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVlBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFUSiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC9leHBsb3JlL2V4cGxvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4NjE7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMDgzMjMwMzk1NC1jYzMwY2JmMmI4ZGI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTc1MCZxPTgwKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvLyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoIzAwMDAwMDJlLCB0cmFuc3BhcmVudCk7O1xuICAgIC8vIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAvLyBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cblxuLnRpdGxlLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGNvbG9yOiAjMWUyMDIzO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbn1cblxuLmJ1dHRvbi1sZWZ0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGNvbG9yOiAjMWUyMDIzO1xufVxuXG4ucGFkZGluZy1wYXJlbnQge1xuICAgIHBhZGRpbmc6IDE1cHhcbn1cblxuLmF2YXRhci1oZWFkZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbi53cmFwcGVyLXRyYXZlbCB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi53cmFwcGVyLXRyYXZlbCAudHJhdmVsIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAuMTgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxufVxuXG4ud3JhcHBlci10cmF2ZWwgLnRyYXZlbCAuaW1nLXRyYXZlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ud3JhcHBlci10cmF2ZWwgLnRyYXZlbCAuaW1nLXRyYXZlbCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLndyYXBwZXItdHJhdmVsIC50cmF2ZWwgLmltZy10cmF2ZWwgLm5hbWUtcGxhY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE1MTRjNDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ud3JhcHBlci10cmF2ZWwgLnRyYXZlbCAuaW1nLXRyYXZlbCAubmFtZS1wbGFjZSAudGl0bGUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLndyYXBwZXItdHJhdmVsIC50cmF2ZWwgLmNvbnRlbnQtdHJhdmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG5cbn1cblxuLndyYXBwZXItdHJhdmVsIC50cmF2ZWwgLmNvbnRlbnQtdHJhdmVsIC5kYXRlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLndyYXBwZXItdHJhdmVsIC50cmF2ZWwgLmNvbnRlbnQtdHJhdmVsIC5wcmljZSB7XG4gICAgY29sb3I6ICNmZmM0MDk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50aXRsZS1saXN0IHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zbGlkZS10cmF2ZWwtaG90IHtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi5zbGlkZS10cmF2ZWwtaG90IHAge1xuICAgIGNvbG9yOiAjMWUyMDIzO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbn1cblxuLnNsaWRlIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAuMTgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbGlkZSAuY29udGVudCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE1MTRjNDtcbn1cblxuLnNsaWRlIC5jb250ZW50IC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNsaWRlLWZpeCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2xpZGUgLmNvbnRlbnQtZml4IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNTE0YzQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnNsaWRlIC5jb250ZW50LWZpeCAubmFtZSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2xpZGUgLmNvbnRlbnQtZml4IC5uYW1lIHNwYW4ge1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGNvbG9yOiAjZmZjNDA5XG59Il19 */");

/***/ }),

/***/ "./src/app/travel/explore/explore.page.ts":
/*!************************************************!*\
  !*** ./src/app/travel/explore/explore.page.ts ***!
  \************************************************/
/*! exports provided: ExplorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePage", function() { return ExplorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/travel.service */ "./src/app/services/travel.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ExplorePage = class ExplorePage {
    // slideOpts = {
    //   initialSlide: 1,
    //   speed: 400
    // };
    constructor(travelService, menu) {
        this.travelService = travelService;
        this.menu = menu;
        this.travel = {
            id: 0
        };
        this.isLoading = true;
        this.slideOptsHot = {
            slidesPerView: 2,
            coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate() {
                    const swiper = this;
                    const { width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $ } = swiper;
                    const params = swiper.params.coverflowEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const transform$$1 = swiper.translate;
                    const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                    const rotate = isHorizontal ? params.rotate : -params.rotate;
                    const translate = params.depth;
                    // Each slide offset from center
                    for (let i = 0, length = slides.length; i < length; i += 1) {
                        const $slideEl = slides.eq(i);
                        const slideSize = slidesSizesGrid[i];
                        const slideOffset = $slideEl[0].swiperSlideOffset;
                        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        let translateZ = -translate * Math.abs(offsetMultiplier);
                        let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
                        const ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = `${center}px 50%`;
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                }
            }
        };
        this.slideOptsSales = {
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            on: {
                beforeInit: function () {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: false,
                        virtualTranslate: true,
                    };
                    this.params = Object.assign(this.params, overwriteParams);
                    this.originalParams = Object.assign(this.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    const swiper = this;
                    const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, } = swiper;
                    const params = swiper.params.cubeEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    let wrapperRotate = 0;
                    let $cubeShadowEl;
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            $cubeShadowEl.css({ height: `${swiperWidth}px` });
                        }
                        else {
                            $cubeShadowEl = $el.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $el.append($cubeShadowEl);
                            }
                        }
                    }
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let slideIndex = i;
                        if (isVirtual) {
                            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                        }
                        let slideAngle = slideIndex * 90;
                        let round = Math.floor(slideAngle / 360);
                        if (rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        let tx = 0;
                        let ty = 0;
                        let tz = 0;
                        if (slideIndex % 4 === 0) {
                            tx = -round * 4 * swiperSize;
                            tz = 0;
                        }
                        else if ((slideIndex - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * swiperSize;
                        }
                        else if ((slideIndex - 2) % 4 === 0) {
                            tx = swiperSize + (round * 4 * swiperSize);
                            tz = swiperSize;
                        }
                        else if ((slideIndex - 3) % 4 === 0) {
                            tx = -swiperSize;
                            tz = (3 * swiperSize) + (swiperSize * 4 * round);
                        }
                        if (rtl) {
                            tx = -tx;
                        }
                        if (!isHorizontal) {
                            ty = tx;
                            tx = 0;
                        }
                        const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = (slideIndex * 90) + (progress * 90);
                            if (rtl)
                                wrapperRotate = (-slideIndex * 90) - (progress * 90);
                        }
                        $slideEl.transform(transform$$1);
                        if (params.slideShadows) {
                            // Set shadows
                            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    $wrapperEl.css({
                        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        'transform-origin': `50% 50% -${swiperSize / 2}px`,
                    });
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                        }
                        else {
                            const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                            const multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
                                + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                            const scale1 = params.shadowScale;
                            const scale2 = params.shadowScale / multiplier;
                            const offset$$1 = params.shadowOffset;
                            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                        }
                    }
                    const zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
                    $wrapperEl
                        .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
                },
                setTransition: function (duration) {
                    const swiper = this;
                    const { $el, slides } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                        $el.find('.swiper-cube-shadow').transition(duration);
                    }
                },
            }
        };
    }
    ngOnInit() {
        this.getAllTravel();
    }
    openMenuLeft() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    getAllTravel() {
        this.isLoading = true;
        this.subscribe = this.travelService.getAllTravels().subscribe(data => {
            this.isLoading = false;
            this.listTravel = data;
            this.suggestedTravels = data;
            let tmp1 = [];
            let tmp2 = [];
            data.map((item, i) => {
                if (i < 7) {
                    tmp1.push(item);
                }
                if (i > 7 && i < 15) {
                    tmp2.push(item);
                }
            });
            this.hotTravel = tmp1;
            this.salesTravel = tmp2;
        }, err => {
            this.travelService.handlerError(err);
        });
    }
    getTravelById(id) {
        this.subscribe = this.travelService.getTravelById(id).subscribe(data => {
            this.travel = data;
        }, err => {
            this.travelService.handlerError(err);
        });
    }
    getIndex(id) {
        let rs = 0;
        this.listTravel.forEach((travle, index) => {
            if (travle.id == id)
                rs = index;
        });
        return rs;
    }
    loadData(event) {
        setTimeout(() => {
            event.target.complete();
            if (this.listTravel.length == 10) {
                event.target.disabled = true;
            }
        }, 500);
    }
    doRefresh(event) {
        this.getAllTravel();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    ngOnDestroy() {
        if (this.subscribe) {
            this.subscribe.unsubscribe();
        }
    }
};
ExplorePage.ctorParameters = () => [
    { type: _services_travel_service__WEBPACK_IMPORTED_MODULE_2__["TravelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
ExplorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./explore.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel/explore/explore.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./explore.page.scss */ "./src/app/travel/explore/explore.page.scss")).default]
    })
], ExplorePage);



/***/ })

}]);
//# sourceMappingURL=travel-explore-explore-module-es2015.js.map