import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  display;
  @Output() displayEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.display = true;
    this.displayEvent.emit(this.display);
  }
}
