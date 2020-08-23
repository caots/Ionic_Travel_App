(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen>\n  <ion-card>\n    <ion-card-content style=\"text-align: center;\">\n      <ion-avatar>\n        <img src=\"./../../assets/avatar.jpg\">\n      </ion-avatar>\n\n      <ion-item>\n        <ion-label style=\"display: none;\" position=\"floating\">Full name</ion-label>\n        <ion-input type='text'>Tran Sy Cao\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"display: none;\"  position=\"floating\">Phone</ion-label>\n        <ion-input type='number'> 0948856496\n        </ion-input>\n\n      </ion-item>\n      <ion-item>\n        <ion-label style=\"display: none;\"  position=\"floating\">Email</ion-label>\n        <ion-input typle='email'> cao.ts@gmail.com\n        </ion-input>\n      </ion-item>\n      <div>\n        <ion-button \n        [routerLink]=\"['/user']\"\n        shape=\"round\" class=\"btn-social\" style=\"background-color: #333 !important;\">\n        Edit  <ion-icon name=\"create-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-card-content>\n    \n  </ion-card>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/user/user-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/user/user-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: UserPageRoutingModule */

    /***/
    function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
        return UserPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user.page */
      "./src/app/user/user.page.ts");

      var routes = [{
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
      }];

      var UserPageRoutingModule = function UserPageRoutingModule() {
        _classCallCheck(this, UserPageRoutingModule);
      };

      UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user/user.module.ts":
    /*!*************************************!*\
      !*** ./src/app/user/user.module.ts ***!
      \*************************************/

    /*! exports provided: UserPageModule */

    /***/
    function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
        return UserPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-routing.module */
      "./src/app/user/user-routing.module.ts");
      /* harmony import */


      var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user.page */
      "./src/app/user/user.page.ts");

      var UserPageModule = function UserPageModule() {
        _classCallCheck(this, UserPageModule);
      };

      UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
      })], UserPageModule);
      /***/
    },

    /***/
    "./src/app/user/user.page.scss":
    /*!*************************************!*\
      !*** ./src/app/user/user.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-image: url(https://images.unsplash.com/photo-1521575363954-393ae1439d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80);\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-card {\n  height: 86vh;\n  background: #ffffffc7;\n}\n\nion-toolbar {\n  --background: none;\n}\n\n* {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.title-login {\n  text-align: center;\n  color: #ffc409;\n  z-index: 2;\n}\n\nion-icon {\n  font-size: 18px;\n  margin: 0 10px;\n  color: white;\n}\n\nion-avatar {\n  margin: auto;\n  width: 150px;\n  height: 150px;\n  margin-bottom: 40px;\n}\n\nion-button {\n  --background:none;\n  --background-activated: none;\n  margin-top: 40px;\n}\n\n.btn-social {\n  border-radius: 20px;\n  width: 50%;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0QsNEpBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDSDs7QUFFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0csa0JBQUE7QUFDSDs7QUFFQTtFQUNHLDREQUFBO0FBQ0g7O0FBRUE7RUFDRyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBQ0g7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMTU3NTM2Mzk1NC0zOTNhZTE0MzlkMzM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTU4MiZxPTgwKTtcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW9uLWNhcmR7XG4gICAgaGVpZ2h0OiA4NnZoO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZjNztcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAtLWJhY2tncm91bmQgOiBub25lOztcblxufVxuKiB7XG4gICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZS1sb2dpbntcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGNvbG9yOiAjZmZjNDA5O1xuICAgei1pbmRleDogMjtcbn1cblxuaW9uLWljb257XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWF2YXRhcntcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5idG4tc29jaWFse1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/user/user.page.ts":
    /*!***********************************!*\
      !*** ./src/app/user/user.page.ts ***!
      \***********************************/

    /*! exports provided: UserPage */

    /***/
    function srcAppUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPage", function () {
        return UserPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UserPage = /*#__PURE__*/function () {
        function UserPage() {
          _classCallCheck(this, UserPage);
        }

        _createClass(UserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserPage;
      }();

      UserPage.ctorParameters = function () {
        return [];
      };

      UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user.page.scss */
        "./src/app/user/user.page.scss"))["default"]]
      })], UserPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-user-module-es5.js.map