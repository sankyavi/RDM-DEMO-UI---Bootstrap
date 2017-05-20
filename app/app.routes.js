"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reftable_component_1 = require("./components/ref/reftable.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var dummy_component_1 = require("./components/dummy/dummy.component");
exports.appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: dummy_component_1.DummyComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'reference-details/:id', component: reftable_component_1.RefTableComponent }
];
