import { Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  constructor(private userService: UserService){

  }

  usersList = this.userService.GetAllUsers();

  ShowDetails(user:User){
    this.userService.OnShowUserDetails(user);
  }
}
