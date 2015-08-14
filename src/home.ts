//http://victorsavkin.com/post/119943127151/angular-2-template-syntax
import {formDirectives, Component, View, bootstrap} from "angular2/angular2";
import {Http} from "angular2/http";

@Component({
    selector: "home"
})
@View({
    directives: [formDirectives],
    //I could've just onButtonClick(name), but wanted to show #input syntax
    template: 'hi',
    //template:`
        //<div>Welcome to the <button (click)="onButtonClick(input.value)">{{name}}</button></div>
        //<input #input [(ng-model)]="name">
    //`
})
export default class Home {

    constructor(
        private http:Http
    ) {
        console.log('http', http.get);
        this.grabKitteh()
    }

    grabKitteh() {
        //return this.http.get('http://www.reddit.com/r/catgifs/new.json?sort=random').toRx().map((res) => res.json())
        //.subscribe(data => console.log('data', data))
        return this.http.get('http://www.reddit.com/r/catgifs/new.json?sort=random').toRx().toPromise()
        .then((rs) => console.log('rs', rs.json()))
    }

}
