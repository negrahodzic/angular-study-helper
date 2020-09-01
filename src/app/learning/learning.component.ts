import { Component, OnInit } from '@angular/core';
import {CardGroup} from '../models/card-group';
import {Card} from '../models/card';
import {CardGroupServiceService} from '../card-group-service/card-group-service.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  // service: CardGroupServiceService;
  cardGroupClicked: CardGroup;
  cardListFilter: Card[];
  cardGroupRowList: CardGroup[];

  constructor(private service: CardGroupServiceService) {
    // this.service = new CardGroupServiceService();
    this.cardGroupRowList = this.service.getAllGroups();

    this.cardListFilter = [];
  }

  ngOnInit(): void {
  }

  groupWasSelected(group: CardGroup): void {
    console.log('Group clicked: ', group.title);
    this.cardGroupClicked = group;
    console.log('Clicked: ', this.cardGroupClicked.title);

  }
}
