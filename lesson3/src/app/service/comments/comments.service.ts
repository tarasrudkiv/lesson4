import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IComments} from '../../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllComments(): Observable<IComments[]> {
    return (
      this.httpClient.get<IComments[]>('http://jsonplaceholder.typicode.com/comments')
    );
  }
  getAllCommetsOfSinglePost(postId: number): Observable<IComments[]> {
    return (
      this.httpClient.get<IComments[]>(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    );
  }
}
