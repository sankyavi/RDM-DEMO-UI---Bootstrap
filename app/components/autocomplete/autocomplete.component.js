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
/**
 * @description The autocomplete functionalilty for masters search box
 * @author Avinash
 * @export AutocompleteComponent
 * @class AutocompleteComponent
 */
var AutocompleteComponent = (function () {
    function AutocompleteComponent(router) {
        this.router = router;
        this.query = '';
        this.filteredList = [];
        this.goto = new core_1.EventEmitter();
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    AutocompleteComponent.prototype.filter = function () {
        console.log("printer auto" + this.masters.toString());
        if (this.query !== "") {
            if (this.query.length >= 2) {
                this.filteredList = this.masters.filter(function (el) {
                    return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                    // use above if polyfill required for below
                    // return el.toLowerCase().includes(this.query.toLowerCase());
                }.bind(this));
            }
        }
        else {
            this.filteredList = [];
        }
    };
    AutocompleteComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    AutocompleteComponent.prototype.onClick = function () {
        var mastertable = this.query.split(' ').join('');
        console.log("autocomplete  :: mastertable : " + mastertable);
        this.router.navigate(['reference-details', mastertable]);
    };
    AutocompleteComponent.prototype.gotos = function () {
        this.goto.emit(this.query);
    };
    return AutocompleteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AutocompleteComponent.prototype, "masters", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AutocompleteComponent.prototype, "goto", void 0);
AutocompleteComponent = __decorate([
    core_1.Component({
        selector: 'autocomplete',
        templateUrl: './app/components/autocomplete/autocomplete.component.html',
        styles: ["\n        .autocomplete {\n            padding: 10px;\n            margin : 10px;\n        }\n        span {\n\t\t\tcursor: pointer;\n\t\t\tcursor: hand;\n\t\t}\n\t\t.lefty {\n\t\t\tpadding-left : 10px;\n\t\t}\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AutocompleteComponent);
exports.AutocompleteComponent = AutocompleteComponent;
