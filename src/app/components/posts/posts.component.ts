import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts()
    .subscribe(
      response => {
        this.posts = response.json();
      },
      error => {
        console.log('getPost error');
      })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.unshift(post);
        },
        error => {
          console.log('createPost error');
      })
  }

  updatePost(post) {
    this.service.patchPost(post.id, { isRed: true })
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          console.log('updatePost error');
      })
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        error => {
          console.log('deletePost error');
      })
  }
}
