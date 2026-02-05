import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss',
})
export class ParentComponentComponent {
  @ViewChild(ChildComponentComponent)
  child!: ChildComponentComponent;
  
  callChildMethod(){
    if(this.child){
      this.child.greet();
    }
      
  }
}
