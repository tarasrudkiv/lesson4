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
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {UserResolverService} from './service/user/user-resolver.service';
import {PostResolverService} from './service/post/post-resolver.service';
import {CommentResolverService} from './service/comments/comment-resolver.service';
import {SingleUserComponent} from './components/single-user/single-user.component';
import {NextRouteService} from './service/next-route.service';

const routes: Routes = [
  {
    path: 'users', component: AllUsersComponent, children: [
      {path: ':id', component: SingleUserComponent},
      {path: 'posts/:id', component: AllPostsComponent},
    ], resolve: {allUsers: UserResolverService}, canActivate: [
      NextRouteService
    ]
  },
  {
    path: 'posts', component: AllPostsComponent, children: [
      {path: 'comments/:id', component: AllCommentsComponent}
    ], resolve: {allPosts: PostResolverService}, canActivate: [
      NextRouteService
    ]
  },
  {
    path: 'ShowAllComments', component: AllCommentsComponent, resolve: {allComments: CommentResolverService},
    canActivate: [
      NextRouteService
    ]
  },
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
    AllCommentsComponent,
    SingleUserComponent
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
