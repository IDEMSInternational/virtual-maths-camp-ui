import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vmc-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  card = {
    "rank": "a",
    "suit": "hearts",
    "text": "Testing..."
  };
  constructor() { }

  ngOnInit(): void {
  }

}
