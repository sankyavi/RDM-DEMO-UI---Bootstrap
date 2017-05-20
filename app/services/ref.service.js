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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
/**
 * @description Generic service to fetch data from a json and return a response json
 * @author Avinash
 * @export RefService
 * @class RefService
 */
var RefService = (function () {
    function RefService(_http) {
        this._http = _http;
    }
    RefService.prototype.getData = function (id) {
        var url = './app/data/' + id + '.json';
        if (id === 'masterdata') {
            console.info('reached ova here');
            // url = 'insert url here';
        }
        console.log("url in service call: " + url);
        return this._http.get(url).map(function (res) { return res.json(); });
    };
    return RefService;
}());
RefService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RefService);
exports.RefService = RefService;
