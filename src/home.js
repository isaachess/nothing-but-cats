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
//http://victorsavkin.com/post/119943127151/angular-2-template-syntax
var angular2_1 = require("angular2/angular2");
var Home = (function () {
    function Home(http) {
        this.http = http;
        console.log('http', http.get);
        this.grabKitteh();
    }
    Home.prototype.grabKitteh = function () {
        var _this = this;
        return this.http.get('http://www.reddit.com/r/catgifs/new.json?sort=random').toRx().toPromise()
            .then(function (rs) { return _this.selectKitteh(rs.json().data.children); });
    };
    Home.prototype.selectKitteh = function (posts) {
        var index = _.random(0, posts.length);
        this.post = posts[index];
    };
    Home = __decorate([
        angular2_1.Component({
            selector: "home"
        }),
        angular2_1.View({
            directives: [angular2_1.formDirectives],
            template: 'hi',
        }), 
        __metadata('design:paramtypes', [(typeof Http !== 'undefined' && Http) || Object])
    ], Home);
    return Home;
})();
exports.default = Home;
