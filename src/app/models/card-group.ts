import {Card} from './card';

export class CardGroup {
  title: string;
  cardList: Card[];

  constructor(title: string) {
    this.title = title;
    // this.cardList = [
    //   new Card('pitanje 1', 'odgovor 1'),
    //   new Card('pitanje 2', 'odgovor 2'),
    //   new Card('pitanje 3', 'odgovor 3'),
    //   new Card('pitanje 4', 'odgovor 4')
    // ];

  }
}
