webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_book_component__ = __webpack_require__("../../../../../src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_create_book_create_component__ = __webpack_require__("../../../../../src/app/book-create/book-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__book_edit_book_edit_component__ = __webpack_require__("../../../../../src/app/book-edit/book-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tasks_tasks_component__ = __webpack_require__("../../../../../src/app/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    {
        path: 'homes',
        component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
        data: { title: 'Home Page' }
    },
    {
        path: 'skills',
        component: __WEBPACK_IMPORTED_MODULE_11__skills_skills_component__["a" /* SkillsComponent */],
        data: { title: 'Skills Page' }
    },
    {
        path: 'task',
        component: __WEBPACK_IMPORTED_MODULE_12__tasks_tasks_component__["a" /* TasksComponent */],
        data: { title: 'Tasks Page' }
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
        data: { title: 'Profile Page' }
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
        data: { title: "Login Page" }
    },
    {
        path: 'tasks',
        component: __WEBPACK_IMPORTED_MODULE_12__tasks_tasks_component__["a" /* TasksComponent */],
        data: { title: 'Task List' }
    },
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_6__book_book_component__["a" /* BookComponent */],
        data: { title: 'Book List' }
    },
    {
        path: 'book-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__book_detail_book_detail_component__["a" /* BookDetailComponent */],
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: __WEBPACK_IMPORTED_MODULE_8__book_create_book_create_component__["a" /* BookCreateComponent */],
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__book_edit_book_edit_component__["a" /* BookEditComponent */],
        data: { title: 'Edit Book' }
    },
    { path: '',
        redirectTo: '/homes',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_7__book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__book_edit_book_edit_component__["a" /* BookEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/book-create/book-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-create/book-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Add New Book</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form (ngSubmit)=\"saveBook()\" #bookForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">ISBN</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Title</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Author</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Published Year</label>\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.published_year\" name=\"published_year\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Publisher</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid\">Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book-create/book-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookCreateComponent = (function () {
    function BookCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.book = {};
    }
    BookCreateComponent.prototype.ngOnInit = function () {
    };
    BookCreateComponent.prototype.saveBook = function () {
        var _this = this;
        this.http.post('/book', this.book)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-create',
            template: __webpack_require__("../../../../../src/app/book-create/book-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-create/book-create.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book-detail/book-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{ book.title }}</h1>\r\n  <dl class=\"list\">\r\n    <dt>ISBN</dt>\r\n    <dd>{{ book.isbn }}</dd>\r\n    <dt>Author</dt>\r\n    <dd>{{ book.author }}</dd>\r\n    <dt>Publish Year</dt>\r\n    <dd>{{ book.published_year }}</dd>\r\n    <dt>Publisher</dt>\r\n    <dd>{{ book.publisher }}</dd>\r\n    <dt>Update Date</dt>\r\n    <dd>{{ book.updated_date | date:'short' }}</dd>\r\n  </dl>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <a [routerLink]=\"['/book-edit', book._id]\" class=\"btn btn-success\">EDIT</a>\r\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteBook(book._id)\">DELETE</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book-detail/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = (function () {
    function BookDetailComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.book = {};
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBookDetail(this.route.snapshot.params['id']);
    };
    BookDetailComponent.prototype.getBookDetail = function (id) {
        var _this = this;
        this.http.get('/book/' + id).subscribe(function (data) {
            _this.book = data;
        });
    };
    BookDetailComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.http.delete('/book/' + id)
            .subscribe(function (res) {
            _this.router.navigate(['/books']);
        }, function (err) {
            console.log(err);
        });
    };
    BookDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-detail',
            template: __webpack_require__("../../../../../src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-detail/book-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book-edit/book-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-edit/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Edit Book</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form (ngSubmit)=\"updateBook(book._id)\" #bookForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">ISBN</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Title</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Author</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Published Year</label>\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"book.published_year\" name=\"published_year\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Publisher</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid\">Update</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book-edit/book-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookEditComponent = (function () {
    function BookEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.book = {};
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.getBook(this.route.snapshot.params['id']);
    };
    BookEditComponent.prototype.getBook = function (id) {
        var _this = this;
        this.http.get('/book/' + id).subscribe(function (data) {
            _this.book = data;
        });
    };
    BookEditComponent.prototype.updateBook = function (id) {
        var _this = this;
        this.book.updated_date = Date.now();
        this.http.put('/book/' + id, this.book)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-edit',
            template: __webpack_require__("../../../../../src/app/book-edit/book-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-edit/book-edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book/book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Book List\r\n    <a [routerLink]=\"['/book-create']\" class=\"btn btn-default btn-lg\">\r\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n    </a>\r\n  </h1>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Title</th>\r\n        <th>Author</th>\r\n        <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let book of books\">\r\n        <td>{{ book.title }}</td>\r\n        <td>{{ book.author }}</td>\r\n        <td><a [routerLink]=\"['/book-details', book._id]\">Show Detail</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookComponent = (function () {
    function BookComponent(http) {
        this.http = http;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/book').subscribe(function (data) {
            console.log(data);
            _this.books = data;
        });
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("../../../../../src/app/book/book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book/book.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    /* Remove the navbar's default rounded borders and increase the bottom margin */ \r\n    nav.navbar.navbar-inverse {\r\n        margin-bottom: 50px;\r\n        border-radius: 0;\r\n        \r\n      \r\n      }\r\n      ul{\r\n        display: inline !important;\r\n      }\r\n      \r\n      /* Remove the jumbotron's default bottom margin */ \r\n       div.jumbotron {\r\n        background: #c0dbfc;\r\n        margin-bottom: 0;\r\n        padding-top: 0px;\r\n        padding-bottom: 0px;\r\n        font-family: sans-serif;\r\n        \r\n  \r\n      }\r\n     \r\n      /* Add a gray background color and some padding to the footer */\r\n      footer {\r\n        background-color: #f2f2f2;\r\n        padding: 25px;\r\n        \r\n        \r\n      }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- <title>Bootstrap Example</title> -->\r\n  <!-- <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> -->\r\n  <!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script> -->\r\n\r\n<div class=\"jumbotron\">\r\n  <div class=\"container text-center\">\r\n    <h1>World of Wellness</h1>      \r\n    <p><b>Leading to a Better You</b></p>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>                        \r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Logo</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a href=\"#\">Home</a></li>\r\n        <li><a [routerLink]=\"['/tasks']\" href=\"#\">Tasks</a></li>\r\n        <li><a [routerLink]=\"['/skills']\" href=\"#\">Modules</a></li>\r\n        <!-- <li><a href=\"#\">About</a></li>        -->\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <!-- <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Account Settings</a></li>\r\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Help</a></li> -->\r\n        <li><a [routerLink]=\"['/profile']\" href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Profile</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<link href=\"//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(http) {
        this.http = http;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/home').subscribe(function (data) {
            console.log(data);
            _this.homes = data;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\r\n    background-color: green; /* for vizualization purposes */\r\n    text-align: center;\r\n  }\r\n  #yourdiv {\r\n    background-color: red; /* for vizualization purposes */\r\n    display: inline-block;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div class=\"span3\">\r\n    <h2>Login</h2>\r\n    <form>\r\n      <label>GamerTag:</label>\r\n      <input type=\"text\" name=\"username\" class=\"span3\">\r\n      <label>Password:</label>\r\n      <input type=\"password\" name=\"password\" class=\"span3\">\r\n      <button class=\"btn btn-primary\">Login</button>\r\n      <!-- <input type=\"submit\" value=\"Sign up\" class=\"btn btn-primary\"> -->\r\n      <div class=\"clearfix\"></div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapper {\r\n    background-color: green; /* for vizualization purposes */\r\n    text-align: center;\r\n  }\r\n  #yourdiv {\r\n    background-color: red; /* for vizualization purposes */\r\n    display: inline-block;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div id=\"wrapper\"> \r\n<div id=\"yourdiv\">\r\n      <a class='btn btn-default'[routerLink]=\"['/login']\" style='width:80px'>Log in</a>\r\n      <a class='btn btn-default'[routerLink]=\"['/signup']\" style='width:80px'>Sign up</a>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div class=\"container\">\r\n  \r\n  <div style=\"position:relative; top:200px;\">CR</div> \r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"panel panel-primary\">\r\n          <div class=\"panel-heading\">Wisdom</div>\r\n          <div class=\"panel-body\"><img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n          <div class=\"panel-footer\">      \r\n  \r\n          <progress value=\"0\" max=\"100\" id=p1>50%</progress>\r\n          <input type=button value='Increse'></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <div class=\"panel panel-danger\">\r\n          <div class=\"panel-heading\">Intelgence</div>\r\n          <div class=\"panel-body\"><img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n          <div class=\"panel-footer\">\r\n            \r\n            <progress value=\"0\" max=\"100\" id=p1>50%</progress>\r\n            <input type=button value='Increse'>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <div class=\"panel panel-success\">\r\n          <div class=\"panel-heading\">Charisma</div>\r\n          <div class=\"panel-body\"><img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n          <div class=\"panel-footer\">        \r\n  \r\n            <progress value=\"0\" max=\"100\" id=p2>50%</progress>\r\n            <input type=button value='Increse' ></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div><br>\r\n  \r\n  <div class=\"container\">    \r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"panel panel-primary\">\r\n          <div class=\"panel-heading\">Strength</div>\r\n          <div class=\"panel-body\"><img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n          <div class=\"panel-footer\">         \r\n  \r\n          <progress value=\"0\" max=\"100\" id=p1>50%</progress>\r\n          <input type=button value='Increse'></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <div class=\"panel panel-primary\">\r\n          <div class=\"panel-heading\">Dexterity</div>\r\n          <div class=\"panel-body\"><img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n          <div class=\"panel-footer\">         \r\n  \r\n          <progress value=\"0\" max=\"100\" id=p1>50%</progress>\r\n          <input type=button value='Increse'></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <div class=\"panel panel-primary\">\r\n          <div class=\"panel-heading\">Constitution</div>\r\n          <div class=\"panel-body\"><img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></div>\r\n          <div class=\"panel-footer\">         \r\n  \r\n          <progress value=\"0\" max=\"100\" id=p1>50%</progress>\r\n          <input type=button value='Increse'></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div><br><br>\r\n  \r\n  <footer class=\"container-fluid text-center\">\r\n  </footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Include the padding and border in an element's total width and height */\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\ntable{\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    float: center;\r\n    width:100%;\r\n}\r\n\r\n.header{\r\n    font-size: 20px;\r\n}\r\n/* Remove margins and padding from the list */\r\ntbody {\r\n    margin: 10;\r\n    padding: 10;\r\n}\r\n\r\n/* Style the list items */\r\ntbody tr {\r\n    cursor: pointer;\r\n    position: relative;\r\n    padding: 12px 8px 12px 40px;\r\n    background: #eee;\r\n    font-size: 18px;\r\n    transition: 0.2s;\r\n    padding: 10;\r\n    text-align: center;\r\n\r\n    /* make the list items unselectable */\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n/* Set all odd list items to a different color (zebra-stripes) */\r\ntbody tr:nth-child(odd) {\r\n    background: #f9f9f9;\r\n}\r\n\r\n/* Darker background-color on hover */\r\ntbody tr:hover {\r\n    background: #ddd;\r\n}\r\n\r\n/* When ctdcked on, add a background color and strike out text */\r\ntbody tr.checked {\r\n    background: #888;\r\n    color: #fff;\r\n    text-decoration: tdne-through;\r\n}\r\n\r\n/* Add a \"checked\" mark when ctdcked on */\r\ntbody tr.checked::before {\r\n    content: '';\r\n    position: absolute;\r\n    border-color: #fff;\r\n    border-style: sotdd;\r\n    border-width: 0 2px 2px 0;\r\n    top: 10px;\r\n    left: 16px;\r\n    transform: rotate(45deg);\r\n    height: 15px;\r\n    width: 7px;\r\n}\r\n\r\n/* Style the input */\r\ninput {\r\n    border: none;\r\n    width: 75%;\r\n    padding: 10px;\r\n    float: left;\r\n    font-size: 16px;\r\n}\r\n\r\n/* Style the \"Add\" button */\r\n.addBtn {\r\n    padding: 10px;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #d9d9d9;\r\n    color: #555;\r\n    float: left;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.addBtn:hover {\r\n    background-color: #bbb;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<div>\r\n  <table>\r\n    <tbody>\r\n      <tr>\r\n        <td><label class=\"header\">Daily Goal: </label>\r\n            <label>Take your meds today!</label>\r\n        </td>\r\n        <td>\r\n          <Button class=\"addBtn\">\r\n            <span class=\"glyphicon glyphicon-check\"></span>\r\n          </Button>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <label>Go for a run</label>\r\n        </td>\r\n        <td>\r\n          <Button class=\"addBtn\">\r\n            <span class=\"glyphicon glyphicon-check\"></span>\r\n          </Button>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n          <td>\r\n            <label>Eat Healthy</label>\r\n          </td>\r\n          <td>\r\n            <Button class=\"addBtn\">\r\n              <span class=\"glyphicon glyphicon-check\"></span>\r\n            </Button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n              <label>Try something new</label>\r\n            </td>\r\n            <td>\r\n              <Button class=\"addBtn\">\r\n                <span class=\"glyphicon glyphicon-check\"></span>\r\n              </Button>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n              <td>\r\n                <label>Say Hello to a stranger</label>\r\n              </td>\r\n              <td>\r\n                <Button class=\"addBtn\">\r\n                  <span class=\"glyphicon glyphicon-check\"></span>\r\n                </Button>\r\n              </td>\r\n            </tr>\r\n  </table>\r\n</div>\r\n\r\n\r\n<div class='panel-footer'>\r\n  <a class='btn btn-default' [routerLink]=\"['/homes']\" style='width:80px'>\r\n    <i class='glyphicon glyphicon-chevron-left'></i> Back\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = (function () {
    function TasksComponent(http) {
        this.http = http;
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/task').subscribe(function (data) {
            console.log("BALLIN");
            console.log(data);
            _this.tasks = data;
        });
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasks',
            template: __webpack_require__("../../../../../src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/tasks.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map