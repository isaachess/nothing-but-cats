var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('reflect-metadata');
require('es6-shim');
require("zone.js");
var angular2_1 = require("angular2/angular2");
var http_1 = require("angular2/http");
var router_1 = require("angular2/router");
var di_1 = require("angular2/di");
var repo_list_1 = require("./repo-list");
var kitteh_tv_1 = require("./kitteh-tv");
var App = (function () {
    function App() {
    }
    App = __decorate([
        router_1.RouteConfig([
            { path: '/', as: "home", component: kitteh_tv_1.default },
            { path: '/repo-list', as: "repo-list", component: repo_list_1.default },
        ]),
        angular2_1.Component({
            selector: "app"
        }),
        angular2_1.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            template: "\n        <main>\n            <router-outlet></router-outlet>\n        </main>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App, [
    http_1.httpInjectables,
    router_1.routerInjectables,
    di_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]).then(function (success) { return console.log("Bootstrap success"); }, function (error) { return console.log(error); });
