import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() inputfromParent: string = '';

  name: string = 'child to parent';

  @Output() updatename = new EventEmitter<string>();

  PostName() {
    this.updatename.emit(this.name);
  }
}
