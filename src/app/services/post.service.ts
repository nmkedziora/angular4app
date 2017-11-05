import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: { title: string}) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  patchPost(id: number, property: { isRed: boolean}) {
    return this.http.patch(
      `${this.url}/${id}`,
      JSON.stringify(property)
    )
  }

  deletePost(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
