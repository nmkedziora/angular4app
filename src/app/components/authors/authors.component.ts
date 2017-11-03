import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = 'List of authors';
  length;
  authors;
  isDanger = false;
  email = 'me@example.com';
  course = {
    title: 'title tile title',
    rating: 4.6785,
    students: 3454,
    price: 130.56,
    releaseDate: new Date(2016, 4, 6)
  }
  text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
   }

  ngOnInit() {
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Save changes - button was clicked');
    console.log($event);
  }

  onDivClicked() {
    console.log('<div> was clicked');
  }

  onKeyUp(value) {
    // traditional way:
    // in .html file: 
    // <input (keyup)="onKeyUp($event)"/>
    // if($event.keyCode === 13) {
    //   console.log('ENTER was pressed');
    // }

    // angular way
    console.log('ENTER was pressed');
    console.log(value);
  }

  onEmailKeyUp() {
    console.log(this.email);
    
  }

}
