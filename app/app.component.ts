import { Component } from '@angular/core';
import {CardGroup} from './models/card-group';
import {Card} from './models/card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pomoc pri ucenju';
  display = true;

  constructor() {
  }
}
