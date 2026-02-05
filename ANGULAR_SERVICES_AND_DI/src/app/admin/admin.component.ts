import { Component } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  name: string = 'default';
   gender: string = 'default';
  constructor(private userService: UserService){

  }
   

   AddUser(){
    this.userService.CreateUser(this.name, this.gender);
   }
}
