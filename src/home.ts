//http://victorsavkin.com/post/119943127151/angular-2-template-syntax
import {formDirectives, Component, View, bootstrap} from "angular2/angular2";
import {Http} from "angular2/http";

@Component({
    selector: "home"
})
@View({
    directives: [formDirectives],
    template: 'hi',
})
export default class Home {

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
    }

}

