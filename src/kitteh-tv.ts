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
        this.changeChannel()
    }

    changeChannel() {
        return this.http.get('http://www.reddit.com/r/catgifs/new.json?sort=random').toRx().toPromise()
        .then((rs) => this.selectKitteh(rs.json().data.children))
    }

    selectKitteh(posts) {
        //var test1 = 'http://ma-gh.com/wp-content/uploads/cats-cute-cat-animal-cute-grass-photo.jpg'
        //var test2 = 'https://www.google.com/images/srpr/logo11w.png'
        //if (this.kittehUrl == test1) this.kittehUrl = test2
        //else this.kittehUrl = test1
        var filtered = _.filter(posts, (post) => goodUrl(post.data.url))
        var index = _.random(0, filtered.length)
        this.post = filtered[index]
        this.kittehUrl = this.post.data.url
        console.log('this.kittehUrl', this.kittehUrl)
    }
}

function goodUrl(url:string):boolean {
    return _.last(url.split('.')) == 'gif'
}
