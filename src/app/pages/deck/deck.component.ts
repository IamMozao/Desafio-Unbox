import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  deck: any
  page = 1
  pageSize = 20
  screenInfo: any

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  constructor(
    private actRoute: ActivatedRoute,
    private screenService: ScreenService
  ) {
    this.screenInfo = screenService._screenInfo

    this.screenService.screenInfo.subscribe(data => {
      console.log(data);
      this.screenInfo = data
    })


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
