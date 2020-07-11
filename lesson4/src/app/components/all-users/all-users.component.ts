import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
