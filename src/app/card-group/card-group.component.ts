import { Component, OnInit } from '@angular/core';
import {CardGroup} from '../models/card-group';
import {ActivatedRoute, Router} from '@angular/router';
import {newArray} from '@angular/compiler/src/util';
import {Card} from '../models/card';
import {Subscription} from 'rxjs';
import {CardGroupServiceService} from '../card-group-service/card-group-service.service';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {

  // service: CardGroupServiceService;
  title: string;
  public cardGroup: CardGroup;
  private routeSub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: CardGroupServiceService) {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.title = params.cardGroup;
      console.log('Moj title', this.title );
    });
    // this.service = new CardGroupServiceService();
    this.cardGroup = service.getGroupByName(this.title);
    console.log('Servis vraca grupu: ', service.getGroupByName(this.title));
    // console.log(this.router.url);
  }

  ngOnInit(): void {
    // this.routeSub = this.activatedRoute.params.subscribe(params => {
    //   this.title = params.cardGroup;
    //   this.cardGroup = this.service.getGroupByName(this.title);
    //   console.log('Moja cardGroup', this.cardGroup );
    // });
  }


}
