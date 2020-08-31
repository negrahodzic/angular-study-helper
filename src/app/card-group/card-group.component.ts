import {Component, Input, OnInit} from '@angular/core';
import {CardGroup} from '../models/card-group';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {

  @Input() cardGroup: CardGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
