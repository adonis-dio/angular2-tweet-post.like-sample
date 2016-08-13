import {Component, Input} from 'angular2/core';

@Component({
    selector: 'likebtn',
    template: `
        <i class="glyphicon glyphicon-heart cursor-pointer" (click)="like()" [class]="isFavorite ?
        'glyphicon glyphicon-heart pink cursor-pointer':
        'glyphicon glyphicon-heart cursor-pointer'"></i>{{favcount}}`,
    styles: [`.pink{color: #D33257;}.cursor-pointer{cursor: pointer}`],
})

export class LikeComponent {
    @Input() isFavorite = false;
    @Input() favcount = 0;

    like() {
        this.isFavorite = !this.isFavorite;
        this.favcount += this.isFavorite ? 1 : -1;
    }
}