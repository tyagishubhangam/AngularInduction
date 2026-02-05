import { Component } from '@angular/core';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';
}
