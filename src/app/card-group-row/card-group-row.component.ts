import {Component, Input, OnInit} from '@angular/core';
import {CardGroup} from '../models/card-group';

@Component({
  selector: 'app-card-group-row',
  templateUrl: './card-group-row.component.html',
  styleUrls: ['./card-group-row.component.css']
})
export class CardGroupRowComponent implements OnInit {

  @Input() cardGroup: CardGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
