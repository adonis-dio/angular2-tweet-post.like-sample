/**
 * Created by adoni on 02/08/2016.
 */
import {Component, Input} from  'angular2/core';
import {LikeComponent} from "./like.component";

@Component({
    selector:"tweet",
    template:`
    <div class="media col-xs-offset-3 col-xs-6" style="margin-top: 10px">
        <div class="media-left">
          <img class="media-object img-rounded" src="{{data.imageUrl}}">
        </div>
        <div class="media-body">
            <h4 class="media-heading"><span class="handler">{{data.handle}}</span> {{data.author}}</h4>
            {{data.body}}
            <div>
            <likebtn [isFavorite]="data.iLike" [favcount]="data.likeCount"></likebtn>
            </div>
        </div>
    </div>
    `,
    styles:[`.handler{ color: #d9d9d9 }`],
    directives: [LikeComponent]
})

export class TweetComponent{
    @Input() data;
}
