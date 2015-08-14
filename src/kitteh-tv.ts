import {formDirectives, Component, View, bootstrap, NgFor} from "angular2/angular2";
import {Http} from "angular2/http";

@Component({
    selector: "kitteh-tv"
})
@View({
    directives: [NgFor],
    //templateUrl: '/src/kitteh-tv.html',
    template: `
        <div class="tv-container">
            <div class="kitteh-gif-container stretch absolute">
                <div class="kitteh-gif-container-inner stretch">
                    <img class="kitteh-gif stretch" src="{{kittehUrl}}"/>
                </div>
            </div>
            <div class="stretch absolute">
                <img class="stretch" (click)="changeChannel()" src="img/TV-HOF.png"/>
            </div>
        </div>
        <div *ng-for="#post of posts" class="off-screen"><img src="{{getPostUrl(post)}}"></div>
    `
})
export default class KittehTV {

    constructor(
        private http:Http
    ) {
        this.loadMoreKitteh()
        this.index = 0
    }

    loadMoreKitteh() {
        return this.http.get('http://www.reddit.com/r/catgifs/new.json?sort=random').toRx().toPromise()
        .then((rs) => {
            var posts = rs.json().data.children
            this.posts = _.filter(posts, (post) => goodUrl(post.data.url))
            this.changeChannel()
        })
    }

    changeChannel(posts) {
        if (!this.posts) throw new Error("No posts!")
        if (this.index+1 == this.posts.length) {
            this.index = 0
            this.loadMoreKitteh()
            return
        }
        this.index = (typeof this.index === 'undefined') ? 0 : this.index+1
        this.post = this.posts[this.index]
        this.kittehUrl = this.getPostUrl(this.post)
    }

    getPostUrl(post) {
        return post.data.url
    }
}

function goodUrl(url:string):boolean {
    return _.last(url.split('.')) == 'gif'
}
