import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPosts} from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<IPosts[]> {
    return (
      this.httpClient.get<IPosts[]>('http://jsonplaceholder.typicode.com/posts')
    );
  }

//   getAllPostsOfSingleUser(userId: number): Observable<IPosts[]> {
//     return (
//       this.httpClient.get<IPosts[]>(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     );
//   }
// }
  getAllPostsOfSingleUser(id: number): Observable<IPosts[]> {
    return (
      this.httpClient.get<IPosts[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
    );
  }
}
