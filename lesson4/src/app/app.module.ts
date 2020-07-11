import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {HttpClientModule} from '@angular/common/http';
import {Route, RouterModule, Routes} from '@angular/router';
import {PostService} from './service/post/post.service';
import {UserService} from './service/user/user.service';
import {CommentService} from './service/comment/comment.service';

const route: Routes = [
  {path: 'ShowComments', component: AllCommentsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    PostService,
    UserService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
