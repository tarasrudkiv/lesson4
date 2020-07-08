import {Component, Input, OnInit} from '@angular/core';
import {IComments} from '../../models/comments';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  comment: IComments;

  constructor() {
  }

  ngOnInit(): void {
  }



}
