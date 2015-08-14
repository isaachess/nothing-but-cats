import {formDirectives, Component, View, bootstrap} from "angular2/angular2";
import {Http} from "angular2/http";

@Component({
    selector: "kitteh-tv"
})
@View({
    directives: [],
    templateUrl: '/src/kitteh-tv.html',
})
export default class KittehTV {

    constructor(
        private http:Http
    ) {
        console.log('http', http.get);
        this.changeChannel()
    }

    changeChannel() {
        console.log('changeChannel')
        return this.http.get('http://www.reddit.com/r/catgifs/new.json?sort=random').toRx().toPromise()
        .then((rs) => this.selectKitteh(rs.json().data.children))
    }

    selectKitteh(posts) {
        console.log('selectKitteh')
        var index = _.random(0, posts.length)
        //var filtered = _.filter(posts, (post) => post.data.url)
        this.post = posts[index]
        this.kittehUrl = this.post.data.url
        console.log('this.kittehUrl', this.kittehUrl)
    }
}
