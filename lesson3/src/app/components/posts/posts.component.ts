import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from '../../models/post';
import {CommentsService} from '../../service/comments/comments.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post: IPosts;

  constructor(private commentService: CommentsService) {
  }

  ngOnInit(): void {
  }

  AllCommentsToLog(postId): void {
    this.commentService.getAllCommetsOfSinglePost(postId).subscribe(value => console.log(value));
  }

}
