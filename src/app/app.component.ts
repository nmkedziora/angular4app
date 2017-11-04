import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  post = {
    title: 'Post Title',
    isFavorite: true
  }
  onFavoriteChange(eventArgs) {
    console.log('Favorite has changed!: ', eventArgs);
  }
}
