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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.css":
/*!*****************************************!*\
  !*** ./ClientApp/app/app.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./ClientApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
var nav_menu_component_1 = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./ClientApp/app/nav-menu/nav-menu.component.ts");
var home_component_1 = __webpack_require__(/*! ./home/home.component */ "./ClientApp/app/home/home.component.ts");
var calculator_component_1 = __webpack_require__(/*! ./premium-calculator/calculator.component */ "./ClientApp/app/premium-calculator/calculator.component.ts");
var premium_calculator_service_1 = __webpack_require__(/*! ./services/premium-calculator.service */ "./ClientApp/app/services/premium-calculator.service.ts");
var data_service_1 = __webpack_require__(/*! ./services/data.service */ "./ClientApp/app/services/data.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                calculator_component_1.CalculatorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: calculator_component_1.CalculatorComponent, pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                ])
            ],
            providers: [premium_calculator_service_1.PremiumCalculatorService, data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./ClientApp/app/home/home.component.html":
/*!************************************************!*\
  !*** ./ClientApp/app/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n"

/***/ }),

/***/ "./ClientApp/app/home/home.component.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/home/home.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./ClientApp/app/home/home.component.html"),
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./ClientApp/app/nav-menu/nav-menu.component.css":
/*!*******************************************************!*\
  !*** ./ClientApp/app/nav-menu/nav-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n"

/***/ }),

/***/ "./ClientApp/app/nav-menu/nav-menu.component.html":
/*!********************************************************!*\
  !*** ./ClientApp/app/nav-menu/nav-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3'>\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>TAL</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\r\n        <ul class=\"navbar-nav flex-grow\">\r\n            <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]'>\r\n                <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Premium Calculator</a>\r\n              </li>\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/home\"]'>Home</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./ClientApp/app/nav-menu/nav-menu.component.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/nav-menu/nav-menu.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
        core_1.Component({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./ClientApp/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./ClientApp/app/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;


/***/ }),

