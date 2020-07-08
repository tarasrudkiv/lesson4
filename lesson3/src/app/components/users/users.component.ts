import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/user';
import {PostService} from '../../service/post/post.service';
import {CommentsService} from '../../service/comments/comments.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  user: IUser;

  constructor(private postService: PostService, private commentService: CommentsService) {
  }

  ngOnInit(): void {
  }

  AllPostsToLog(userId): void {
    this.postService.getAllPostsOfSingleUser(userId).subscribe(value => console.log(value));
  }

  PostsAndCommentsToLog(id: number): void {
    this.postService.getAllPostsOfSingleUser(id).subscribe(posts => {
      console.log(posts);
      for (const post of posts) {
        this.commentService.getAllCommetsOfSinglePost(post.id).subscribe(value => console.log(value));
      }
    });
  }
}
