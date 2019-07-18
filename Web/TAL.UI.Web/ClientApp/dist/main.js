(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function (module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error('Cannot find module "' + req + '".');
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }
      webpackEmptyAsyncContext.keys = function () { return []; };
      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

      /***/
}),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function (module, exports) {
      module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

      /***/
}),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function (module, exports) {
      module.exports = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

      /***/
}),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
      var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppComponent = /** @class */ (function () {
        function AppComponent() {
          this.title = 'app';
        }
        AppComponent = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
          })
        ], AppComponent);
        return AppComponent;
      }());

      /***/
}),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _premium_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./premium-calculator/calculator.component */ "./src/app/premium-calculator/calculator.component.ts");
/* harmony import */ var _services_premium_calculator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/premium-calculator.service */ "./src/app/services/premium-calculator.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
      var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
              _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
              _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
              _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
              _premium_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__["CalculatorComponent"]
            ],
            imports: [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
              _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
              _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _premium_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__["CalculatorComponent"], pathMatch: 'full' },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
              ])
            ],
            providers: [_services_premium_calculator_service__WEBPACK_IMPORTED_MODULE_9__["PremiumCalculatorService"], _services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          })
        ], AppModule);
        return AppModule;
      }());

      /***/
}),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function (module, exports) {
      module.exports = "<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n"

      /***/
}),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
      var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var HomeComponent = /** @class */ (function () {
        function HomeComponent() {
        }
        HomeComponent = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
          })
        ], HomeComponent);
        return HomeComponent;
      }());

      /***/
}),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function (module, exports) {
      module.exports = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n"

      /***/
}),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function (module, exports) {
      module.exports = "<header>\r\n  <nav class='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3'>\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>TAL</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\r\n        <ul class=\"navbar-nav flex-grow\">\r\n            <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\r\n                <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Premium Calculator</a>\r\n              </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/home\"]'>Home</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

      /***/
}),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
      var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var NavMenuComponent = /** @class */ (function () {
        function NavMenuComponent() {
          this.isExpanded = false;
        }
        NavMenuComponent.prototype.collapse = function () {
          this.isExpanded = false;
        };
        NavMenuComponent.prototype.toggle = function () {
          this.isExpanded = !this.isExpanded;
        };
        NavMenuComponent = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
          })
        ], NavMenuComponent);
        return NavMenuComponent;
      }());

      /***/
}),

