import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  comment: IComment;

  constructor() {
  }

  ngOnInit(): void {
  }

}
