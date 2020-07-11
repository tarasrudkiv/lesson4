import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../service/comment/comment.service';
import {IComment} from '../../models/comment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private commentService: CommentService) {
    this.commentService.getAllComments().subscribe(value => this.comments = value);
  }

  ngOnInit(): void {
  }

}
