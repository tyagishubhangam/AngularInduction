import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  message : string = 'Hello From Child'

  greet(){
    this.message = "Hurrah I am child component"
  }
}
