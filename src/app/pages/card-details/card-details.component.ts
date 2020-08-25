import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var require: any
var Vibrant = require('node-vibrant')
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  cardInfo: any

  constructor(
    private actRoute: ActivatedRoute,
    private cardService: CardsService,
    private modalService: NgbModal
  ) {
    actRoute.params.subscribe(data => {
      console.log(data);
      this.getPokemonCard(data.id)
    })
  }

  async getPokemonCard(id) {
    const cardInfo = await this.cardService.getPokemonCardById(id)
    console.log(cardInfo);
    this.cardInfo = cardInfo

    Vibrant.from(this.cardInfo.imageUrl).getPalette()
      .then((palette) =>
        this.cardInfo.color = palette.Muted.hex)

  }

  ngOnInit() {
  }

  openModal(modalName) { // Abre e trata o fechamento de modais 
    this.modalService.open(modalName, { windowClass: 'modal-default', }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });

  }

}
