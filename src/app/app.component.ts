import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Share-Data-between-Components';

  // kyuki hume parent aur child ke liye alag alag data chaiye iske liye hum 2 variable banayenge...

  forParent: string = 'ye parent component ke liye hai....';

  forChild: string =
    'ye child component ke liye hai..... parent component se aaya hua  data';
}
