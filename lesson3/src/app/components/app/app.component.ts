import {Component} from '@angular/core';
import {IUser} from '../../models/user';
import {UserService} from '../../service/user/user.service';
import {IPosts} from '../../models/post';
import {IComments} from '../../models/comments';
import {PostService} from '../../service/post/post.service';
import {CommentsService} from '../../service/comments/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: IUser[];
  posts: IPosts[];
  comments: IComments[];

  constructor(private userService: UserService, private postService: PostService, private commentService: CommentsService) {
    this.userService.getAllUsers().subscribe(value => this.users = value);
    this.postService.getAllPosts().subscribe(value => this.posts = value);
    this.commentService.getAllComments().subscribe(value => this.comments = value);
  }

}
