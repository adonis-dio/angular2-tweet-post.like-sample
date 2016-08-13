import {Component} from 'angular2/core';
import {TweetListComponent} from "./tweet-list.component";

@Component({
    selector: 'my-app',
    template: `
    <div class="row">
        <div class="col-xs-12">
            <tweetlist></tweetlist>
        </div>
    </div>`,
    directives: [TweetListComponent]
})

export class AppComponent {
}