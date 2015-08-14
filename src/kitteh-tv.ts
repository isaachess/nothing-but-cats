import {formDirectives, Component, View, bootstrap} from "angular2/angular2";

@Component({
    selector: "kitteh-tv"
})
@View({
    directives: [],
    template: `
        <img class="stretch-width" src="/img/TV-HOF.png"/>
    `
})
export default class KittehTV {}