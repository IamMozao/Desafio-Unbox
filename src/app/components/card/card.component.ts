import { Component, OnInit, Input } from '@angular/core';

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
  }

  constructor() { }

  ngOnInit() {
  }

}
