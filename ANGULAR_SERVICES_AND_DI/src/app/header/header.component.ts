import { Component, inject } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // constructor based DI
  // constructor(private userService: UserService){

  // }

  // We can also use inject() method
  userService = inject(UserService)

  Greet(){
    this.userService.GreetUser();
  }
}
