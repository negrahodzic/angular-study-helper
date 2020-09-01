import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // display;
  @Output() displayEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  // register() {
  //   this.display = false;
  //   this.displayEvent.emit(this.display);
  // }
}
