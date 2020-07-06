import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {IUser} from '../../models/User';
import {IComment} from '../../models/Comment';
import {PostService} from '../../servises/post/post.service';
import {CommentsService} from '../../servises/comments/comments.service';
import {UsersService} from '../../servises/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
  users: IUser[];
  comments: IComment[];

  // constructor(private http: HttpClient) {
  //   this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe(value => this.posts = value);
  //   this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe(value => this.users = value);
  //   this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
  //     .subscribe(value => this.comments = value);
  // }
  constructor(private postServise: PostService, private commmentServise: CommentsService, private userServise: UsersService) {
    this.postServise.getPosts().subscribe(value => this.posts = value);
    this.commmentServise.getComments().subscribe(value => this.comments = value);
    this.userServise.getUsers().subscribe(value => this.users = value);
  }
}
