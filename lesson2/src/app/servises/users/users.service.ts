import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../models/User';
import {Post} from '../../models/Post';
import {PostService} from '../post/post.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, private postService: PostService) {
  }

  getUsers(): Observable<IUser[]> {
    return (
      this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    );
  }

  getPostsOfSingleUser(userid): Observable<Post[]> {
    return (
      this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
    );
  }
}
