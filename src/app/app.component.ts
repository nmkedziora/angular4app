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
  tweet = {
    body: 'sample tweet bla bla bla ...',
    likesCount: 101,
    isLiked: false
  }
  courses = ['course1', 'course2', 'course3'];
  viewMode = 'map';

  onFavoriteChange(eventArgs) {
    console.log('Favorite has changed!: ', eventArgs);
  }
}
