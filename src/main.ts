import 'reflect-metadata';
import 'es6-shim';
import "zone.js";

import {Component, View, bootstrap, NgFor} from "angular2/angular2";
import {httpInjectables} from "angular2/http";
import {HashLocationStrategy, LocationStrategy, Router, RouterLink, RouteConfig, RouterOutlet, routerInjectables} from "angular2/router";
import {bind, Injectable} from "angular2/di";
import {EventEmitter, ObservableWrapper} from 'angular2/src/facade/async';


import Home from "./home";
import RepoList from "./repo-list";
import KittehTV from "./kitteh-tv";

@RouteConfig([
    {path: '/', as: "home", component:KittehTV},
    {path: '/repo-list', as: "repo-list", component:RepoList},
])
@Component({
    selector: "app"
})
@View({
    directives: [RouterOutlet, RouterLink],
    template: `
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})
class App {}

bootstrap(App, [
    httpInjectables,
    routerInjectables,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log(`Bootstrap success`),
        error => console.log(error)
);


