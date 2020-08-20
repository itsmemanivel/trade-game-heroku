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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    \n       \n          \n         \n\n\n       \n\n\n\n         \n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n\n    <div style=\"float: right;\" class=\"row\">\n      <div class=\"example-button-container\">\n        <a (click)=\"logout()\"  mat-mini-fab color=\"white\" >\n          <mat-icon>logout</mat-icon>\n        </a>\n      </div>\n    </div>\n    <h1 class=\"display-4\">{{username}}</h1>\n    <p class=\"lead\">Account Balance: <strong class=\"balance\"> ₹ {{ accountBalance}}.00</strong></p>\n\n\n  </div>\n</div>\n\n\n\n\n\n  \n\n<div class=\"container\">\n\n\n\n\n   <!-- Countdown and Period  -->\n  <div class=\"row \">\n    <div class=\"col-6\">\n      <h5 class=\"display-4\">Period</h5>\n      <h1><b>{{currentPeriod}}</b></h1>\n    </div>\n    <div style=\"text-align: right;\" class=\"col-6\">\n      <h5 class=\"display-4\">Count Down</h5>\n      <h1 class=\"display-1\"><b>{{minutes}} : {{seconds}}</b></h1>\n\n    \n    </div>\n  </div>\n\n<!-- color buttons -->\n  <div *ngIf=\"!result\" class=\"row\"> \n\n   \n\n    <div class=\"col-4\">\n      <button (click)=\"btnClicked('green')\" mat-raised-button   type=\"button\" class=\"btn btn-green\">Join Green</button>\n\n    </div>\n    <div style=\"text-align: center;\" class=\"col-4\">\n      <button (click)=\"btnClicked('violet')\" mat-raised-button  type=\"button\" class=\"btn btn-violet\">Join Violet</button>\n\n    </div>\n    <div style=\"text-align: right;\" class=\"col-4\">\n      <button (click)=\"btnClicked('red')\"  mat-raised-button  type=\"button\" class=\"btn btn-red\">Join Red</button>\n\n    </div>\n\n    </div>\n\n    <div *ngIf=\"result\" class=\"row\"> \n      <div class=\"col-4\">\n        <button  mat-raised-button disabled  type=\"button\" class=\"btn btn-green btn-disabled\">Join Green</button>\n  \n      </div>\n      <div style=\"text-align: center;\" class=\"col-4\" class=\"col-4\">\n        <button  mat-raised-button disabled type=\"button\" class=\"btn btn-violet btn-disabled\">Join Violet</button>\n  \n      </div>\n      <div style=\"text-align: right;\"  class=\"col-4\">\n        <button   mat-raised-button disabled type=\"button\" class=\"btn btn-red btn-disabled\">Join Red</button>\n  \n      </div>\n\n    \n  \n      </div>\n\n\n\n\n\n\n  <!-- Number Buttons -->\n\n  <div *ngIf=\"!result\" class=\"row\">\n  <section >\n\n  <div  class=\"example-button-row\">\n\n      <button (click)=\"btnClicked('0')\" mat-raised-button type=\"button\" color=\"primary\" class=\"btn btn-primary\">0</button>       \n      <button (click)=\"btnClicked('1')\" mat-raised-button type=\"button\" color=\"primary\" class=\"btn btn-primary\">1</button>           \n      <button (click)=\"btnClicked('2')\" mat-raised-button type=\"button\" color=\"primary\" class=\"btn btn-primary\">2</button>           \n      <button (click)=\"btnClicked('3')\" mat-raised-button type=\"button\"color=\"primary\" class=\"btn btn-primary\">3</button>         \n      <button (click)=\"btnClicked('4')\" mat-raised-button type=\"button\"color=\"primary\" class=\"btn btn-primary\">4</button>          \n\n  \n  </div>\n\n\n  \n\n  \n\n    <div class=\"example-button-row\">\n  \n        <button (click)=\"btnClicked('5')\" mat-raised-button type=\"button\" color=\"primary\" class=\"btn btn-primary\">5</button>       \n        <button (click)=\"btnClicked('6')\" mat-raised-button type=\"button\" color=\"primary\" class=\"btn btn-primary\">6</button>           \n        <button (click)=\"btnClicked('7')\" mat-raised-button type=\"button\" color=\"primary\" class=\"btn btn-primary\">7</button>           \n        <button (click)=\"btnClicked('8')\" mat-raised-button type=\"button\"color=\"primary\" class=\"btn btn-primary\">8</button>         \n        <button (click)=\"btnClicked('9')\" mat-raised-button type=\"button\"color=\"primary\" class=\"btn btn-primary\">9</button>          \n  \n    \n    </div>\n  \n  \n    \n  \n    </section> \n  </div>\n\n\n  <div *ngIf=\"result\" class=\"row\">\n    <section >\n  \n    <div  class=\"example-button-row\">\n  \n        <button mat-raised-button disabled type=\"button\" color=\"primary\" class=\"btn btn-primary\">0</button>       \n        <button mat-raised-button disabled type=\"button\" color=\"primary\" class=\"btn btn-primary\">1</button>           \n        <button  mat-raised-button  disabled type=\"button\" color=\"primary\" class=\"btn btn-primary\">2</button>           \n        <button  mat-raised-button disabled type=\"button\"color=\"primary\" class=\"btn btn-primary\">3</button>         \n        <button  mat-raised-button disabled type=\"button\"color=\"primary\" class=\"btn btn-primary\">4</button>          \n  \n    \n    </div>\n  \n  \n    \n  \n    \n  \n      <div class=\"example-button-row\">\n    \n          <button mat-raised-button disabled type=\"button\" color=\"primary\" class=\"btn btn-primary\">5</button>       \n          <button mat-raised-button disabled type=\"button\" color=\"primary\" class=\"btn btn-primary\">6</button>           \n          <button  mat-raised-button disabled type=\"button\" color=\"primary\" class=\"btn btn-primary\">7</button>           \n          <button  mat-raised-button disabled type=\"button\"color=\"primary\" class=\"btn btn-primary\">8</button>         \n          <button  mat-raised-button disabled type=\"button\"color=\"primary\" class=\"btn btn-primary\">9</button>          \n    \n      \n      </div>\n    \n    \n      \n    \n      </section> \n    </div>\n\n  <!-- Table -->\n\n  <div class=\"row\">\n\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Period</th>\n        <th scope=\"col\">Number</th>\n        <th scope=\"col\">Result</th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"records != undefined\">\n      <tr  *ngFor=\"let record of records let i= index;\" [attr.data-index]=\"i\">\n        <th scope=\"row\">{{record.period}}</th>\n        <td>{{record.number}}</td>\n        <td>\n          <span *ngIf=\"record.result == 'odd'\" class=\"green-dot\"></span>\n          <span *ngIf=\"record.result == 'even'\" class=\"red-dot\"></span> \n          <span *ngIf=\"record.number == 5\" class=\"violet-dot\"></span>\n          <span *ngIf=\"record.number == 0\" class=\"violet-dot\"></span>\n        </td>\n        \n      </tr>\n    </tbody>\n  </table>\n\n  </div>\n</div>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n         \n<div style=\"height: 10%; \" class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n\n    <div style=\"float: right;\" class=\"row\">\n      <!-- <div class=\"example-button-container\">\n        <a (click)=\"logout()\"  mat-mini-fab color=\"white\" >\n          <mat-icon>logout</mat-icon>\n        </a>\n      </div> -->\n    </div>\n    <h1 style=\"text-align: center; font-weight: bold;\" class=\"display-1\">LOGIN</h1>\n\n\n  </div>\n</div>\n\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm\">\n        \n        </div>\n        <div class=\"col-sm-6\">\n            <!-- <form> -->\n\n                <div *ngIf=\"success ==1\" class=\"alert alert-success\" role=\"alert\">\n                    Successfully! Logedin.\n                </div>\n                <div *ngIf=\"success ==2\" class=\"alert alert-danger\" role=\"alert\">\n                   Invalid! User\n                </div>  \n\n                \n                <div class=\"form-group\">\n                  <label for=\"exampleInputUsername1\">Username</label>\n                  <input type=\"name\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Username\">\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">USERNAME: use sample1, 2, 3 for testing</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"exampleInputPassword1\">Password</label>\n                  <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n                  <small id=\"emailHelp\" class=\"form-text text-muted\">PASSWORD: use sample1, 2, 3 for testing</small>\n\n                </div>\n                <!-- <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                  <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n                </div> -->\n                <br>\n                <button mat-raised-button disabled *ngIf=\"(!username )|| (!password)\" type=\"submit\" (click)=\"login(username, password)\"  class=\"btn btn-primary btn-block\">Submit</button>\n                <button style=\"background-color: blue;color: white;\" mat-raised-button  *ngIf=\"(username ) && (password)\" type=\"submit\" (click)=\"login(username, password)\"  class=\"btn btn-primary btn-block\">Submit</button>\n\n             <!-- </form> -->\n        </div>\n        <div class=\"col-sm\">\n          \n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");






