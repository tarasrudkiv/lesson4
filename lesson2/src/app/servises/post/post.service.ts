import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post';
import {IComment} from '../../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return (
      this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    );
  }

  getCommentsOfSinglePost(postid): Observable<IComment[]> {
    return (
      this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
    );
  }
}
