import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../models/card';
import {AlertController, ModalController} from '@ionic/angular';
import {CardEditComponent} from '../card-edit/card-edit.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() deleteCard: EventEmitter<Card>;

  constructor(public alertController: AlertController, public modalController: ModalController) {
    this.deleteCard = new EventEmitter<Card>();
  }

  ngOnInit(): void {
  }

  async presentAlertConfirm() {
      const alert = await this.alertController.create({
        header: 'Obrisite ovu karticu?',
        message: 'Da li ste sigurni da zelite da obrisete ovu karticu?',
        buttons: ['Ne',
          {
            text: 'Da',
            handler: () => {
              this.deleteCard.emit(this.card);
            }
          }
        ]
      });

      await alert.present();
  }

  async editCardModal() {
    const modal = await this.modalController.create({
      component: CardEditComponent,
      componentProps: {
        question: this.card.question,
        answer: this.card.answer
      }
    });
    modal.onWillDismiss().then((dataReturned) => {
      console.log(dataReturned.data.dismissed);
    });

    return await modal.present();
  }

}
