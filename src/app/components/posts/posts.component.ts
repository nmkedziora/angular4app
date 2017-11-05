import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { AppError } from '../../../common/app-error';
import { NotFoundError } from '../../../common/not-found-error';

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
        (error: Response) => {
          if(error.status === 400) {
            console.log('Bad request');
          } else {
            console.log('createPost error');
          }
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
    this.service.deletePost(345)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          console.log(error instanceof NotFoundError);
          
          if(error instanceof NotFoundError) {
            console.log('This post has already been deleted');
          } else {
            console.log('deletePost error');
          }
      })
  }
}
