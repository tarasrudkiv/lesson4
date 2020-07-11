import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {
    this.postService.getAllPost().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

}
