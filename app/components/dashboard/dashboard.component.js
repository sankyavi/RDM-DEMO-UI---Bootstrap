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
var ref_service_1 = require("/app/services/ref.service");
var localstorage_service_1 = require("/app/services/localstorage.service");
/**
 * @description The Dashboard component shows the master list
 * @author Avinash
 * @export DashboardComponent
 * @class DashboardComponent
 */
var DashboardComponent = (function () {
    function DashboardComponent(router, _localStorageService, _refService) {
        this.router = router;
        this._localStorageService = _localStorageService;
        this._refService = _refService;
        this.masterdata = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // make the service call to get master data
        this._refService.getData("masterdata.1")
            .subscribe(function (data) { return _this.masterdata = data.masterdata; }, function (err) { console.log('err occured' + err); }, function () { return _this.saveDescription(); } // call to save description of all masters in session storage object
        );
    };
    DashboardComponent.prototype.goto = function (table) {
        var mastertable = table.split(' ').join('');
        console.log("dashboard :: mastertable : " + mastertable);
        this.router.navigate(['/reference-details', mastertable]);
    };
    DashboardComponent.prototype.saveDescription = function () {
        for (var i = 0, l = this.masterdata.length; i < l; i++) {
            var obj = this.masterdata[i];
            var mastername = obj.name;
            var masterdesc = obj.description;
            this._localStorageService.set(mastername, masterdesc);
        }
        this.masters = this.masterdata.map(function (a) { return a.name; });
        console.log("printing" + this.masters);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        templateUrl: './app/components/dashboard/dashboard.component.html',
        styles: ["\n\t\t\tspan {\n\t\t\t\tcursor: pointer;\n\t\t\t\tcursor: hand;\n\t\t\t}\n\t\t\t.dashboard {\n\t\t\t\tmargin-top:10px;\n\t\t\t}\n\t\t\t.summary {\n\t\t\t\tpadding-left:15px;\n\t\t\t\tpadding-bottom:40px;\n\t\t\t\tpadding-top:40px;\n\t\t\t}\n\t\t\t.breadcrumb {\n\t\t\t\twidth:100vw;\n\t\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [router_1.Router, typeof (_a = typeof localstorage_service_1.LocalStorageService !== "undefined" && localstorage_service_1.LocalStorageService) === "function" && _a || Object, typeof (_b = typeof ref_service_1.RefService !== "undefined" && ref_service_1.RefService) === "function" && _b || Object])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var _a, _b;
