import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any[];
  comments: any[];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => this.posts = response);
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(response => this.comments = response);
  }
}

