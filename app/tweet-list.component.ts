/**
 * Created by adoni on 02/08/2016.
 */
import {Component} from 'angular2/core';
import {PostService} from "./posts.service";
import {TweetComponent} from "./tweet.component";

@Component({
    selector:"tweetlist",
    template:`
    <div *ngFor="#tweet of tweets">
        <tweet [data]="tweet"></tweet>
    </div>
    `,
    directives: [TweetComponent],
    providers: [PostService]
})

export class TweetListComponent{
    tweets:any[];

    constructor(tweetService: PostService){
        this.tweets = tweetService.getPost();
    }
}