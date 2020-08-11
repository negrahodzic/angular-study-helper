import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user;
  ime = '';
  tekst: string;
  display;
  @Output() displayEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.display = true;
    this.displayEvent.emit(this.display);
  }
  register() {
    // this.user = new User(this.ime);
    this.tekst = this.user.firstName;
  }
}
