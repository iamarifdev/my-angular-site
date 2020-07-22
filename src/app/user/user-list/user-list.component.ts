import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public userList: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserList().subscribe((list) => {
      this.userList = list;
    });
  }
}
