import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  @Input() question: string;
  @Input() answer: string;

  constructor(public modalController: ModalController) {
  }

  ngOnInit(): void {
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
