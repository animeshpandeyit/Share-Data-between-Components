import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Share-Data-between-Components';

  forParent: string = 'Parent to Parent';
  forChild: string = 'Parent to Child';

  getName(name: string) {
    this.forParent = name;
  }

  @ViewChild(ChildComponent) child:any ;

  buttonClick(){
    this.forParent = this.child.name;
  }
}
