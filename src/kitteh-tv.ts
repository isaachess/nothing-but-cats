import {formDirectives, Component, View, bootstrap, NgFor} from "angular2/angular2";
import {Http} from "angular2/http";

@Component({
    selector: "kitteh-tv"
})
@View({
    directives: [NgFor],
    templateUrl: '/src/kitteh-tv.html',
})
export default class KittehTV {

    private redditAfterValue:string; // reddit gives us an "after" value in the json response.  If we query with it, we'll get the next batch.

    constructor(
        private http:Http
    ) {
        this.loadMoreKitteh()
        this.index = 0
    }

    loadMoreKitteh() {
        var query = (!!this.redditAfterValue) ? '?after='+this.redditAfterValue : ''
        var url = 'http://www.reddit.com/r/catgifs/new.json' + query
        return this.http.get(url).toRx().toPromise()
        .then((rs) => {
            var redditListing = rs.json().data
            var posts = redditListing.children
            this.posts = _.filter(posts, (post) => goodUrl(post.data.url))
            this.changeChannel()
            this.redditAfterValue = redditListing.after
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
