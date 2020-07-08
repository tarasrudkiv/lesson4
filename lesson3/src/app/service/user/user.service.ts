import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return (
      this.httpClient.get<IUser[]>('http://jsonplaceholder.typicode.com/users')
    );
  }
}
