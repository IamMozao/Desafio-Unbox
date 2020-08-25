import { Component, OnInit, Input } from '@angular/core';
declare var require: any
var Vibrant = require('node-vibrant')

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardInfo: any

  @Input()
  public set _cardInfo(value) {
    console.log(value);
    this.cardInfo = value

    Vibrant.from(this.cardInfo.imageUrl).getPalette()
      .then((palette) =>
        this.cardInfo.color = palette.Muted.hex)
  }

  constructor() { }

  ngOnInit() {
  }

}
