import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './components/users/users.component';
import {PostService} from './servises/post/post.service';
import {UsersService} from './servises/users/users.service';
import {CommentsService} from './servises/comments/comments.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    UsersService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
