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

}
