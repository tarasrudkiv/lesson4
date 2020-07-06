import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<IComment[]> {
    return (
      this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
    )
  }
}
