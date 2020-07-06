import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostService} from '../../servises/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  post: Post;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  allCommentsToLog(postid: number): void {
    console.log(postid);
    this.postService.getCommentsOfSinglePost(postid).subscribe(value => console.log(value));
  }
}
