import {Component, Input, OnInit} from '@angular/core';
import {CardGroup} from '../models/card-group';
import {Card} from '../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() cardList: Card[];
  @Input() cardGroupClicked: CardGroup;
  cardListFilter: Card[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
