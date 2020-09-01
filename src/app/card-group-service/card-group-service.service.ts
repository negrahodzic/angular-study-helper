import { Injectable } from '@angular/core';
import {CardGroup} from '../models/card-group';
import {Card} from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardGroupServiceService {
  cardGroups: CardGroup[];

  constructor() {
    this.cardGroups = [
      new CardGroup('Matematika', [
        new Card('pitanje 1', 'odgovor 1'),
        new Card('pitanje 2', 'odgovor 2'),
        new Card('pitanje 3', 'odgovor 3'),
        new Card('pitanje 4', 'odgovor 4')
      ]),
        new CardGroup('Fizika', [
          new Card('FP 1', 'FO 1'),
          new Card('Fp 2', 'odgovor 2'),
          new Card('FP 3', 'odgovor 3'),
          new Card('FP 4', 'odgovor 4')
        ]),
          new CardGroup('Hemija', [
            new Card('HP 1', 'odgovor 1'),
            new Card('HP 2', 'odgovor 2'),
            new Card('HP 3', 'odgovor 3'),
            new Card('HP 4', 'odgovor 4')
          ])
    ];
  }

  getAllGroups(): CardGroup[] {
    return  this.cardGroups;
  }


  getGroupByName(groupName: string): CardGroup {
    let group: CardGroup;
    this.cardGroups.forEach(value => {
      if (value.title === groupName) {
        group = value;
      }
    });
    return group;
  }
}
