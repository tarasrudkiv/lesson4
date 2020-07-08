import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user/user.service';
import {PostService} from './service/post/post.service';
import {CommentsService} from './service/comments/comments.service';
import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';

const routes: Routes = [
  {path: 'ShowAllUsers', component: AllUsersComponent},
  {path: 'ShowAllPosts', component: AllPostsComponent},
  {path: 'ShowAllComments', component: AllCommentsComponent},
  {path: 'posts/:id', component: AllPostsComponent},
  {path: 'comments/:id', component: AllCommentsComponent}
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
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, PostService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
