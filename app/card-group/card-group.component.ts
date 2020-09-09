import { Component, OnInit } from '@angular/core';
import {CardGroup} from '../models/card-group';
import {ActivatedRoute, Router} from '@angular/router';
import {newArray} from '@angular/compiler/src/util';
import {Card} from '../models/card';
import {Subscription} from 'rxjs';
import {CardGroupServiceService} from '../services/card-group-service.service';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {
  public cardGroup: CardGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: CardGroupServiceService) {
    this.activatedRoute.params.subscribe(params => {
      const title = params.cardGroup;
      console.log('Moj title', title );
      this.cardGroup = service.getGroupByName(title);
      console.log('Servis vraca grupu: ', service.getGroupByName(title));
    });
  }

  ngOnInit(): void {
  }


}
