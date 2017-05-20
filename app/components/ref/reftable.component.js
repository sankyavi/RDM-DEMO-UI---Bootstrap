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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/retry");
var ref_service_1 = require("/app/services/ref.service");
var localstorage_service_1 = require("/app/services/localstorage.service");
/**
 * @description This will load the references and aloow editing and adding new references
 * @author Avinash
 * @export RefTableComponent
 * @class RefTableComponent
 */
var RefTableComponent = (function () {
    function RefTableComponent(_routeParams, _refService, _localStorageService) {
        this._routeParams = _routeParams;
        this._refService = _refService;
        this._localStorageService = _localStorageService;
        this.link = {};
        this.firstpage = true;
        this.lastpage = false;
    }
    RefTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routeParams.params
            .map(function (params) { return params['id']; })
            .switchMap(function (id) { return _this._refService.getData(id); })
            .retry(2)
            .subscribe(function (data) {
            _this.master_name = data.name;
            _this.link = data.link;
            _this.getDesc();
            _this.references = data.references;
            _this.noofrecords = data.totalreferences;
        }, function (err) { console.log('err occured' + err); }, function () { console.log('done' + _this.id2); });
    };
    // **IMP **no need to unsubscribe because it will be auto garbage collected 
    // including the observable on destroying component 
    // private ngOnDestroy() {
    //   this.sub.unsubscribe();
    // }
    RefTableComponent.prototype.getDesc = function () {
        var arraytemp = this.master_name.split(' ');
        this.master_type = arraytemp[0];
        this.master_desc = this._localStorageService.get(this.master_name);
        if (this.link === undefined) {
            this.linkflag = false;
        }
        else {
            this.linkflag = true;
            this.linktype = this.link.linkType;
            this.linkvalues = this.link.values;
        }
    };
    RefTableComponent.prototype.showid = function (num) {
        // var keys: string[] = this.generateKeys(this.references[num]);
        // var values: string[] = this.generateArray(this.references[num]);
        alert("This will open edit Modal for " + num);
    };
    RefTableComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    };
    RefTableComponent.prototype.generateKeys = function (obj) {
        return Object.keys(obj).map(function (key) { return key; });
    };
    RefTableComponent.prototype.change = function () {
        this.linkflag = false;
    };
    return RefTableComponent;
}());
RefTableComponent = __decorate([
    core_1.Component({
        templateUrl: './app/components/ref/reftable.component.html',
        styles: ["\n\t\ta:first-of-type {\n\t\t\tpadding-left: 15px;\n\t\t}\n\t\ta {\n\t\t\tcursor: pointer;\n\t\t\tcursor: hand;\n\t\t}\n    .lefty {\n\t\t\ttext-align : left;\n\t\t\tpadding-left : 15px;\n\t\t}\n    .pad {\n\t\t\tpadding : 4px;\n\t\t}\n    .bringdown {\n\t\t\tpadding-top : 5px;\n\t\t}\n    .iconshift {\n\t\t\tmargin-right: 10px;\n\t\t}\n    .nostyle {\n    text-decoration: none;\n    color: inherit;\n    }\n    .card {\n      padding : 5px 10px;\n      background-color: #FCFCFC;\n    }\n    .editmaster { \n      margin-top:10px;\n    }\n    .legendary {\n      width:230px;\n      background-color: #eceeef;\n    }\n\t"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof ref_service_1.RefService !== "undefined" && ref_service_1.RefService) === "function" && _a || Object, typeof (_b = typeof localstorage_service_1.LocalStorageService !== "undefined" && localstorage_service_1.LocalStorageService) === "function" && _b || Object])
], RefTableComponent);
exports.RefTableComponent = RefTableComponent;
var _a, _b;
