import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address; 
  hobbies: string[];
  posts: Post[];
  isEditable: boolean = false;

  constructor(private dataService: DataService) {
    console.log('UserComponent contructor');
  }

  ngOnInit() {
    console.log('UserComponent onInit');
    
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'test@test.com';
    this.address = {
      street: '50 Main St.',
      city: 'Boston',
      state: 'MA'
    };
    this.dataService.getPosts().subscribe(response => {
      this.posts = response
    });
  }
  onClick(event) {
    console.log('clicked', event);
    console.log(this.posts);
    
  }
  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby, index) {
    for (let element of this.hobbies) {
      if (element === hobby) {
        this.hobbies.splice(index, 1);
      }
    }
  }
  toggleEdit() {
    this.isEditable = !this.isEditable;
  }
}

interface Address {
  street: string,
  city: string,
  state: string
};

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}