/***/ "./src/app/premium-calculator/calculator.component.html":
/*!**************************************************************!*\
  !*** ./src/app/premium-calculator/calculator.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {
      module.exports = "<h2>Premium Calculator</h2>\r\n\r\n<div class=\"container\">\r\n    <form  (ngSubmit)=\"onSubmit(form)\" #premiumForm=\"ngForm\" >\r\n        <div class=\"row form-group col-6\">\r\n                <label class=\"form-label\" for=\"name\">Name:</label>\r\n                    <input [(ngModel)]=\"membermodel.name\"  #name=\"ngModel\" type=\"text\"class=\"form-control\" autocomplete=\"off\" autofocus=\"autofocus\" required id=\"name\" name=\"name\"  />\r\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"    class=\"alert alert-danger\">\r\n                    <div *ngIf=\"name.errors.required\">Name is required.</div>\r\n            </div>\r\n          </div>\r\n            <div class=\" row form-group col-6\">\r\n                <label class=\"form-label\" for=\"age\">Age:</label>\r\n                    <input [(ngModel)]=\"membermodel.age\" #age=\"ngModel\" type=\"number\" class=\"form-control\"autocomplete=\"off\" required pattern=\"[0-9]{1,3}\" id=\"age\" name=\"age\" />\r\n                    <div *ngIf=\"age.invalid && (age.dirty || age.touched)\"    class=\"alert alert-danger\">\r\n                    <div *ngIf=\"age.errors.required\">Age is required.</div>\r\n                 </div>\r\n             </div>\r\n            <div class=\"row form-group col-6\">\r\n                <label class=\"form-label\" for=\"dateofbirth\">Date of Birth:</label>\r\n                 <input [(ngModel)]=\"membermodel.dateOfBirth\" #dateofbirth =\"ngModel\" type=\"date\" class=\"form-control\" autocomplete=\"off\" required id=\"dateOfBirth\" name=\"dateOfBirth\" />\r\n                 <div *ngIf=\"dateofbirth.invalid && (dateofbirth.dirty || dateofbirth.touched)\"    class=\"alert alert-danger\">\r\n                   <div *ngIf=\"dateofbirth.errors.required\">Date of Birth is required.</div>\r\n            </div>\r\n            </div>\r\n            <div class=\"row form-group col-6\">\r\n                <label class=\"form-label\" for=\"deathSumInsured\">Death–Sum Insured:</label>\r\n                    <input [(ngModel)]=\"membermodel.deathSumInsured\" #deathsuminsured=\"ngModel\" type=\"number\" step=\"1000\" min=\"1\"  class=\"form-control\" autocomplete=\"off\" required id=\"deathSumInsured\" name=\"deathSumInsured\" />\r\n                    <div *ngIf=\"deathsuminsured.invalid && (deathsuminsured.dirty || deathsuminsured.touched)\"    class=\"alert alert-danger\">\r\n                    <div *ngIf=\"deathsuminsured.errors.required\">Death-Sum Insured is required.</div>\r\n            </div>\r\n           </div>\r\n            <div class=\"row form-group col-6\">\r\n                <label class=\"form-label\" for=\"occupation\">Occupation:</label>\r\n                   <select  class=\"form-control\" name=\"occupationId\" [ngModel]=\"membermodel.occupationId\" (ngModelChange)=\"submit($event)\"  > \r\n                        <option *ngFor=\"let occupation of membermodel.occupationList\" [value]=\"occupation.occupationId\">{{occupation.name}}</option> \r\n                    </select> \r\n                \r\n            </div>\r\n    </form>\r\n</div>\r\n<div class=\"container\">\r\n<div *ngIf=\"membermodel.premium > 0\">\r\n    <h3>Calculated Premium</h3>\r\n    <div class=\"row form-group col-6\">\r\n        {{membermodel.premium |currency:'AUD':'symbol'}}\r\n    </div>\r\n    \r\n</div>\r\n</div>\r\n"

      /***/
}),

