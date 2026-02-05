import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';
import { User } from '../models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit{
  user:User;
userService = inject(UserService);

ngOnInit(): void {
    this.userService.userClicked.subscribe({
      next:(data:any)=>{
        this.user = data;
      }
    })
}


}
