import { Component, Input } from '@angular/core';

@Component({
  selector: 'tweet-like',
  templateUrl: './tweet-like.component.html',
  styleUrls: ['./tweet-like.component.css']
})
export class TweetLikeComponent {
  @Input('is-active') isActive: boolean;
  @Input('likes-count') likesCount: number;
  @Input() body: string;

  onClick() {
    this.isActive = !this.isActive;
    this.isActive ? this.likesCount++ : this.likesCount--;
  }
}