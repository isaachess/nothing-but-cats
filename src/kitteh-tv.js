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
var angular2_1 = require("angular2/angular2");
var KittehTV = (function () {
    function KittehTV(http) {
        this.http = http;
        this.loadMoreKitteh();
        this.index = 0;
    }
    KittehTV.prototype.loadMoreKitteh = function () {
        var _this = this;
        return this.http.get('http://www.reddit.com/r/catgifs/new.json?limit=100').toRx().toPromise()
            .then(function (rs) {
            var posts = rs.json().data.children;
            _this.posts = _.filter(posts, function (post) { return goodUrl(post.data.url); });
            _this.changeChannel();
        });
    };
    KittehTV.prototype.changeChannel = function (posts) {
        if (!this.posts)
            throw new Error("No posts!");
        if (this.index + 1 == this.posts.length) {
            this.index = 0;
            this.loadMoreKitteh();
            return;
        }
        this.index = (typeof this.index === 'undefined') ? 0 : this.index + 1;
        this.post = this.posts[this.index];
        this.kittehUrl = this.getPostUrl(this.post);
    };
    KittehTV.prototype.getPostUrl = function (post) {
        return post.data.url;
    };
    KittehTV = __decorate([
        angular2_1.Component({
            selector: "kitteh-tv"
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            //templateUrl: '/src/kitteh-tv.html',
            template: "\n        <div class=\"tv-container\">\n            <div class=\"kitteh-gif-container stretch absolute\">\n                <div class=\"kitteh-gif-container-inner stretch\">\n                    <img class=\"kitteh-gif stretch\" src=\"{{kittehUrl}}\"/>\n                </div>\n            </div>\n            <div class=\"stretch absolute\">\n                <img class=\"stretch\" (click)=\"changeChannel()\" src=\"img/TV-HOF.png\"/>\n            </div>\n        </div>\n        <div *ng-for=\"#post of posts\" class=\"off-screen\"><img src=\"{{getPostUrl(post)}}\"></div>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof Http !== 'undefined' && Http) || Object])
    ], KittehTV);
    return KittehTV;
})();
exports.default = KittehTV;
function goodUrl(url) {
    return _.last(url.split('.')) == 'gif';
}
