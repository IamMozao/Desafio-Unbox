import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  deck: any
  page: 1
  pageSize: 10

  constructor(
    private actRoute: ActivatedRoute
  ) {
    //this.cardsService.getPokemonCards()
    this.actRoute.data.subscribe(data => {
      console.log(data);
      this.deck = data.deck
    });

    console.log(this.deck);

  }

  ngOnInit() {

  }

}
