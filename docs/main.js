(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: block;\r\n  margin: 1rem;\r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title is-1\">{{ title }}</h1>\r\n<ng-container *ngIf=\"(loading$ | async); else: app\">\r\n  <span class=\"icon\"> <i class=\"fas fa-spinner fa-pulse\"></i> </span>\r\n  <p>loading cools stuffs ...</p>\r\n</ng-container>\r\n<ng-template #app>\r\n  <ae-product-list></ae-product-list>\r\n  <ae-cart></ae-cart>\r\n</ng-template>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/state */ "./src/app/product/state/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_productQuery) {
        this._productQuery = _productQuery;
        this.title = 'akita-example';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loading$ = this._productQuery.selectLoading();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ae-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_product_state__WEBPACK_IMPORTED_MODULE_1__["ProductQuery"]])
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
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart/cart.module */ "./src/app/cart/cart.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6___default.a, 'es');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_4__["ProductModule"], _cart_cart_module__WEBPACK_IMPORTED_MODULE_0__["CartModule"]],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/cart/components/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]],
            exports: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/cart/components/cart/cart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cart/components/cart/cart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/cart/components/cart/cart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cart/components/cart/cart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 class=\"title is-2\">Items in Cart {{ cartLength }}</h2>\n</div>\n<pre>\n  {{ cart$ | async | json: 2 }}\n</pre>\n"

/***/ }),

/***/ "./src/app/cart/components/cart/cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cart/components/cart/cart.component.ts ***!
  \********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _state_cart_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../state/cart.query */ "./src/app/cart/state/cart.query.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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



var CartComponent = /** @class */ (function () {
    function CartComponent(_cartQuery) {
        this._cartQuery = _cartQuery;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart$ = this._cartQuery.selectAll();
        this.cart$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (cart) { return cart.length > 0; }))
            .subscribe(function (cart) {
            return (_this.cartLength = cart
                .map(function (ci) { return ci.quantity; })
                .reduce(function (q0, q1) { return q0 + q1; }));
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ae-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_state_cart_query__WEBPACK_IMPORTED_MODULE_0__["CartQuery"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cart/state/cart.model.ts":
/*!******************************************!*\
  !*** ./src/app/cart/state/cart.model.ts ***!
  \******************************************/
/*! exports provided: createCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCartItem", function() { return createCartItem; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function createCartItem(params) {
    var total = getPrice(params);
    return __assign({ total: total, quantity: 1 }, params);
}
function getPrice(params) {
    if (!params) {
        return 0;
    }
    var quantity = params.quantity || 1;
    return params.price ? params.price * quantity : 0;
}


/***/ }),

/***/ "./src/app/cart/state/cart.query.ts":
/*!******************************************!*\
  !*** ./src/app/cart/state/cart.query.ts ***!
  \******************************************/
/*! exports provided: CartQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartQuery", function() { return CartQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.store */ "./src/app/cart/state/cart.store.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartQuery = /** @class */ (function (_super) {
    __extends(CartQuery, _super);
    function CartQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    CartQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_cart_store__WEBPACK_IMPORTED_MODULE_2__["CartStore"]])
    ], CartQuery);
    return CartQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"]));



/***/ }),

/***/ "./src/app/cart/state/cart.service.ts":
/*!********************************************!*\
  !*** ./src/app/cart/state/cart.service.ts ***!
  \********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.query */ "./src/app/cart/state/cart.query.ts");
/* harmony import */ var _cart_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.store */ "./src/app/cart/state/cart.store.ts");
/* harmony import */ var _cart_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.model */ "./src/app/cart/state/cart.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartService = /** @class */ (function () {
    function CartService(_cartQuery, _cartStore, _http) {
        this._cartQuery = _cartQuery;
        this._cartStore = _cartStore;
        this._http = _http;
    }
    CartService.prototype.get = function () {
        // this.http.get().subscribe((entities: ServerResponse) => {
        // this.cartStore.set(entities);
        // });
    };
    CartService.prototype.addProdcutToCart = function (product) {
        var productId = product.id;
        var price = product.price;
        var findCartItem = this._cartQuery.getEntity(productId);
        if (findCartItem) {
            return this._cartStore.updateQuantity(productId);
        }
        var cartItem = Object(_cart_model__WEBPACK_IMPORTED_MODULE_4__["createCartItem"])({ productId: productId, price: price });
        return this._cartStore.add(cartItem);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_cart_query__WEBPACK_IMPORTED_MODULE_2__["CartQuery"],
            _cart_store__WEBPACK_IMPORTED_MODULE_3__["CartStore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/state/cart.store.ts":
/*!******************************************!*\
  !*** ./src/app/cart/state/cart.store.ts ***!
  \******************************************/
/*! exports provided: CartStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStore", function() { return CartStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartStore = /** @class */ (function (_super) {
    __extends(CartStore, _super);
    function CartStore() {
        return _super.call(this) || this;
    }
    CartStore.prototype.updateQuantity = function (productId) {
        this.update(productId, function (entity) {
            var quantity = entity.quantity + 1;
            var total = entity.price * quantity;
            return __assign({}, entity, { quantity: quantity, total: total });
        });
    };
    CartStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'cart', idKey: 'productId' }),
        __metadata("design:paramtypes", [])
    ], CartStore);
    return CartStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"]));



/***/ }),

/***/ "./src/app/product/components/product-list/product-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/product/components/product-list/product-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: inline-block;\r\n}\r\n.product-list {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n}\r\n"

