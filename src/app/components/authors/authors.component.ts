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
  isDanger = true;

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
   }

  ngOnInit() {
  }

}
