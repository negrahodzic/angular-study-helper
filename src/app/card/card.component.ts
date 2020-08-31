import {Component, Input, OnInit} from '@angular/core';
import {CardGroup} from '../models/card-group';
import {Card} from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  constructor() { }

  ngOnInit(): void {
  }

}