/***/ }),

/***/ "./src/app/product/components/product-list/product-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/product/components/product-list/product-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title is-2\">List Products</h2>\n<div class=\"product-list\">\n  <ae-product\n    *ngFor=\"let p of (products$ | async)\"\n    [product]=\"p\"\n  ></ae-product>\n</div>\n"

/***/ }),

/***/ "./src/app/product/components/product-list/product-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/product/components/product-list/product-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./src/app/product/state/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_productQuery) {
        this._productQuery = _productQuery;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products$ = this._productQuery.selectAll();
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ae-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product/components/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_state__WEBPACK_IMPORTED_MODULE_1__["ProductQuery"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/components/product/product.component.css":
/*!******************************************************************!*\
  !*** ./src/app/product/components/product/product.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  border: solid salmon 1px;\r\n  display: flex;\r\n  flex-flow: row;\r\n  width: 100%;\r\n}\r\n@media (min-width: 768px) {\r\n  :host {\r\n    width: 50%;\r\n  }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n  :host {\r\n    width: 33%;\r\n  }\r\n}\r\n@media screen and (min-width: 1440px) {\r\n  :host {\r\n    width: 25%;\r\n  }\r\n}\r\ndiv {\r\n  min-width: 150px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/product/components/product/product.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/product/components/product/product.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img [src]=\"imgSrc\" alt=\"photo og product\">\n</div>\n<div>\n  <p>{{name}}</p>\n  <p>{{description}}</p>\n  <p>{{price | currency }}</p>\n  <button class=\"button is-primary\" (click)=\"addCart()\"> add </button>\n</div>\n"

/***/ }),

/***/ "./src/app/product/components/product/product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/product/components/product/product.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_state_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../cart/state/cart.service */ "./src/app/cart/state/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(_cartService) {
        this._cartService = _cartService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.name = this.product.name;
        this.description = this.product.desc;
        this.imgSrc = this.product.imageUrl;
        this.price = this.product.price;
    };
    ProductComponent.prototype.addCart = function () {
        this._cartService.addProdcutToCart(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ae-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/product/components/product/product.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/product/components/product-list/product-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
            declarations: [_components_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]],
            exports: [_components_product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/state/index.ts":
/*!****************************************!*\
  !*** ./src/app/product/state/index.ts ***!
  \****************************************/
/*! exports provided: ProductQuery, ProductStore, ProductService, createProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.query */ "./src/app/product/state/product.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductQuery", function() { return _product_query__WEBPACK_IMPORTED_MODULE_0__["ProductQuery"]; });

/* harmony import */ var _product_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.store */ "./src/app/product/state/product.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductStore", function() { return _product_store__WEBPACK_IMPORTED_MODULE_1__["ProductStore"]; });

/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/product/state/product.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]; });

/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.model */ "./src/app/product/state/product.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProduct", function() { return _product_model__WEBPACK_IMPORTED_MODULE_3__["createProduct"]; });







/***/ }),

/***/ "./src/app/product/state/product.model.ts":
/*!************************************************!*\
  !*** ./src/app/product/state/product.model.ts ***!
  \************************************************/
/*! exports provided: createProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProduct", function() { return createProduct; });
function createProduct(params) {
    return {};
}


/***/ }),

/***/ "./src/app/product/state/product.query.ts":
/*!************************************************!*\
  !*** ./src/app/product/state/product.query.ts ***!
  \************************************************/
/*! exports provided: ProductQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuery", function() { return ProductQuery; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _product_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.store */ "./src/app/product/state/product.store.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductQuery = /** @class */ (function (_super) {
    __extends(ProductQuery, _super);
    function ProductQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        return _this;
    }
    ProductQuery = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_product_store__WEBPACK_IMPORTED_MODULE_2__["ProductStore"]])
    ], ProductQuery);
    return ProductQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"]));



/***/ }),

/***/ "./src/app/product/state/product.service.ts":
/*!**************************************************!*\
  !*** ./src/app/product/state/product.service.ts ***!
  \**************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.store */ "./src/app/product/state/product.store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(productStore, http) {
        this.productStore = productStore;
        this.http = http;
        if (this.productStore.isPristine) {
            this.initData();
        }
    }
    ProductService.prototype.get = function () {
        var _this = this;
        this.http
            .get('https://5bb0aa726418d70014071ba2.mockapi.io/cool-phone')
            .subscribe(function (products) {
            _this.productStore.set(products);
        });
    };
    ProductService.prototype.add = function () {
        // this.http.post().subscribe((entity: ServerResponse) => {
        // this.productStore.add(entity);
        // });
        // this.productStore.add({ ID: 0 });
    };
    ProductService.prototype.initData = function () {
        this.get();
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_product_store__WEBPACK_IMPORTED_MODULE_2__["ProductStore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product/state/product.store.ts":
/*!************************************************!*\
  !*** ./src/app/product/state/product.store.ts ***!
  \************************************************/
/*! exports provided: ProductStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStore", function() { return ProductStore; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductStore = /** @class */ (function (_super) {
    __extends(ProductStore, _super);
    function ProductStore() {
        return _super.call(this) || this;
    }
    ProductStore = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({ name: 'product' }),
        __metadata("design:paramtypes", [])
    ], ProductStore);
    return ProductStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["EntityStore"]));



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
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["enableAkitaProdMode"])();
}
Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["persistState"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\@workspace\akita-example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map