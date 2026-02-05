import { Component } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private userService: UserService){

  }

  Greet(){
    this.userService.GreetUser();
  }
}
