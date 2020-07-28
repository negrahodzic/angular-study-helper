import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PomocPriUcenju';
  display = true;
  // display2 = false;

  displayEventHandler($event: any) {
    this.display = $event;
  }
  // displayEventHandler2($event: any) {
  //   this.display2 = !$event;
  // }
}