const routes = [
    { path: '', component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Trade Game';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _directive_count_down_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/count-down.directive */ "./src/app/directive/count-down.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
            _directive_count_down_directive__WEBPACK_IMPORTED_MODULE_6__["CountDownDirective"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]
        ],
        exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/directive/count-down.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directive/count-down.directive.ts ***!
  \***************************************************/
/*! exports provided: CountDownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownDirective", function() { return CountDownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CountDownDirective = class CountDownDirective {
    constructor() {
        this._counterSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._subscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._subscription = this._counterSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ interval, count }) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.value.emit(--count))))).subscribe();
    }
    ngOnChanges() {
        this._counterSource$.next({ count: this.counter, interval: this.interval });
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CountDownDirective.prototype, "counter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CountDownDirective.prototype, "interval", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CountDownDirective.prototype, "value", void 0);
CountDownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[counter]'
    })
], CountDownDirective);



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\n\n\n    margin-bottom: 20px;\n}\n\n.lead{\n    \n   font-size: 15px;\n   /* font-weight: bold; */\n}\n\n.balance{\n  font-size: 20px;\n   font-weight: bold;\n}\n\n.btn-violet {\n\n    background-color: rgb(199, 25, 199);\n    color: white;\n    text-align: center\n  \n  }\n\n.btn-red {\n\n  background-color: rgb(238, 53, 53);\n  color: white;\n  text-align: right\n}\n\n.btn-green {\n\n  background-color: rgb(32, 233, 32);\n  color: white;\n  text-align: left !important;\n}\n\n.btn-red:hover {\n\n  background-color: rgb(141, 13, 13);\n  color: white;\n}\n\n.btn-green:hover {\n\n  background-color: rgb(13, 139, 13);\n  color: white;\n}\n\n.btn-violet:hover {\n\n  background-color: rgb(119, 0, 119);\n  color: white;\n}\n\n.btn-primary {\n\n  background-color: rgb(34, 47, 235);\n  color: white;\n\n}\n\n.btn-primary:hover {\n\n  background-color: rgb(9, 18, 141);\n  color: white;\n\n}\n\n/* .btn-primary{\n\n    padding: 10px 20px 10px 20px;\n\n    margin:10px;\n}  */\n\n/* .number-buttons{\n\n  text-align: right !important;\n\n} */\n\nsection {\n    display: table;\n    \n  }\n\n.example-label {\n    display: table-cell;\n    font-size: 14px;\n    margin-left: 8px;\n    min-width: 120px;\n    text-align: center;\n  }\n\n.example-button-row {\n    display: table-cell;\n    width: 490px;\n    text-align: right;\n\n  }\n\n.example-button-row .mat-button-base {\n    margin: 8px 8px 8px 0;\n  }\n\n.example-flex-container {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n\n.example-button-container {\n    display: flex;\n    justify-content: center;\n    width: 120px;\n    text-align: center !important;\n\n  }\n\n.green-dot {\n\n  height: 15px;\n  width: 15px;\n  background-color:rgb(13, 139, 13) ;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right:5px ;\n}\n\n.red-dot {\n\n  height: 15px;\n  width: 15px;\n  background-color:rgb(238, 53, 53) ;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right:5px ;\n}\n\n.violet-dot {\n\n  height: 15px;\n  width: 15px;\n  background-color:rgb(199, 25, 199) ;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right:5px ;\n}\n\n@media only screen and (max-width: 768px) {\n\n\n  .example-button-row {\n    display: table-cell;\n    width: 490px;\n    text-align: center;\n\n  }\n\n  .btn-violet {\n\n    background-color: rgb(199, 25, 199);\n    color: white;\n    text-align: center\n  \n  }\n\n.btn-red {\n\n  background-color: rgb(238, 53, 53);\n  color: white;\n  text-align: center\n}\n\n.btn-green {\n\n  background-color: rgb(32, 233, 32);\n  color: white;\n  text-align: center\n}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7R0FFRyxlQUFlO0dBQ2YsdUJBQXVCO0FBQzFCOztBQUNBO0VBQ0UsZUFBZTtHQUNkLGlCQUFpQjtBQUNwQjs7QUFDQTs7SUFFSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaOztFQUVGOztBQUVGOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1o7QUFDRjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTs7QUFFZDs7QUFFQTs7RUFFRSxpQ0FBaUM7RUFDakMsWUFBWTs7QUFFZDs7QUFHQTs7Ozs7SUFLSTs7QUFFSjs7OztHQUlHOztBQUVIO0lBQ0ksY0FBYzs7RUFFaEI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7O0VBRW5COztBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osNkJBQTZCOztFQUUvQjs7QUFDRjs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFJQTs7O0VBR0U7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjs7RUFFcEI7O0VBRUE7O0lBRUUsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWjs7RUFFRjs7QUFFRjs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWjtBQUNGOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xuXG5cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGVhZHtcbiAgICBcbiAgIGZvbnQtc2l6ZTogMTVweDtcbiAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xufVxuLmJhbGFuY2V7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ0bi12aW9sZXQge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMjUsIDE5OSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICBcbiAgfVxuXG4uYnRuLXJlZCB7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNTMsIDUzKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiByaWdodFxufVxuXG4uYnRuLWdyZWVuIHtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDIzMywgMzIpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1yZWQ6aG92ZXIge1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDEsIDEzLCAxMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1ncmVlbjpob3ZlciB7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCAxMzksIDEzKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLXZpb2xldDpob3ZlciB7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExOSwgMCwgMTE5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLXByaW1hcnkge1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgNDcsIDIzNSk7XG4gIGNvbG9yOiB3aGl0ZTtcblxufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAxOCwgMTQxKTtcbiAgY29sb3I6IHdoaXRlO1xuXG59XG5cblxuLyogLmJ0bi1wcmltYXJ5e1xuXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcblxuICAgIG1hcmdpbjoxMHB4O1xufSAgKi9cblxuLyogLm51bWJlci1idXR0b25ze1xuXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG5cbn0gKi9cblxuc2VjdGlvbiB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgXG4gIH1cbiAgXG4gIC5leGFtcGxlLWxhYmVsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuZXhhbXBsZS1idXR0b24tcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiA0OTBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICB9XG4gIFxuICAuZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG5cbiAgfVxuLmdyZWVuLWRvdCB7XG5cbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTMsIDEzOSwgMTMpIDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDo1cHggO1xufVxuXG4ucmVkLWRvdCB7XG5cbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjM4LCA1MywgNTMpIDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDo1cHggO1xufVxuXG4udmlvbGV0LWRvdCB7XG5cbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTk5LCAyNSwgMTk5KSA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6NXB4IDtcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblxuXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgd2lkdGg6IDQ5MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICB9XG5cbiAgLmJ0bi12aW9sZXQge1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMjUsIDE5OSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICBcbiAgfVxuXG4uYnRuLXJlZCB7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNTMsIDUzKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmJ0bi1ncmVlbiB7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAyMzMsIDMyKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxufSJdfQ== */");

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: Payment, GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





class Payment {
}
let GameComponent = class GameComponent {
    constructor(service, authService, router) {
        this.service = service;
        this.authService = authService;
        this.router = router;
        this.result = false;
        this.payment = new Payment;
    }
    ngOnInit() {
        this.username = this.authService.currentUserValue.username;
        this.userID = this.authService.currentUserValue._id;
        setInterval(() => {
            this.getTimer();
        }, 1000);
        this.getRecords();
        this.getBalance();
        this.getBalance();
        this.getTimer();
        console.log(this.username);
    }
    getRecords() {
        this.service.getRecords().subscribe(res => {
            // console.log(res);
            // var records:any = res.data;
            this.records = res.data;
            // console.log(this.records);
            this.currentPeriod = res.data[0].period + 1;
        });
    }
    getTimer() {
        this.service.getTimer().subscribe(res => {
            // console.log(res);
            this.getBalance();
            this.minutes = res.mins;
            this.seconds = res.secs;
            if (this.minutes == '00' && this.seconds <= '30') {
                this.result = true;
                this.getRecords();
            }
            else {
                this.result = false;
            }
            if (this.minutes == '00' && this.seconds <= '25') {
                this.choosedValue();
            }
            //  console.log(this.minutes+ ":" + this.seconds);
        });
    }
    getBalance() {
        this.service.getPayments(this.userID).subscribe(res => {
            this.accountBalance = res.data.amount;
            // console.log(this.accountBalance);
            this.updateBalance = res.data.amount;
        });
    }
    btnClicked(value) {
        console.log(value);
        localStorage.setItem("choosed", value);
    }
    choosedValue() {
        var value = localStorage.getItem("choosed");
        // if(this.records[0].result == "odd"  && (value == "green")){
        //   console.log('HI')
        // }
        // console.log(this.records[0]);
        if (value != null) {
            if (this.records[0].number == value) {
                var amount = this.updateBalance * 9;
                // console.log(amount);
                this.service.updatePayments(this.userID, amount).subscribe(res => {
                    localStorage.removeItem("choosed");
                });
            }
            else if ((this.records[0].result == "odd") && (value == "green")) {
                // console.log(98*2);
                var amount = this.updateBalance * 2;
                console.log(amount);
                this.service.updatePayments(this.userID, amount).subscribe(res => {
                    localStorage.removeItem("choosed");
                });
            }
            else if ((this.records[0].result == "odd") && (value == '5')) {
                // console.log(98*1.5);
                var amount = this.updateBalance * 1.5;
                // console.log(amount);
                this.service.updatePayments(this.userID, amount).subscribe(res => {
                    localStorage.removeItem("choosed");
                });
            }
            else if ((this.records[0].result == "even") && (value == "red")) {
                // console.log(98*2);
                var amount = this.updateBalance * 2;
                console.log(amount);
                this.service.updatePayments(this.userID, amount).subscribe(res => {
                    localStorage.removeItem("choosed");
                });
            }
            else if ((this.records[0].result == "odd") && (value == '0')) {
                // console.log(98*1.5);
                var amount = this.updateBalance * 1.5;
                // console.log(amount);
                this.service.updatePayments(this.userID, amount).subscribe(res => {
                    localStorage.removeItem("choosed");
                });
            }
            else if ((value == "violet") && ((this.records[0].number == 5) || (this.records[0].number == 0))) {
                // console.log(98*4.5);
                var amount = this.updateBalance * 4.5;
                // console.log(amount);
                console.log(this.userID);
                this.service.updatePayments(this.userID, amount).subscribe(res => {
                    localStorage.removeItem("choosed");
                });
            }
            else {
                localStorage.removeItem("choosed");
                console.log(this.userID);
            }
        }
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['login']);
        window.location.reload();
    }
};
GameComponent.ctorParameters = () => [
    { type: _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-sm-6{\n\n   margin-top: 20%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyxlQUFlOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLXNtLTZ7XG5cbiAgIG1hcmdpbi10b3A6IDIwJTtcblxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
        this.success = 0;
    }
    ngOnInit() {
    }
    login(username, password) {
        this.authService.login(username).subscribe(res => {
            if ((res.data != null) && (res.data.password == password)) {
                this.success = 1;
                this.route.navigate(['game']);
                console.log(res);
                console.log(res.data.password);
                console.log(password);
            }
            else {
                this.success = 2;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: User, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






class User {
}
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // private readonly URL = 'http://localhost:3000/'; //dev mode
        this.URL = 'http://ec2-18-191-1-193.us-east-2.compute.amazonaws.com/'; //prod mode
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    login(username) {
        const body = { username: username };
        return this.http.post(this.URL + 'users/getbyID/', body, this.headers)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            localStorage.setItem('currentUser', JSON.stringify(data.data));
            this.currentUserSubject.next(data.data);
            //  window.location.reload();
            return data;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('choosed');
        this.currentUserSubject.next(null);
    }
    canActivate(route, state) {
        const currentUser = this.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BackendService = class BackendService {
    constructor(http) {
        this.http = http;
        // private readonly URL = 'http://localhost:3000/'; //dev mode
        this.URL = 'http://ec2-18-191-1-193.us-east-2.compute.amazonaws.com/'; //prod mode
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getTimer() {
        // Using the POST method
        return this.http.get(this.URL + 'timer/get', this.headers);
    }
    getRecords() {
        return this.http.get(this.URL + 'records/get', this.headers);
    }
    getPayments(userID) {
        return this.http.post(this.URL + 'payments/getbyID/' + userID, this.headers);
    }
    updatePayments(userID, amount) {
        const body = { userID: userID, amount: amount };
        return this.http.post(this.URL + 'payments/update/', body, this.headers);
    }
};
BackendService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BackendService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/veluvijay/projects/trade-game/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map