/***/ "./ClientApp/app/premium-calculator/calculator.component.html":
/*!********************************************************************!*\
  !*** ./ClientApp/app/premium-calculator/calculator.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Premium Calculator</h2>\r\n\r\n<div class=\"container\">\r\n    <form  (ngSubmit)=\"onSubmit(form)\" #premiumForm=\"ngForm\" >\r\n        <div class=\"row form-group col-6\">\r\n                <label class=\"form-label\" for=\"name\">Name:</label>\r\n                    <input [(ngModel)]=\"membermodel.name\"  #name=\"ngModel\" type=\"text\"class=\"form-control\" autocomplete=\"off\" autofocus=\"autofocus\" required id=\"name\" name=\"name\"  />\r\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"    class=\"alert alert-danger\">\r\n                    <div *ngIf=\"name.errors.required\">Name is required.</div>\r\n            </div>\r\n          </div>\r\n            <div class=\" row form-group col-6\">\r\n                <label class=\"form-label\" for=\"age\">Age:</label>\r\n                    <input [(ngModel)]=\"membermodel.age\" #age=\"ngModel\" type=\"number\" class=\"form-control\"autocomplete=\"off\" required pattern=\"[0-9]{1,3}\" id=\"age\" name=\"age\" />\r\n                    <div *ngIf=\"age.invalid && (age.dirty || age.touched)\"    class=\"alert alert-danger\">\r\n                    <div *ngIf=\"age.errors.required\">Age is required.</div>\r\n                 </div>\r\n             </div>\r\n            <div class=\"row form-group col-6\">\r\n                <label class=\"form-label\" for=\"dateofbirth\">Date of Birth:</label>\r\n                 <input [(ngModel)]=\"membermodel.dateOfBirth\" #dateofbirth =\"ngModel\" type=\"date\" class=\"form-control\" autocomplete=\"off\" required id=\"dateOfBirth\" name=\"dateOfBirth\" />\r\n                 <div *ngIf=\"dateofbirth.invalid && (dateofbirth.dirty || dateofbirth.touched)\"    class=\"alert alert-danger\">\r\n                   <div *ngIf=\"dateofbirth.errors.required\">Date of Birth is required.</div>\r\n            </div>\r\n            </div>\r\n            <div class=\"row form-group col-6\">\r\n                <label class=\"form-label\" for=\"deathSumInsured\">Death–Sum Insured:</label>\r\n                    <input [(ngModel)]=\"membermodel.deathSumInsured\" #deathsuminsured=\"ngModel\" type=\"number\" step=\"1000\" min=\"1\"  class=\"form-control\" autocomplete=\"off\" required id=\"deathSumInsured\" name=\"deathSumInsured\" />\r\n                    <div *ngIf=\"deathsuminsured.invalid && (deathsuminsured.dirty || deathsuminsured.touched)\"    class=\"alert alert-danger\">\r\n                    <div *ngIf=\"deathsuminsured.errors.required\">Death-Sum Insured is required.</div>\r\n            </div>\r\n           </div>\r\n            <div class=\"row form-group col-6\">\r\n                <label class=\"form-label\" for=\"occupation\">Occupation:</label>\r\n                   <select  class=\"form-control\" name=\"occupationId\" [ngModel]=\"membermodel.occupationId\" (ngModelChange)=\"submit($event)\"  > \r\n                        <option *ngFor=\"let occupation of membermodel.occupationList\" [value]=\"occupation.occupationId\">{{occupation.name}}</option> \r\n                    </select> \r\n                \r\n            </div>\r\n    </form>\r\n</div>\r\n<div class=\"container\">\r\n<div *ngIf=\"membermodel.premium > 0\">\r\n    <h3>Calculated Premium</h3>\r\n    <div class=\"row form-group col-6\">\r\n        {{membermodel.premium |currency:'AUD':'symbol'}}\r\n    </div>\r\n    \r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/premium-calculator/calculator.component.ts":
/*!******************************************************************!*\
  !*** ./ClientApp/app/premium-calculator/calculator.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var premium_calculator_service_1 = __webpack_require__(/*! ../services/premium-calculator.service */ "./ClientApp/app/services/premium-calculator.service.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }))
            .subscribe(function (occlist) {
            _this.membermodel.occupationList = occlist;
            console.log('occupation types received: ' + occlist.length);
        });
    };
    CalculatorComponent.prototype.calculatePremium = function () {
        var _this = this;
        this.errorReceived = false;
        this.service.calculatePremium(this.premium)
            .pipe(operators_1.catchError(function (err) { return _this.handleError(err); }))
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
        return rxjs_1.Observable.throw(error);
    };
    __decorate([
        core_1.ViewChild(forms_1.NgForm),
        __metadata("design:type", forms_1.NgForm)
    ], CalculatorComponent.prototype, "premiumForm", void 0);
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./ClientApp/app/premium-calculator/calculator.component.html")
        }),
        __metadata("design:paramtypes", [premium_calculator_service_1.PremiumCalculatorService])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;


/***/ }),

/***/ "./ClientApp/app/services/data.service.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/services/data.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.get = function (url, params) {
        var options = {};
        this.setHeaders(options);
        return this.http.get(url, options)
            .pipe(operators_1.map(function (res) {
            return res;
        }), operators_1.catchError(this.handleError));
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
            .pipe(operators_1.map(function (res) {
            return res;
        }), operators_1.catchError(this.handleError));
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
        return rxjs_1.throwError(error || 'server error');
    };
    DataService.prototype.doPut = function (url, data, needId, params) {
        var options = {};
        this.setHeaders(options, needId);
        return this.http.put(url, data, options)
            .pipe(operators_1.map(function (res) {
            return res;
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.setHeaders = function (options, needId) {
        options["headers"] = new http_1.HttpHeaders()
            .append('content-type', 'application/json');
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./ClientApp/app/services/premium-calculator.service.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/services/premium-calculator.service.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var data_service_1 = __webpack_require__(/*! ./data.service */ "./ClientApp/app/services/data.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
        return this.service.get(url).pipe(operators_1.map(function (response) {
            return response;
        }));
    };
    PremiumCalculatorService.prototype.calculatePremium = function (premium) {
        var url = this.premiumUrl + '/Calculate';
        return this.service.post(url, premium).pipe(operators_1.map(function (response) {
            return response;
        }));
    };
    PremiumCalculatorService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('BASE_URL')),
        __metadata("design:paramtypes", [data_service_1.DataService, String])
    ], PremiumCalculatorService);
    return PremiumCalculatorService;
}());
exports.PremiumCalculatorService = PremiumCalculatorService;


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");
function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
exports.getBaseUrl = getBaseUrl;
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic(providers).bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Learn\TAL\Src\Web\TAL.UI.Web\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map