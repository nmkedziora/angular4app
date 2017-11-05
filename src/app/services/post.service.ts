import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';

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
      .catch((error: Response) => {
        if(error.status === 404) {
          console.log('111');
          return Observable.throw(new NotFoundError());
        } else {
          console.log('222');
          return Observable.throw(new AppError(error));
        }
      })
  }
}