/***/ "./src/app/premium-calculator/calculator.component.ts":
/*!************************************************************!*\
  !*** ./src/app/premium-calculator/calculator.component.ts ***!
  \************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function () { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_premium_calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/premium-calculator.service */ "./src/app/services/premium-calculator.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
      var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CalculatorComponent = /** @class */ (function () {
        function CalculatorComponent(service) {
          this.service = service;
          this.premium = {
            name: '',
            age: 0,
            dateOfBirth: new Date(),
            deathSumInsured: 0,
            occupationId: 0,
            premium: 0,
          };
          this.membermodel = {
            name: '',
            age: undefined,
            dateOfBirth: new Date(),
            deathSumInsured: undefined,
            occupationList: [],
            occupationId: undefined,
            premium: undefined,
          };
        }
        CalculatorComponent.prototype.ngOnInit = function () {
          this.getOccupationList();
        };
        CalculatorComponent.prototype.getOccupationList = function () {
          var _this = this;
          this.errorReceived = false;
          this.service.getOccupationList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }))
            .subscribe(function (occlist) {
              _this.membermodel.occupationList = occlist;
              console.log('occupation types received: ' + occlist.length);
            });
        };
        CalculatorComponent.prototype.calculatePremium = function () {
          var _this = this;
          this.errorReceived = false;
          this.service.calculatePremium(this.premium)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }))
            .subscribe(function (premium) {
              _this.premium = premium;
              _this.membermodel.premium = premium.premium;
            });
        };
        CalculatorComponent.prototype.submit = function (value) {
          var _this = this;
          this.membermodel.occupationId = value;
          if (!this.premiumForm.valid) {
            return;
          }
          Object.keys(this.premium).forEach(function (key) {
            return _this.premium[key] = _this.membermodel[key];
          });
          this.calculatePremium();
        };
        CalculatorComponent.prototype.handleError = function (error) {
          this.errorReceived = true;
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        };
        __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]),
          __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
        ], CalculatorComponent.prototype, "premiumForm", void 0);
        CalculatorComponent = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/premium-calculator/calculator.component.html")
          }),
          __metadata("design:paramtypes", [_services_premium_calculator_service__WEBPACK_IMPORTED_MODULE_1__["PremiumCalculatorService"]])
        ], CalculatorComponent);
        return CalculatorComponent;
      }());

      /***/
}),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
      var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var DataService = /** @class */ (function () {
        function DataService(http) {
          this.http = http;
        }
        DataService.prototype.get = function (url, params) {
          var options = {};
          this.setHeaders(options);
          return this.http.get(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        };
        DataService.prototype.postWithId = function (url, data, params) {
          return this.doPost(url, data, true, params);
        };
        DataService.prototype.post = function (url, data, params) {
          return this.doPost(url, data, false, params);
        };
        DataService.prototype.putWithId = function (url, data, params) {
          return this.doPut(url, data, true, params);
        };
        DataService.prototype.doPost = function (url, data, needId, params) {
          var options = {};
          this.setHeaders(options, needId);
          return this.http.post(url, data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        };
        DataService.prototype.delete = function (url, params) {
          var options = {};
          this.setHeaders(options);
          console.log('data.service deleting');
          this.http.delete(url, options)
            .subscribe(function (res) {
              console.log('deleted');
            });
        };
        DataService.prototype.handleError = function (error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Client side network error occurred:', error.error.message);
          }
          else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend - ' +
              ("status: " + error.status + ", ") +
              ("statusText: " + error.statusText + ", ") +
              ("message: " + error.error.message));
          }
          // return an observable with a user-facing error message
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error || 'server error');
        };
        DataService.prototype.doPut = function (url, data, needId, params) {
          var options = {};
          this.setHeaders(options, needId);
          return this.http.put(url, data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        };
        DataService.prototype.setHeaders = function (options, needId) {
          options["headers"] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .append('content-type', 'application/json');
        };
        DataService = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
          __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
        ], DataService);
        return DataService;
      }());

      /***/
}),

/***/ "./src/app/services/premium-calculator.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/premium-calculator.service.ts ***!
  \********************************************************/
/*! exports provided: PremiumCalculatorService */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumCalculatorService", function () { return PremiumCalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
      var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };
      var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
      };

      var PremiumCalculatorService = /** @class */ (function () {
        function PremiumCalculatorService(service, baseUrl) {
          this.service = service;
          this.occupationUrl = '';
          this.premiumUrl = '';
          this.occupationUrl = baseUrl + 'api/v1/occupation';
          this.premiumUrl = baseUrl + 'api/v1/premium';
        }
        PremiumCalculatorService.prototype.getOccupationList = function () {
          var url = this.occupationUrl + '/types';
          return this.service.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }));
        };
        PremiumCalculatorService.prototype.calculatePremium = function (premium) {
          var url = this.premiumUrl + '/Calculate';
          return this.service.post(url, premium).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
          }));
        };
        PremiumCalculatorService = __decorate([
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
          __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
          __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], String])
        ], PremiumCalculatorService);
        return PremiumCalculatorService;
      }());

      /***/
}),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
      // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.
      var environment = {
        production: false
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
}),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

      function getBaseUrl() {
        return document.getElementsByTagName('base')[0].href;
      }
      var providers = [
        { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
      ];
      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.log(err); });

      /***/
}),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__(/*! C:\Learn\TAL\Src\Web\TAL.UI.Web\ClientApp\src\main.ts */"./src/main.ts");

      /***/
})
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map
