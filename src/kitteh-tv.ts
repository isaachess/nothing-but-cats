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
        this.grabKitteh()
    }

    grabKitteh() {
        return this.http.get('http://www.reddit.com/r/catgifs/new.json?sort=random').toRx().toPromise()
        .then((rs) => this.selectKitteh(rs.json().data.children))
    }

    selectKitteh(posts) {
        var index = _.random(0, posts.length)
        this.post = posts[index]
        console.log('post', this.post)
    }

}
