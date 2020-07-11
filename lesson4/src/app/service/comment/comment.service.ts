import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getAllComments(): Observable<IComment[]> {
    return (
      this.httpClient.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
    );
  }
}
