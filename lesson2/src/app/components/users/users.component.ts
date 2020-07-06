import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../models/User';
import {UsersService} from '../../servises/users/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  user: IUser;

  constructor(private usersService: UsersService) {
  }
  ngOnInit(): void {
  }
  allPostsToLog(userid): void {
    this.usersService.getPostsOfSingleUser(userid).subscribe(value => console.log(value));
  }
}

