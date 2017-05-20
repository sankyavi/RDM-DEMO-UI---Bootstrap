"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
// user defined component imports
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var reftable_component_1 = require("./components/ref/reftable.component");
var autocomplete_component_1 = require("./components/autocomplete/autocomplete.component");
var dummy_component_1 = require("./components/dummy/dummy.component");
var masterinfo_component_1 = require("./components/common/masterinfo.component");
var table_component_1 = require("./components/common/table.component");
// user defined misc imports
var ref_service_1 = require("./services/ref.service");
var localstorage_service_1 = require("./services/localstorage.service");
var app_routing_1 = require("./app.routing");
/**
 * @description Feature module 1 has funtionaily for reference data mgmt
 * @author Avinash , vino , arun ,
 * @export FeatureModule1
 * @class FeatureModule1
 * @record Avinash 1/20/2017 updated functinality 1
 * @record Avinash 1/30/2017 removed functinality 2
 */
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            reftable_component_1.RefTableComponent,
            dashboard_component_1.DashboardComponent,
            autocomplete_component_1.AutocompleteComponent,
            dummy_component_1.DummyComponent,
            masterinfo_component_1.MasterinfoComponent,
            table_component_1.TableComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.appRouting
        ],
        providers: [
            ref_service_1.RefService,
            localstorage_service_1.LocalStorageService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
