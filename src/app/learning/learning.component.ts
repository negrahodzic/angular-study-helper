import { Component, OnInit } from '@angular/core';
import {CardGroup} from '../models/card-group';
import {Card} from '../models/card';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  cardGroupClicked: CardGroup;
  cardListFilter: Card[];
  cardGroupList: CardGroup[];
  cardList: Card[];

  constructor() {
    this.cardGroupList = [
      new CardGroup('Matematika'),
      new CardGroup('Biologija'),
      new CardGroup('Fizika'),
      new CardGroup('Hemija'),
    ];

    this.cardList = [
      new Card('pitanje 1', 'odgovor 1', 'Matematika'),
      new Card('pitanje 2', 'odgovor 2', 'Matematika'),
      new Card('pitanje 3', 'odgovor 3', 'Hemija'),
      new Card('pitanje 4', 'odgovor 4', 'Hemija')
    ];

    this.cardListFilter = [];
  }

  ngOnInit(): void {
  }

  groupWasSelected(group: CardGroup): void {
    console.log('Group clicked: ', group.title);
    this.cardGroupClicked = group;
    this.cardList.forEach(value => {
      if (value.groupName === this.cardGroupClicked.title) {
        this.cardListFilter.push(value);
        console.log(value.groupName);
      }
    });
    console.log('Clicked: ', this.cardGroupClicked.title);

  }
}
