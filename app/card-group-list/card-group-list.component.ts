import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardGroup} from '../models/card-group';

@Component({
  selector: 'app-card-group-list',
  templateUrl: './card-group-list.component.html',
  styleUrls: ['./card-group-list.component.css']
})
export class CardGroupListComponent implements OnInit {

  @Input() cardGroupList: CardGroup[];

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onGroupSelected: EventEmitter<CardGroup>;
  currentGroup: CardGroup;

  constructor() {
    this.onGroupSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  clicked(cardGroup: CardGroup): void {
    this.currentGroup = cardGroup;
    this.onGroupSelected.emit(cardGroup);


  }

}
